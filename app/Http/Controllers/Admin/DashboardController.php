<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Referral;
use App\Models\Task;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    public function index(Request $request)
    {
        $user = $request->user();
        return [
            'user' => $user,
            'task' => [
                'all_task' => Task::count(),
                'active_tasks' => Task::whereStatus(Task::$status['ACTIVE'])->count(),
                'pending_tasks' => Task::whereStatus(Task::$status['PENDING'])->count(),
                'work_in_progress' => Task::whereStatus(Task::$status['ACTIVE'])->count(),
                'recurring' => Task::whereType(Task::$type['SCHEDULE'])->count(),
                'completed' => Task::whereStatus(Task::$status['COMPLETE'])->count(),
                'cancelled' => Task::whereStatus(Task::$status['CANCEL'])->count(),
            ],
            "referrels" => Referral::with('client.plan')
                            ->whereClientId($request->user()->id)
                            ->where('registration_status', 1)
                            ->latest()
                            ->get(),
            "reminders" => [],
            // "reminders" => Reminder::whereClientId($request->user()->id)
            //             ->whereDate('utc_start', '>=' , date('Y-m-d'))
            //             ->whereDate('utc_end', '<=' , date('Y-m-d'))
            //             ->get()
        ];



    }

}
