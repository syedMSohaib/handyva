<?php

namespace App\Models;

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
        "occurrence", "repeat_every", "repeat_on", "user_id"
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

    protected $appends = ['task_type_value', 'created_date', 'status_value'];

    public function getCreatedDateAttribute(){
        return $this->created_at->format(config('app.date_format'));
    }

    public function scopeFilter($query, $filters)
    {
        return $filters->apply($query);
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

}
