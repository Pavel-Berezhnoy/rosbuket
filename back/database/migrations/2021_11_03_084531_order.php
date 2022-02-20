<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class Order extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('order',function(Blueprint $table){
            $table->id()->index();
            $table->string('username');
            $table->string('phone',20);
            $table->string('mail');
            $table->string('address');
        });
        Schema::create('order_item',function(Blueprint $table){
            $table->id();
            $table->bigInteger('order_id')->unsigned();
            $table->bigInteger('bouquet_id')->unsigned();
            $table->integer('qty');
            $table->string('count_price');
        });
        Schema::table('order_item',function($table){
            $table->foreign('bouquet_id')->references('id')->on('bouquet');
            $table->foreign('order_id')->references('id')->on('order');
        });
        Schema::create('statpage',function(Blueprint $table){
            $table->id();
            $table->string('name');
            $table->text('information')->nullable();
            $table->string('alias');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('order');
        Schema::dropIfExists('order_item');
        Schema::dropIfExists('statpage');
    }
}
