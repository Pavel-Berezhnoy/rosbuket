<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class OrderRequest extends FormRequest
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
            'username' => 'required|max:255',
            'phone' => 'required|max:20',
            'mail' => 'required|max:255|email:rfc',
            'address' => 'required|max:255',
            'message' => 'string|nullable',
            'status' => 'int',
            'order_items' => 'array'
        ];
    }
}
