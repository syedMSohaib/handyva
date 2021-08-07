<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;


class Task extends Model implements HasMedia
{
    use HasFactory, InteractsWithMedia;

    protected $fillable = [
        "client_id", "plan_id", "title", "description", "type", "date", "time", "timezone",
        "is_repeat", "repeat_type", "end_type", "end_after","status", "end_at", "cancellation_reason",
        "occurrence", "repeat_every", "repeat_on", "user_id", 'is_extensive', 'is_excess'
    ];



    protected $casts = [
        'repeat_on' => 'json',
    ];

    public static $type = [
        "NONE" => 0,
        "CALLING" => 1,
        "PRIORITY" => 2,
        "SCHEDULE" => 3,
    ];

    public static $status = [
        'PENDING' => 0,
        'ACTIVE' => 1,
        'WIP' => 2,
        'COMPLETE' => 3,
        'CANCEL' => 4,
    ];

    protected $appends = ['toggle', 'mini', 'task_type_value', 'created_date', 'status_value', 'color'];

    public function getToggleAttribute(){
        return false;
    }

    public function getMiniAttribute(){
        return substr($this->description, 0, 200);
    }

    public function getColorAttribute(){
        $timediff = Carbon::now()->diffInHours($this->created_at, false);

        if($this->type == 0) {
            if($timediff > 2 && $this->status == 0)
                return "#6e6e6e";
            else
                return "#6e6e6e8c";
        }

        if($this->type == 1) {
            if($timediff > 2 && $this->status == 0)
                return "#70c164";
            else
                return "#70c164a8";
        }

        if($this->type == 2) {
            if($timediff > 2 && $this->status == 0)
                return "#f44336";
            else
                return "#f44336b0";
        }


        if($this->type == 3) {
            if($timediff > 2 && $this->status == 0)
                return "#ffc107";
            else
                return "#ffc10778";
        }
    }

    public function getCreatedDateAttribute(){
        return $this->created_at->format(config('app.date_format'));
    }

    public function scopeFilter($query, $filters)
    {
        return $filters->apply($query);
    }

    public function scopeMine($query, $user){
        $query->where('client_id', $user->id);
    }

    public function getTaskTypeValueAttribute(){
        switch($this->type){

            case self::$type['NONE']:
                return "NONE";
            case self::$type['CALLING']:
                return "CALLING";
            case self::$type['PRIORITY']:
                return "PRIORITY";
            case self::$type['SCHEDULE']:
                return "SCHEDULE";
        }
    }

    public function getStatusValueAttribute(){
        switch($this->status){

            case self::$status['PENDING']:
                return "PENDING";
            case self::$status['ACTIVE']:
                return "ACTIVE";
            case self::$status['WIP']:
                return "WIP";
            case self::$status['COMPLETE']:
                return "COMPLETE";
            case self::$status['CANCEL']:
                return "CANCEL";

        }
    }


    public function client(){
        return $this->belongsTo(Client::class, 'client_id');
    }

    public function logs(){
        return $this->morphMany(\Spatie\Activitylog\Models\Activity::class, 'subject');
    }

    public function notes(){
        return $this->hasMany(TaskNote::class, 'task_id');
    }

    public function addNote($data){
        $this->notes()->save(new TaskNote($data));
    }

}
