<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class XboxGame extends Model
{
    protected $fillable = [
        'name',
        'author',
        'genre',
        'image',
        'price',
        'memory',
        'description',
        'platform_id',
    ];

    public function platform() {
        return $this->belongsTo(Platform::class);
    }
}
