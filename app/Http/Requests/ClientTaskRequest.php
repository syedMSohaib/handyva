<?php

namespace App\Http\Requests;

use App\Models\Task;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Log;

class ClientTaskRequest extends FormRequest
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
        $request = request();
        $rules = [
            "title" => ['required'],
            "description" => ['required'],
            "type" => ['required', 'in:0,1,2,3'],
        ];

        if($request->input('type') == Task::$type['SCHEDULE']){
            $rules["date"] = ['required'];
            $rules["time_hour"] = ['required'];
            $rules["time_minutes"] = ['required'];
            $rules["time_second"] = ['required'];
            $rules["timezone"] = ['required'];
            $rules["end_type"] = ['required'];

            if($request->input('is_repeat')){
                $rules["repeat_type"] = ['required'];
                $rules["repeat_every"] = ['required'];
                $rules["repeat_on.*"] = ['required'];
            }

            if($request->input('end_type') == 1){
                $rules["occurrence"] = ['required'];
            }
            if($request->input('end_type') == 2){
                $rules["end_date"] = ['required'];
            }
        }
        return $rules;
    }
}
