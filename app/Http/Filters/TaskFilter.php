<?php

namespace App\Http\Filters;

use App\Models\Task;

class TaskFilter extends Filters {

    protected $filters = ['title', 'status', 'excess', 'extensive', 'recurring'];

    public function status($value)
    {
        if($value == "") return;
        return $this->builder->where("status", $value);
    }

    public function excess($value)
    {
        if($value == "") return;
        return $this->builder->where("is_excess", 1);
    }

    public function extensive($value)
    {
        if($value == "") return;
        return $this->builder->where("is_extensive", 1);
    }

    public function recurring($value)
    {
        if($value == "") return;
        return $this->builder->where("type", Task::$type['SCHEDULE']);
    }

    public function title($value){
        if($value == "") return;

        return $this->builder->where("title", "LIKE", "%{$value}%");

    }

}
