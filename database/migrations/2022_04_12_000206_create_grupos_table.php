<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateGruposTable extends Migration
{
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up()
  {
    Schema::create('grupos', function (Blueprint $table) {
      $table->bigIncrements('id_grupo');
      $table->unsignedBigInteger('id_materia')->nullable();
      $table
        ->foreign('id_materia')
        ->references('id_materia')
        ->on('materias')
        ->onDelete('set null');
      $table->unsignedBigInteger('id_usuario')->nullable();
      $table
        ->foreign('id_usuario')
        ->references('id')
        ->on('users')
        ->onDelete('set null');
      $table->string('codigo_grupo', 10);
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
    Schema::dropIfExists('grupos');
  }
}
