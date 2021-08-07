<?php

namespace App\Http\Controllers\Client;

use App\Http\Controllers\Controller;
use App\Models\Package;
use App\Models\PaymentLog;
use App\Models\Referral;
use App\Models\Reminder;
use App\Models\Task;
use Carbon\Carbon;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Lang;
use phpDocumentor\Reflection\DocBlock\Tags\Return_;

class DashboardController extends Controller
{

    public $stripe;

    public function __construct()
    {
        $this->stripe = new \Stripe\StripeClient(config('services.stripe.sk'));

    }

    /**
     * index
     *
     * @param  mixed $request
     * @return void
     */
    public function index(Request $request)
    {
        $user = $request->user();
        return [
            'user' => $user->load('plan'),
            'task' => [
                'all_task' => Task::mine($user)->count(),
                'active_tasks' => Task::mine($user)->whereStatus(Task::$status['ACTIVE'])->count(),
                'pending_tasks' => Task::mine($user)->whereStatus(Task::$status['PENDING'])->count(),
                'work_in_progress' => Task::mine($user)->whereStatus(Task::$status['ACTIVE'])->count(),
                'recurring' => Task::mine($user)->whereType(Task::$type['SCHEDULE'])->count(),
                'completed' => Task::mine($user)->whereStatus(Task::$status['COMPLETE'])->count(),
                'cancelled' => Task::mine($user)->whereStatus(Task::$status['CANCEL'])->count(),
            ],
            "referrels" => Referral::with('client.plan')
                            ->whereClientId($request->user()->id)
                            ->where('registration_status', 1)
                            ->latest()
                            ->get(),

            "reminders" => Reminder::whereClientId($request->user()->id)
                        ->whereDate('utc_start', '>=' , date('Y-m-d'))
                        ->whereDate('utc_end', '<=' , date('Y-m-d'))
                        ->get()
        ];



    }


    /**
     * me
     *
     * @param  mixed $request
     * @return void
     */
    public function me(Request $request){

        $user =  $request->user()->load('plan');

        if($user->stripe_customer_id == null){
            $user->card_details = [];
        }
        else{
            $sources = $this->stripe->customers->allSources(
                $user->stripe_customer_id,
                ['object' => 'card', 'limit' => 1]
            );

            $user->card_details = collect($sources->data)->first();
        }

        return $user;
    }

    /**
     * changePassword
     *
     * @param  mixed $request
     * @return void
     */
    public function changePassword(Request $request){
        $request->validate([
            'password' => ['required', 'string', 'min:8', 'confirmed'],
            'old_password' => ['required'],
        ]);

        extract($request->all());

        $user = $request->user();

        if(Hash::check($old_password, $user->password)){
            $user->password = Hash::make($password);
            $user->save();

            return $this->responseSuccess(Lang::get("passwords.reset"));
        }

        return $this->responseWithError(['password' => Lang::get("validation.password_match")]);
    }

    public function chargeTask(Request $request){
        $request->validate([
            "taskcount" => "numeric|min:1",
            // "stripe_token" => "required",
        ]);

        if($request->user()->stripe_customer_id == null) $this->responseWithError(['payment_details' => "Your payment detail is not updated yet"]);

        $response = $this->stripe->charges->create([
            'amount' => $request->taskcount * 4 * 100,
            'currency' => 'usd',
            'customer' => $request->user()->stripe_customer_id,
            'description' => "Bought additional {$request->taskcount} for 4$ each",
        ]);

        $log = new PaymentLog();
        $log->addLog($request->user(), 0, $response);

        $request->user()->increment('remaining_tasks', $request->taskcount);

        return $this->responseSuccess("Task has been bought successfully");

    }


    /**
     * updateCardDetails
     *
     * @param  mixed $request
     * @return void
     */
    public function updateCardDetails(Request $request){
        $request->validate([
            "card.cvc" => "required|numeric",
            "card.exp_month" => "required|numeric",
            "card.exp_year" => "required|numeric",
            "card.number" => "required",
            "card.name" => "required"
        ]);

        $client = $request->user();

        try {
            $token = $this->stripe->tokens->create([
                'card' => $request->card,
            ]);
        }
        catch(Exception $e){
            return $this->responseWithError(['card' => $e->getMessage()]);
        }

        if($client->stripe_customer_id == null){

            $customer = $this->stripe->customers->create([
                'description' => "{$client->name} customer",
                'email' => $client->email,
                'name' => $client->name,
            ]);

            $client->stripe_customer_id = $customer['id'];
            $client->save();

            $this->stripe->customers->createSource(
                $client->stripe_customer_id,
                ['source' => $token['id']]
            );
        }
        else{

            $this->stripe->customers->createSource(
                $client->stripe_customer_id,
                ['source' => $token['id']]
            );

            $this->stripe->customers->deleteSource(
                $client->stripe_customer_id,
                $request->source_id,
                []
            );
        }

        return $this->responseSuccess("Card information has been saved successfully");

    }


    public function upgradePackage(Request $request){
        $request->validate([
            'package_id' => 'required',
        ]);

        $user = $request->user();

        $package = Package::find($request->package_id);

        if(!$package) return $this->responseWithError(['package' => "Package not found "]);


        $response = $this->stripe->charges->create([
            'amount' => $package->no_of_task * 100,
            'currency' => 'usd',
            'customer' => $request->user()->stripe_customer_id,
            'description' => "Changed package subscription {$package->no_of_task} for {$package->price}$",
        ]);

        $log = new PaymentLog();

        $log->addLog($request->user(), 0, $response);

        $user->increment('remaining_tasks', $package->no_of_task);

        $user->current_plan = $package->id;
        $user->next_billing_date = Carbon::now()->addDays(30);
        $user->save();

        return $this->responseSuccess("Package has been upgraded successfully");

    }

}
