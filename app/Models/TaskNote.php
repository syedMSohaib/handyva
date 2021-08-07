<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TaskNote extends Model
{
    use HasFactory;

    protected $fillable = [
        "task_id",
        "user_type",
        "user_id",
        "note",
    ];

    protected $with = ["user"];

    protected $appends = ["created_date", "isauthor"];

    public function getCreatedDateAttribute(){
        return $this->created_at->format(config('app.date_format'));
    }

    public function getIsauthorAttribute(){
        return $this->user()->is(request()->user());
    }

    public function user(){
        return $this->morphTo('user');
    }
}
