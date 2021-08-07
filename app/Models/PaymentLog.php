<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PaymentLog extends Model
{
    use HasFactory;

    protected $table = "payment_logs";

    protected $fillable = [
        "transaction_id",
        "type",
        "transaction_by",
        "transaction_for",
        "payload"
    ];

    protected $casts = [
        'payload' => 'json',
    ];

    public function addLog($by, $type = 0, $payload = []){
        $this->fill([
            "transaction_id" => $payload['id'],
            "type" => $type,
            "transaction_by" => $by->id,
            "transaction_for" => get_class($by),
            "payload" => $payload,
        ]);
        $this->save();
    }
}
