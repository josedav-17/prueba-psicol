<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\boleteria;


class boleteriaController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //aquí se muestra la vista
        return boleteria::all();

    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //aquí se muestra el formulario
        return boleteria::all();

    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //instanciamos el modelo
        $boleteria = new boleteria();
        //recibimos los datos del formulario
        $boleteria->evento = $request->input('evento');
        $boleteria->fecha = $request->input('fecha');
        $boleteria->hora = $request->input('hora');
        $boleteria->lugar = $request->input('lugar');
        $boleteria->precio = $request->input('precio');
        $boleteria->cantidad = $request->input('cantidad');
        //guardamos el registro
        $boleteria->save();
        //redireccionamos a la vista
        return boleteria::all();

    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //aquí se muestra el detalle del registro
        $boleteria = boleteria::find($id);
        return boleteria::all();
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //aquí se muestra el formulario de edición
        $boleteria = boleteria::find($id);
        return boleteria::all();
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
        //aquí se actualiza el registro
        $boleteria = boleteria::find($id);
        $boleteria->evento = $request->input('evento');
        $boleteria->fecha = $request->input('fecha');
        $boleteria->hora = $request->input('hora');
        $boleteria->lugar = $request->input('lugar');
        $boleteria->precio = $request->input('precio');
        $boleteria->cantidad = $request->input('cantidad');
        $boleteria->save();
        return boleteria::all();

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //aquí se elimina el registro
        $boleteria = boleteria::find($id);
        $boleteria->delete();
        return boleteria::all();

    }
}
