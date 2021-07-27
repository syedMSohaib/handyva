<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Spatie\MediaLibrary\MediaCollections\Models\Media as BaseMedia;

class Media extends BaseMedia
{
    protected $appends = ['full_url'];

    public function getFullUrlAttribute(){
        return $this->getFullUrl();
    }
}
