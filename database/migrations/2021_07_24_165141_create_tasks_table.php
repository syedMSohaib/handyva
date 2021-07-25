<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTasksTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tasks', function (Blueprint $table) {
            $table->id();
            $table->string('client_id');
            $table->string('plan_id');
            $table->string('title');
            $table->string('description');
            $table->tinyInteger('type');
            $table->date('date');
            $table->time('time');
            $table->string('timezone');
            $table->tinyInteger('is_repeat')->default(0);
            $table->string('repeat_type')->nullable();
            $table->string('end_type')->nullable();
            $table->string('end_after')->nullable();
            $table->datetime('end_at')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('tasks');
    }
}
