<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateXboxGamesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('xbox_games', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('author');
            $table->string('genre');
            $table->string('image');
            $table->integer('price');
            $table->integer('memory');
            $table->text('description');
            $table->foreignId('platform_id')->constrained();
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
        Schema::dropIfExists('xbox_games');
    }
}