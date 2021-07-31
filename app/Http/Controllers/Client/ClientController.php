<?php

namespace App\Http\Controllers\Client;

use App\Http\Controllers\Controller;
use App\Mail\WelcomeEmail;
use App\Models\Client;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class ClientController extends Controller
{

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Resources\Json\AnonymousResourceCollection
     */
    public function index(){
        return Client::with('plan')->latest()->get();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $user = new Client();
        // $password = rand(1000, 10000);
        $password = 12345678;
        $data = $request->only($user->getFillable());
        $data['password'] = bcrypt($password);
        $data['status'] = 1;
        $user->fill($data);
        $user->save();
        try{
            Mail::to($user->email)->send(new WelcomeEmail($user, $password));
        }
        catch(Exception $e){
            return response()->json(['message' => 'Client is added successfully but mail is not sent, Please check the mailing credentials']);
        }
        return response()->json(['message' => 'Client is added successfully']);
    }

    /**
     * Display the specified resource.
     *
     * @param  User $user
     * @return UserResource
     */
    public function show(Client $client)
    {
        return $client->load('plan');
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $user = Client::find($id);
        $data = $request->only($user->getFillable());
        if($data)
            $data['password'] = bcrypt($request->password);
        unset($data['email']);
        $user->fill($data);
        $user->save();
        return response()->json(['message' => 'Client is updated successfully']);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  User $user
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $user = Client::find($id);
        $user->status = !$user->status;
        $user->save();
        return response(['message' => 'Client has been ' . ($user->status? 'activated': "blocked")]);
    }
}
