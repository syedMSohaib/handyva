<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddFieldsToAdminsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('admins', function (Blueprint $table) {
            $table->integer('role')->default(1);
            $table->string('phone')->nullable();
            $table->string('cnic')->nullable();
            $table->string('address')->nullable();
            $table->string('gender')->nullable();
            $table->longText('image')->nullable();
            $table->longText('cv')->nullable();

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
            $table->dropColumn('role');
            $table->dropColumn('phone');
            $table->dropColumn('cnic');
            $table->dropColumn('address');
            $table->dropColumn('gender');
            $table->dropColumn('image');
            $table->dropColumn('cv');

        });
    }
}
