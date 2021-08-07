<?php

namespace App\Http\Controllers\Client;

use App\Http\Controllers\Controller;
use App\Models\Reminder;
use Carbon\Carbon;
use Illuminate\Http\Request;

class ReminderController extends Controller
{
    /**
     * index
     *
     * @return void
     */
    public function index(Request $request){
        $not_added_reminders = Reminder::whereClientId($request->user()->id)->where('append', 0)->latest()->get();
        $added_reminders = Reminder::whereClientId($request->user()->id)->where('append', 1)->latest()->get();

        return [
            "not_added_reminders" => $not_added_reminders,
            "added_reminders" => $added_reminders,
        ];
    }

    public function update(Request $request, Reminder $reminder){
        $reminder->start = Carbon::parse($request->start);
        $reminder->end = $request->end ? Carbon::parse($request->end) : Carbon::parse($request->start);
        $reminder->utc_start = Carbon::parse($request->utc_start);
        $reminder->utc_end = $request->utc_end ? Carbon::parse($request->utc_end) : Carbon::parse($request->utc_start);
        $reminder->append = 1;
        $reminder->save();
    }

    public function destroy(Reminder $reminder){
        $reminder->delete();
    }

    public function store(Request $request){
        $request->validate([
            "title" => "required",
            "description" => "required",
        ]);

        $reminder = new Reminder();
        $reminder->fill([
            'title' => $request->title,
            'description' => $request->description,
            'client_id' => $request->user()->id,
            'color' => $request->color,
        ]);
        $reminder->save();

        return $this->responseSuccess("Reminder is created successfully");

    }
}
