<?php

namespace App\Http\Controllers\Client;

use App\Http\Controllers\Controller;
use App\Models\Task;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class DashboardController extends Controller
{
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
            ]
        ];
    }


    /**
     * me
     *
     * @param  mixed $request
     * @return void
     */
    public function me(Request $request){
        return $request->user()->load('plan');
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

    /**
     * updateProfile
     *
     * @param  mixed $request
     * @return void
     */
    public function updateProfile(Request $request){

        $user = $request->user();

        $user->fill(collect($request->except('image', 'cover', 'email'))->toArray());

        $user->save();

        return $this->responseSuccess("Profile is updated successfully");

    }


    /**
     * updateCover
     *
     * @param  mixed $request
     * @return void
     */
    public function updateCover(Request $request){
        $user = $request->user();
        $path = $request->file('cover')->store('public/profile_covers');
        $path = str_replace('public/','',$path);
        $user->cover = $path;
        $user->save();

        return $this->responseSuccess("Profile cover is updated successfully");
    }

    /**
     * updateProfilePic
     *
     * @param  mixed $request
     * @return void
     */
    public function updateProfilePic(Request $request){
        $user = $request->user();
        $path = $request->file('image')->store('public/profile_pictures');
        $path = str_replace('public/','',$path);
        $user->image = $path;
        $user->save();

        return $this->responseSuccess("Profile photo is updated successfully");
    }

}
