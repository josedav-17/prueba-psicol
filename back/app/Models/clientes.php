<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class clientes extends Model
{
    use HasFactory;

    protected $table = 'table_clientes';

    protected $fillable = ['nombre', 'apellido', 'cedula', 'telefono', 'correo', 'direccion'];

    //esta funcion nos permite relacionar la tabla clientes con la tabla reservas
    public function reservas()
    {
        return $this->hasMany(reservas::class, 'id_cliente');
    }

    
    
    
}
