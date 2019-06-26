<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;
use Illuminate\Contracts\Validation\Validator;

class MemoRequest extends FormRequest
{
    public function authorize()
    {
        return true;
    }

    public function rules()
    {
        return (($this->getMethod() == 'POST') ? $this->storeRules() : $this->updateRules()) ;
    }

    private function storeRules (): array {
        return [
            'title' => 'required|string|min:4',
            'file' => 'required|string',
            'user_id' => 'required|integer|exists:users,id',
            'size' => 'required|integer',
        ] ;
    }

    private function updateRules (): array {
        return [
            'title' => 'string',
            'file' => 'string',
            'user_id' => 'integer|exists:user,id',
            'size' => 'integer',
        ] ;
    }

    protected function failedValidation(Validator $validator)
    {
        throw new HttpResponseException(response()->json($validator->errors(), 422));
    }
}
