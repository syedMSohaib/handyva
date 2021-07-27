<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddFieldsToAdminclientuserTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('admins', function (Blueprint $table) {
            $table->longText('uuid')->nullable();
        });
        Schema::table('clients', function (Blueprint $table) {
            $table->longText('uuid')->nullable();
        });
        Schema::table('users', function (Blueprint $table) {
            $table->longText('uuid')->nullable();
        });

    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('admins', function (Blueprint $table) {
            $table->dropColumn('uuid');
        });
        Schema::table('clients', function (Blueprint $table) {
            $table->dropColumn('uuid');
        });
        Schema::table('users', function (Blueprint $table) {
            $table->dropColumn('uuid');
        });
    }
}
