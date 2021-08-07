<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Contact extends Model
{
    use HasFactory;

    protected $fillable = [
        "client_id", "address", "email", "name", "note", "contact_no",
    ];

    protected $appends = ["created_date"];

    public function getCreatedDateAttribute(){
        return $this->created_at->format(config('app.date_format'));
    }

}
