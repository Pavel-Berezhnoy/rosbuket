<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class Links extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('category_bouquets', function (Blueprint $table)
        {
            $table->id()->index();
            $table->bigInteger('category_id')->unsigned();
            $table->bigInteger('bouquet_id')->unsigned();
            $table->foreign('category_id')->references('id')->on('category');
            $table->foreign('bouquet_id')->references('id')->on('bouquet');
        });
        Schema::table('category', function (Blueprint $table)
        {
            $table->foreign('parent')->references('id')->on('category');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        
    }
}
