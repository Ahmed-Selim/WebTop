<?php

namespace App\Http\Resources\Location;

use Illuminate\Http\Resources\Json\JsonResource;

class CountryResource extends JsonResource
{
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'sortname' => $this->sortname,
            'name' => $this->name,
            'phonecode' => $this->phonecode
        ];
    }
}
