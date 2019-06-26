<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class UserResource extends JsonResource
{
    public function toArray($request)
    {
        // return parent::toArray($request);
        return [
            'id' => $this->id,
            'first_name' => $this->first_name,
            'last_name' => $this->last_name,
            'user_name' => $this->user_name,
            'profile_picture' => $this->profile_picture,
            'email' => $this->email,
            // 'password' => $this->password,
            'phone_number' => $this->phone_number,
            // 'first_lang' => $this->first_lang,
            // 'second_lang' => $this->second_lang,
            'birth_day' => $this->birth_day,
            'gender' => $this->gender,
            'state' => $this->state,
            'city' => $this->city,
            'country' => $this->country,
            'auth' => $this->auth,
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
        ] ;
    }
}
