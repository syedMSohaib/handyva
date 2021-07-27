<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Cviebrock\EloquentSluggable\Sluggable;

class Blog extends Model
{
    use HasFactory, Sluggable;

    protected $fillable = [
        "title",
        "slug",
        "body",
        "author_name",
        "no_of_shares",
        "mini_description",
        "meta_title",
        "meta_description",
        "meta_keywords",
    ];

    public function sluggable(): array
    {
        return [
            'slug' => [
                'source' => 'title'
            ]
        ];
    }


    protected $appends = ['created_date'];

    public function getCreatedDateAttribute(){
        return $this->created_at->format(config('app.date_format'));
    }

}
