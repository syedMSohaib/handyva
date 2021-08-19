<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Passport\HasApiTokens;
use Webpatser\Uuid\Uuid;

class Admin extends Authenticatable
{
    use HasFactory, Notifiable, HasApiTokens;

    public static function boot()
    {
        parent::boot();
        self::creating(function ($model) {
            $model->uuid = (string) Uuid::generate(4);
        });
    }


    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name',
        'email',
        'password',
        "phone",
        "cnic",
        "gender",
        "address",
        "image",
        "role",
        "cv",
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

    protected $appends = ['created_date'];

    public function getCreatedDateAttribute(){
        return $this->created_at->format(config('app.date_format'));
    }

    public function role(){
        return $this->belongsTo(Role::class, 'role');
    }

    public function pids(){
        return $this->role()->first()->permissions()->whereStatus(1)->get()->pluck('permission_id');
    }

    public function getImageAttribute($value){
        return $value
            ? asset("storage/{$value}")
            : "https://ui-avatars.com/api/?background=0D8ABC&color=fff&name={$this->name}";
    }

    public function getCvAttribute($value){
        return $value
            ? asset("storage/{$value}")
            : "#";
    }


}
