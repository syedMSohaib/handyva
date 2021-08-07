<?php

namespace App\Http\Controllers\Client;

use App\Http\Controllers\Controller;
use App\Http\Filters\TaskFilter;
use App\Http\Requests\ClientTaskRequest;
use App\Http\Requests\TaskRequest;
use App\Models\Client;
use App\Models\Task;
use App\Models\TaskNote;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Http\Request;

class TaskController extends Controller
{

    /**
     * index
     *
     * @param  mixed $request
     * @return void
     */
    public function index(Request $request, TaskFilter $filters){
        return Task::mine($request->user())->with('client')->filter($filters)->latest()->get();
    }


    /**
     * show
     *
     * @param  mixed $request
     * @param  mixed $task
     * @return void
     */
    public function show(Request $request, Task $task){
        $task->load('client');
        $task->load('logs');
        $task->load('media');
        $task->load("notes");
        return $task;
    }


    /**
     * store
     *
     * @param  mixed $request
     * @return void
     */
    public function store(ClientTaskRequest $request){

        $client = $request->user();

        if($client->remaining_tasks == 0) $this->responseWithError(["task" => "Your task credit limit is reached, upgrade a package or buy task credits"]);

        $data = collect($request->all())->toArray();
        $data['plan_id'] = $client->current_plan;
        $data['time'] = $this->formatTime($data);

        if(Task::mine($request->user())->whereDate('created_at', Carbon::now())->count() >= config('app.task_limit_per_day'))
            $data['is_excess'] = 1;

        $task = $client->task()->save(new Task($data));

        $client->decrement('remaining_tasks');

        return $this->responseSuccess("The task is upload successfully", $task);
    }

    /**
     * upload
     *
     * @param  mixed $request
     * @param  mixed $task
     * @return void
     */
    public function upload(Request $request, Task $task){
        $task->addMedia($request->file)->toMediaCollection("task-{$task->id}-documents");
        return $this->responseSuccess("Task is added successfully", $task);
    }


    /**
     * formatTime
     *
     * @param  mixed $data
     * @return void
     */
    public function formatTime($data){
        $length = 2;
        $hour = str_pad($data['time_hour'],$length,"0", STR_PAD_LEFT);
        $mint = str_pad($data['time_minutes'],$length,"0", STR_PAD_LEFT);
        $secd = str_pad($data['time_second'],$length,"0", STR_PAD_LEFT);
        return "{$hour}:{$mint}:{$secd}";
    }


    public function destroy(Task $task){
        $task->delete();
        return $this->responseSuccess("The task is deleted successfully", $task);
    }


    public function updateStatus(Request $request, Task $task){

        switch($request->status){

            case Task::$status['PENDING']:
                $status = "PENDING";
                break;
            case Task::$status['ACTIVE']:
                $status = "ACTIVE";
                break;
            case Task::$status['WIP']:
                $status = "WIP";
                break;
            case Task::$status['COMPLETE']:
                $status = "COMPLETE";
                break;
            case Task::$status['CANCEL']:
                $status = "CANCEL";
                $request->validate(['reason' => "required"]);
                (Client::find($task->client_id))->increment('remaining_tasks');
                break;

        }

        $task->status = $request->status;
        $task->cancellation_reason = $request->reason ?? null;
        $task->save();

        activity()
        ->causedBy($request->user())
        ->performedOn($task)
        ->log("The task status is updated to {$status} by {$request->user()->name}");

        return $this->responseSuccess("The task status has been updated successfully", $task);
    }


    public function assignResource(Request $request, Task $task){

        $user = User::find($request->user_id);

        $task->user_id = $request->user_id;
        $task->save();

        activity()
        ->causedBy($request->user())
        ->performedOn($task)
        ->log("The resource {$user->name} is assigned to task by {$request->user()->name}");

        return $this->responseSuccess("The task resource is assigned successfully", $task);

    }

    public function addNote(Request $request, Task $task){
        $request->validate([
            'task_id' => "required",
            "note" => "required",
        ]);

        $data = $request->all();
        $data['user_id'] = $request->user()->id;
        $data['user_type'] = get_class($request->user());
        $task->addNote($data);

        activity()
        ->causedBy($request->user())
        ->performedOn($task)
        ->log("{$request->user()->name} add internal note to task - {$task->title}");

        return $this->responseSuccess("The internal note is added successfully");

    }

    public function deleteNote(TaskNote $note){
        $note->delete();
        return $this->responseSuccess("The internal note is deleted successfully");
    }

    public function makeextensiveTask(Request $request, Task $task){
        $value = 1 - $task->is_extensive;
        $task->is_extensive = $value;
        $task->save();
        return $this->responseSuccess("The task is updated successfully");
    }


}
