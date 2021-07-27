<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class Client extends Authenticatable
{
    use HasFactory, Notifiable, HasApiTokens;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        "first_name",
        "last_name",
        'email',
        'password',
        "country",
        "timezone",
        "current_plan",
        "remaining_tasks",
        "image",
    ];


    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    protected $appends = ['name', 'created_date'];

    public function getNameAttribute(){
        return "{$this->first_name} {$this->last_name}";
    }

    public function getCreatedDateAttribute(){
        return $this->created_at->format(config('app.date_format'));
    }

    public function getImageAttribute($value){
        return $value
            ? asset("storage/{$value}")
            : "https://ui-avatars.com/api/?background=0D8ABC&color=fff&name={$this->name}";
    }


    public function plan(){
        return $this->belongsTo(Package::class, 'current_plan');
    }

    public function task(){
        return $this->hasMany(Task::class, 'client_id');
    }
}
