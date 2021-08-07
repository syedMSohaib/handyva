<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Travel extends Model
{
    use HasFactory;

    protected $table = "travels";

    protected $fillable = [
        "client_id", "airline", "hotel", "name", "note", "number", "expiry_date"
    ];

    protected $appends = ["created_date"];

    public function getCreatedDateAttribute(){
        return $this->created_at->format(config('app.date_format'));
    }

}
