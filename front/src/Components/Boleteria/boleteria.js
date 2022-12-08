import React, { useState, useEffect } from 'react'
import { getBoletas, createBoleta, deleteBoleta, updateBoleta } from '../Services/boleteriaService'

export default function Boleteria() {
    const [loading, setLoading] = useState(false)
    const [query, setQuery] = useState(true)
    const [error, setError] = useState(false)
    const [boletas, setBoletas] = useState([])
    const [boleta, setBoleta] = useState({})

const listarBoletas = async () => {
        setLoading(true)
        try {
            const response = await getBoletas()
            setBoletas(response)
            setError(false)
        } catch (error) {
            setError(true)
        }
        setLoading(false)
    }

    const crearBoleta = async () => {
        setLoading(true)
        try {
            const response = await createBoleta(boleta)
            setBoleta(response)
            setError(false)
        } catch (error) {
            setError(true)
        }
        setLoading(false)
    }

    const eliminarBoleta = async (id) => {
        setLoading(true)
        try {
            const response = await deleteBoleta(id)
            setBoleta(response)
            setError(false)
        } catch (error) {
            setError(true)
        }
        setLoading(false)
    }

    const actualizarBoleta = async (id) => {
        setLoading(true)
        try {
            const response = await updateBoleta(id, boleta)
            setBoleta(response)
            setError(false)
        } catch (error) {
            setError(true)
        }
        setLoading(false)
    }

    useEffect(() => {
        listarBoletas()
    }
        , [query])
    
    return (
        <div>
            <h1>Boletas</h1>
            <div>
                <button onClick={() => listarBoletas()}>Listar Boletas</button>
                <button onClick={() => crearBoleta()}>Crear Boleta</button>
                <button onClick={() => eliminarBoleta(1)}>Eliminar Boleta</button>
                <button onClick={() => actualizarBoleta(1)}>Actualizar Boleta</button>
            </div>
            <div>
                <input type="text" placeholder="evento" onChange={(e) => setBoleta({ ...boleta, evento: e.target.value })} />
                <input type="text" placeholder="fecha" onChange={(e) => setBoleta({ ...boleta, fecha: e.target.value })} />
                <input type="text" placeholder="hora" onChange={(e) => setBoleta({ ...boleta, hora: e.target.value })} />
                <input type="text" placeholder="lugar" onChange={(e) => setBoleta({ ...boleta, lugar: e.target.value })} />
                <input type="text" placeholder="precio" onChange={(e) => setBoleta({ ...boleta, precio: e.target.value })} />
                <input type="text" placeholder="cantidad" onChange={(e) => setBoleta({ ...boleta, cantidad: e.target.value })} />
            </div>
            <div>
                {loading && <p>Cargando...</p>}
                {error && <p>Error</p>}
                {boletas.map((boleta) => (
                    <div key={boleta.id}>
                        <p>{boleta.evento}</p>
                        <p>{boleta.fecha}</p>
                        <p>{boleta.hora}</p>
                        <p>{boleta.lugar}</p>
                        <p>{boleta.precio}</p>
                        <p>{boleta.cantidad}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

