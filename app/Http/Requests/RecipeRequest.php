<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class RecipeRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'title' => ['required', 'string', 'max:30'],
            'servings' => ['nullable', 'numeric'],
            'description' => ['nullable', 'max:500'],
            'image' => ['nullable', 'mimes:jpg,jpeg,png', 'max:5048'],
            'ingredients' => ['required', 'json'],
            'instructions' => ['nullable', 'max:5000'],
        ];
    }
}
