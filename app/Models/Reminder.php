<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Reminder extends Model
{
    use HasFactory;


    protected $fillable = [
        "client_id", "title", "description", "start", "end", "color", "utc_start", "utc_end"
    ];

    protected  $appends = ['className', 'textColor'];

    public function getClassNameAttribute(){
        return $this->color;
    }

    public function getTextColorAttribute(){
        return 'white';
    }


}
