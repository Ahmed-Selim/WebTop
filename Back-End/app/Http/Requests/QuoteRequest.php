<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Http\Exceptions\HttpResponseException;
use Carbon\Carbon;

class QuoteRequest extends FormRequest
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
            'author' => 'required|string',
            'author_permalink' => 'required|string',
            'url' => 'required|url',
            'body' => 'required|string|unique:quotes,body',
            'favorites_count' => 'sometimes|integer|min:0',
            'upvotes_count' => 'sometimes|integer|min:0',
            'downvotes_count' => 'sometimes|integer|min:0',
            'date' => 'date|before_or_equal:'.(Carbon::now())->toDateString()
        ] ;
    }

    private function updateRules (): array {
        return [
            'author' => 'sometimes|string',
            'author_permalink' => 'sometimes|url',
            'url' => 'sometimes|url',
            'body' => 'sometimes|string|unique:quotes,body',
            'favorites_count' => 'sometimes|integer|min:0',
            'upvotes_count' => 'sometimes|integer|min:0',
            'downvotes_count' => 'sometimes|integer|min:0',
            'date' => 'sometimes|date|before_or_equal:'.(Carbon::now())->toDateString()
        ] ;
    }

    protected function failedValidation(Validator $validator)
    {
        throw new HttpResponseException(response()->json($validator->errors(), 422));
    }
}
