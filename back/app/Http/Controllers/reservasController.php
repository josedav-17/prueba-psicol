<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\reservas;

class reservasController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //aquí se muestra la vista
        return reservas::all();
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {   
        //aquí se muestra el formulario
        return reservas::all();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //aqui gestionamos la reserva
        $reservas = new reservas();
        $reservas->id_cliente = $request->input('id_cliente');
        $reservas->id_boleta = $request->input('id_boleta');
        $reservas->save();
        return reservas::all();

    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
    //aqui mostramos la reserva
    return reservas::find($id);
}

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {   
        //aqui mostramos el formulario para editar la reserva
        return reservas::find($id);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //aqui actualizamos la reserva
        $reservas = reservas::find($id);
        $reservas->id_cliente = $request->input('id_cliente');
        $reservas->id_boleta = $request->input('id_boleta');
        $reservas->save();
        return reservas::all();

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //aqui eliminamos la reserva
        $reservas = reservas::find($id);
        $reservas->delete();
        return reservas::all();

    }
}
