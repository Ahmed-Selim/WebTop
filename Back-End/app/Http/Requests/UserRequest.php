<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Carbon\Carbon;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Http\Exceptions\HttpResponseException;



class UserRequest extends FormRequest
{
    public function authorize()
    {
        return true;
    }

    public function rules()
    {
        return (($this->getMethod() == 'POST') ? $this->storeRules() : $this->updateRules()) ;
    }

    public function messages()
    {
        return [
            'birth_day.before_or_equal' => 'Your age is under 18 Years old!'
        ];
    }

    private function storeRules (): array {
        return [
            'first_name' => 'sometimes|string',
            'last_name' => 'sometimes|string',
            'user_name' => 'required|string|unique:users,user_name',
            'profile_picture' => 'sometimes|file|unique:users,profile_picture',
            // 'email' => 'required|unique:users,email',
            // 'password' => 'required|string',
            'phone_number' => 'sometimes|string|unique:users,phone_number',
            // 'first_lang' => 'sometimes|string',
            // 'second_lang' => 'sometimes|string|different:first_lang',
            'birth_day' => 'required|date|before_or_equal:'.(Carbon::now())->subYears(18),
            'gender' => 'required|string|in:male,female',
            'state' => 'required|string',
            'city' => 'required|string',
            'country' => 'required|string',
            'auth' => 'sometimes|string|in:user,admin',
        ] ;
    }

    private function updateRules (): array {
        return [
            'first_name' => 'string',
            'last_name' => 'string',
            'user_name' => 'string|unique:users,user_name,'.$this->user->id,
            'profile_picture' => 'file|unique:users,profile_picture,'.$this->user->id,
            // 'email' => 'email|unique:users,email',
            // 'password' => 'string',
            'phone_number' => 'string|unique:users,phone_number,'.$this->user->id,
            // 'first_lang' => 'string',
            // 'second_lang' => 'string|different:first_lang',
            'birth_day' => 'date|before_or_equal:'.(Carbon::now())->subYears(18),
            'gender' => 'string|in:male,female',
            'state' => 'string',
            'city' => 'string',
            'country' => 'string',
            'auth' => 'string|in:user,admin',
        ] ;
    }

    protected function failedValidation(Validator $validator)
    {
        throw new HttpResponseException(response()->json($validator->errors(), 422));
    }
}
