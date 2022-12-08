<?php

namespace App\Http\Controllers;

use App\Models\clientes;
use Illuminate\Http\Request;

class clientesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return clientes::all();
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return clientes::all();
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
        $clientes = new clientes();
        //recibimos los datos del formulario
        $clientes->nombre = $request->input('nombre');
        $clientes->apellido = $request->input('apellido');
        $clientes->cedula = $request->input('cedula');
        $clientes->telefono = $request->input('telefono');
        $clientes->correo = $request->input('correo');
        $clientes->direccion = $request->input('direccion');
        //guardamos el registro
        $clientes->save();
        //redireccionamos a la vista
        return clientes::all();

    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return clientes::findorfail($id)->get();

    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        return clientes::find($id);
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
        //instanciamos el modelo
        $clientes = clientes::find($id);
        //recibimos los datos del formulario
        $clientes->nombre = $request->input('nombre');
        $clientes->apellido = $request->input('apellido');
        $clientes->cedula = $request->input('cedula');
        $clientes->telefono = $request->input('telefono');
        $clientes->correo = $request->input('correo');
        $clientes->direccion = $request->input('direccion');
        //guardamos el registro
        $clientes->save();
        //redireccionamos a la vista
        return clientes::all();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $clientes = clientes::find($id);
        $clientes->delete();
        return clientes::all();
    }
}
