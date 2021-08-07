<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateReminderTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('reminders', function (Blueprint $table) {
            $table->id();
            $table->string('client_id');
            $table->string('title');
            $table->text('description');
            $table->timestamp('start')->nullable();
            $table->timestamp('end')->nullable();
            $table->timestamp('utc_start')->nullable();
            $table->timestamp('utc_end')->nullable();
            $table->string('color')->nullable();
            $table->tinyInteger('append')->default(0);
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
        Schema::dropIfExists('reminders');
    }
}
