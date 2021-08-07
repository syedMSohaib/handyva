<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Passport\HasApiTokens;
use Webpatser\Uuid\Uuid;

class Client extends Authenticatable
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
        "first_name",
        "last_name",
        'email',
        'password',
        "country",
        "timezone",
        "current_plan",
        "remaining_tasks",
        "image",
        "next_billing_date",
        "cover",
        "about",
        "availability",
        "age",
        "experience",
        "skills",
        "language",
        "address",
        "city",
        "state",
        "zipcode",
        "stripe_customer_id",
        "verified_email",
        "dob",
        "gender",
        "homephone",
        "cellphone",
        "skype",
        "work_address",
        "mailing_address",
        "temp_address",
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
        'next_billing_date' => 'datetime',
    ];

    protected $appends = ['name', 'created_date', 'billing_date', 'can_change_package'];

    public function getNameAttribute(){
        return "{$this->first_name} {$this->last_name}";
    }

    public function getBillingDateAttribute(){
        return $this->next_billing_date->format(config('app.date_format'));
    }

    public function getCanChangePackageAttribute(){
        $diff = Carbon::now()->diffInDays($this->next_billing_date);
        return (Carbon::now() < $this->next_billing_date) && ($diff >= 1 && $diff <= 3);
    }

    public function getCreatedDateAttribute(){
        return $this->created_at->format(config('app.date_format'));
    }

    public function getImageAttribute($value){
        return $value
            ? asset("storage/{$value}")
            : "https://ui-avatars.com/api/?background=0D8ABC&color=fff&name={$this->name}";
    }

    public function getCoverAttribute($value){
        return $value
            ? asset("storage/{$value}")
            : asset("cover.png");
    }

    public function plan(){
        return $this->belongsTo(Package::class, 'current_plan');
    }

    public function task(){
        return $this->hasMany(Task::class, 'client_id');
    }

}
