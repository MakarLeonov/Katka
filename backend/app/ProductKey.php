<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ProductKey extends Model
{
    protected $fillable = [
        'product_id',
        'value',
    ];
}
