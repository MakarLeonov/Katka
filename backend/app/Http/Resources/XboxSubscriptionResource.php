<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class XboxSubscriptionResource extends JsonResource
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
            'image' => $this->image,
            'price' => $this->price,
            'description' => $this->description,
            'platform' => $this->platform,
            // 'platform' => new PlatformResource($this->platform),
        ];
    }
}
