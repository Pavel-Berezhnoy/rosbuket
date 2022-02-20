<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class Settings extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('settings',function(Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('value');
            $table->string('type');
        });
        Schema::create('question',function(Blueprint $table){
            $table->id();
            $table->string('username');
            $table->string('email');
            $table->text('message');
        });
        
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('settings');
        Schema::dropIfExists('question');
    }
}
