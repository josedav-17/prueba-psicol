<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('table_boleteria', function (Blueprint $table) {
            //id es una clave primaria autoincrementable para usarla en la tabla reservas
            $table->id();
            $table->string('evento');
            $table->date('fecha');
            $table->time('hora');
            $table->string('lugar');
            $table->integer('precio');
            $table->integer('cantidad');
            $table->timestamps();

            $table->foreign('id_cliente')->references('id')->on('table_clientes');
            $table->foreign('id_boleta')->references('id')->on('table_boleteria');
            
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('table_boleteria');
    }
};
