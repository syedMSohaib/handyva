<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Blog extends Model
{
    use HasFactory;

    protected $fillable = [
        "title",
        "body",
        "author_name",
        "no_of_shares",
        "mini_description",
        "meta_title",
        "meta_description",
        "meta_keywords",
    ];

}
