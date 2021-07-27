<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Referral extends Model
{
    use HasFactory;

    protected $fillable = [
        "client_id",
        "referral_code",
        "referred_client_name",
        "referred_client_email",
        "suggested_package",
        "registration_status",
        "registration_date",
    ];


    protected $appends = ['created_date'];

    public function getCreatedDateAttribute(){
        return $this->created_at->format(config('app.date_format'));
    }


    public function client(){
        return $this->belongsTo(Client::class, 'client_id');
    }

    public function setReferralCodeAttribute($value){
        return $this->attributes['referral_code'] = $this->generate_referral_code();
        dd($this->attributes['referral_code']);
    }

    function generate_referral_code() {
        $number = mt_rand(1000000000, 9999999999); // better than rand()
        // call the same function if the barcode exists already
        if ($this->if_referral_code_exist($number)) {
            return $this->generate_referral_code();
        }
        // otherwise, it's valid and can be used
        return $number;
    }

    function if_referral_code_exist($number) {
        // query the database and return a boolean
        // for instance, it might look like this in Laravel
        return self::where('referral_code', $number)->exists();
    }
}
