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
        //desde aqui el cliente puede reservar o comprar boletas para un evento
        Schema::create('table_reservas', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('id_cliente');
            $table->unsignedBigInteger('id_boleta');
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
        Schema::dropIfExists('table_reservas');
    }
};
