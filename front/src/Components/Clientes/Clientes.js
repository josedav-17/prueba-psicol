import React, { useEffect, useState } from 'react'
import { getClientes, createCliente, deleteCliente, updateCliente } from '../services/clientesService'

//este es el json que recibe { "id": 2, "nombre": "prueba", "apellido": "prueba&email", "cedula": "121312", "telefono": " 12123", "correo": " prueba@email.com ", "direccion": "cae 232" }

export default function Usuarios() {
    const [loading, setLoading] = useState(false)
    const [query, setQuery] = useState(true)
    const [error, setError] = useState(false)
    const [clientes, setClientes] = useState([])
    const [cliente, setCliente] = useState({})

    const listarClientes = async () => {
        setLoading(true)
        try {
            const response = await getClientes()
            setClientes(response)
            setError(false)
        } catch (error) {
            setError(true)
        }
        setLoading(false)
    }

    const crearCliente = async () => {
        setLoading(true)
        try {
            const response = await createCliente(cliente)
            setCliente(response)
            setError(false)
        } catch (error) {
            setError(true)
        }
        setLoading(false)
    }

    const eliminarCliente = async (id) => {
        setLoading(true)
        try {
            const response = await deleteCliente(id)
            setCliente(response)
            setError(false)
        } catch (error) {
            setError(true)
        }
        setLoading(false)
    }

    const actualizarCliente = async (id) => {
        setLoading(true)
        try {
            const response = await updateCliente(id, cliente)
            setCliente(response)
            setError(false)
        } catch (error) {
            setError(true)
        }
        setLoading(false)
    }

    useEffect(() => {
        listarClientes()
    }  , [query])

    return (
        <div>
            <h1>Clientes</h1>
            <div>
                <h2>Crear Cliente</h2>
                <input type="text" placeholder="Nombre" onChange={(e) => setCliente({ ...cliente, nombre: e.target.value })} />
                <input type="text" placeholder="Apellido" onChange={(e) => setCliente({ ...cliente, apellido: e.target.value })} />
                <input type="text" placeholder="Cedula" onChange={(e) => setCliente({ ...cliente, cedula: e.target.value })} />
                <input type="text" placeholder="Telefono" onChange={(e) => setCliente({ ...cliente, telefono: e.target.value })} />
                <input type="text" placeholder="Correo" onChange={(e) => setCliente({ ...cliente, correo: e.target.value })} />
                <input type="text" placeholder="Direccion" onChange={(e) => setCliente({ ...cliente, direccion: e.target.value })} />
                <button onClick={() => crearCliente()}>Crear Cliente</button>
            </div>
            <div>
                <h2>Actualizar Cliente</h2>
                <input type="text" placeholder="Id" onChange={(e) => setCliente({ ...cliente, id: e.target.value })} />
                <input type="text" placeholder="Nombre" onChange={(e) => setCliente({ ...cliente, nombre: e.target.value })} />
                <input type="text" placeholder="Apellido" onChange={(e) => setCliente({ ...cliente, apellido: e.target.value })} />
                <input type="text" placeholder="Cedula" onChange={(e) => setCliente({ ...cliente, cedula: e.target.value })} />
                <input type="text" placeholder="Telefono" onChange={(e) => setCliente({ ...cliente, telefono: e.target.value })} />
                <input type="text" placeholder="Correo" onChange={(e) => setCliente({ ...cliente, correo: e.target.value })} />
                <input type="text" placeholder="Direccion" onChange={(e) => setCliente({ ...cliente, direccion: e.target.value })} />
                <button onClick={() => actualizarCliente(cliente.id)}>Actualizar Cliente</button>
            </div>
            <div>
                <h2>Eliminar Cliente</h2>
                <input type="text" placeholder="Id" onChange={(e) => setCliente({ ...cliente, id: e.target.value })} />
                <button onClick={() => eliminarCliente(cliente.id)}>Eliminar Cliente</button>
            </div>
            <div>
                <h2>Listar Clientes</h2>
                <button onClick={() => listarClientes()}>Listar Clientes</button>
            </div>
            <div>
                {loading && <p>Cargando...</p>}
                {error && <p>Error</p>}
                {clientes.map((cliente) => (
                    <div key={cliente.id}>
                        <p>{cliente.nombre}</p>
                        <p>{cliente.apellido}</p>
                        <p>{cliente.cedula}</p>
                        <p>{cliente.telefono}</p>
                        <p>{cliente.correo}</p>
                        <p>{cliente.direccion}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

   