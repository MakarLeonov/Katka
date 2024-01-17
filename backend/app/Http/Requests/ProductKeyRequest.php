<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ProductKeyRequest extends FormRequest
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
            'product_id' => 'required|integer',
            'value' => 'required|min:29|max:29'
        ];
    }
}
