<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateClientsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('clients', function (Blueprint $table) {
            $table->id();
            $table->string('first_name');
            $table->string('last_name');
            $table->string('current_plan')->nullable();
            $table->string('email')->unique();
            $table->timestamp('email_verified_at')->nullable();
            $table->string('password');
            $table->string('country');
            $table->string('timezone');
            $table->integer('remaining_tasks')->default(0);
            $table->longText('image')->nullable();
            $table->rememberToken();
            $table->timestamp('next_billing_date')->nullable();
            $table->text("cover")->nullable();
            $table->longText("about")->nullable();
            $table->string("availability")->nullable();
            $table->int("age")->nullable();
            $table->string("experience")->nullable();
            $table->longText("skills")->nullable();
            $table->longText("language")->nullable();
            $table->text("address")->nullable();
            $table->string("city")->nullable();
            $table->string("state")->nullable();
            $table->string("zipcode")->nullable();
            $table->string("stripe_customer_id")->nullable();
            $table->date("dob")->nullable();
            $table->string("gender", 10)->nullable();
            $table->string("homephone")->nullable();
            $table->string("cellphone")->nullable();
            $table->string("skype")->nullable();
            $table->text("work_address")->nullable();
            $table->text("mailing_address")->nullable();
            $table->text("temp_address")->nullable();
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
        Schema::dropIfExists('clients');
    }
}
