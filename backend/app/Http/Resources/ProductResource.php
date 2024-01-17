<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ProductResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'author' => $this->author,
            'genre' => $this->genre,
            'image' => $this->image,
            'price' => $this->price,
            'memory' => $this->memory,
            'description' => $this->description,
            'platform' => $this->platform,
            // 'platform' => new PlatformResource($this->platform),
        ];
    }
}
