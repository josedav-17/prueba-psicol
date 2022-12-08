<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class boleteria extends Model
{
    use HasFactory;
    protected $table = 'table_boleteria';
    protected $fillable = ['evento', 'fecha', 'hora', 'lugar', 'precio', 'cantidad'];
    
    public function reservas()
    {
        return $this->hasMany(reservas::class, 'id_boleta');
        
    }


}
