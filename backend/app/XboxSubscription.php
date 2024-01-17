<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class XboxSubscription extends Model
{
    protected $fillable = [
        'name',
        'image',
        'price',
        'description',
        'platform_id',
    ];

    public function platform() {
        return $this->belongsTo(Platform::class);
    }
}
