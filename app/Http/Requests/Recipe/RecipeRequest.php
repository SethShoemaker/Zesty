<?php

namespace App\Http\Requests\Recipe;

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
        return false;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'title' => ['required', 'string', 'max:50'],
            'servings' => ['required', 'numeric'],
            'description' => ['required', 'string', 'max:350'],
            'image' => ['mimes:jpg,jpeg,png', 'max:5048'],
            'ingredientsJSON' => ['required', 'json'],
            'instructions' => ['required', 'string', 'max:500'],
        ];
    }
}
