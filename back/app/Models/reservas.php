<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;


class reservas extends Model
{
    use HasFactory;

    protected $table = 'reservas';

    protected $fillable = ['id_cliente', 'id_boleta'];

    //esta funcion nos permite relacionar la tabla reservas con la tabla clientes
    public function clientes()
    {
        return $this->belongsTo(clientes::class, 'id_cliente');
    }

    //esta funcion nos permite relacionar la tabla reservas con la tabla boleteria
    public function boleteria()
    {
        return $this->belongsTo(boleteria::class, 'id_boleta');
    }

}
