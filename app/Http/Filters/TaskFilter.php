<?php

namespace App\Http\Filters;

use App\Models\Task;

class TaskFilter extends Filters {

    protected $filters = ['status', 'excess', 'extensive', 'recurring'];

    public function status($value)
    {
        if($value == "") return;
        return $this->builder->where("status", $value);
    }

    public function execss($value)
    {
        if($value == "") return;
        // return $this->builder->where("status", $value);
    }

    public function extensive($value)
    {
        if($value == "") return;
        // return $this->builder->where("status", $value);
    }

    public function recurring($value)
    {
        if($value == "") return;
        return $this->builder->where("type", Task::$type['SCHEDULE']);
    }

}
