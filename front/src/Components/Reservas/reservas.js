//RESERVAS DEBE PERMITIR CREAR, LISTAR, ACTUALIZAR Y ELIMINAR RESERVAS, ademas puede crear, listar, actualizar y eliminar boletas o usuarios
//el json es  { "id_reserva": "1", "id_boleteria": 2, }
import React, { useEffect, useState } from 'react'
import { getReservas, createReserva, deleteReserva, updateReserva } from '../Services/reservaService'

export default function Reservas() {
    const [loading, setLoading] = useState(false)
    const [query, setQuery] = useState(true)
    const [error, setError] = useState(false)
    const [reservas, setReservas] = useState([])
    const [reserva, setReserva] = useState({})

    const listarReservas = async () => {
        setLoading(true)
        try {
            const response = await getReservas()
            setReservas(response)
            setError(false)
        } catch (error) {
            setError(true)
        }
        setLoading(false)
    }

    const crearReserva = async () => {
        setLoading(true)
        try {
            const response = await createReserva(reserva)
            setReserva(response)
            setError(false)
        } catch (error) {
            setError(true)
        }
        setLoading(false)
    }

    const eliminarReserva = async (id) => {
        setLoading(true)
        try {
            const response = await deleteReserva(id)
            setReserva(response)
            setError(false)
        } catch (error) {
            setError(true)
        }
        setLoading(false)
    }

    const actualizarReserva = async (id) => {
        setLoading(true)
        try {
            const response = await updateReserva(id, reserva)
            setReserva(response)
            setError(false)
        } catch (error) {
            setError(true)
        }
        setLoading(false)
    }

    useEffect(() => {
        listarReservas()
    }, [query])

    return (
        <div>
            <h1>Reservas</h1>
            <div>
                <h2>Crear Reserva</h2>
                <input type="text" placeholder="id_reserva" onChange={(e) => setReserva({ ...reserva, id_reserva: e.target.value })} />
                <input type="text" placeholder="id_boleteria" onChange={(e) => setReserva({ ...reserva, id_boleteria: e.target.value })} />
                <button onClick={crearReserva}>Crear Reserva</button>
            </div>
            <div>
                <h2>Actualizar Reserva</h2>
                <input type="text" placeholder="id_reserva" onChange={(e) => setReserva({ ...reserva, id_reserva: e.target.value })} />
                <input type="text" placeholder="id_bole teria" onChange={(e) => setReserva({ ...reserva, id_boleteria: e.target.value })} />
                <button onClick={() => actualizarReserva(1)}>Actualizar Reserva</button>
            </div>
            <div>
                <h2>Eliminar Reserva</h2>
                <input type="text" placeholder="id_reserva" onChange={(e) => setReserva({ ...reserva, id_reserva: e.target.value })} />
                <button onClick={() => eliminarReserva(1)}>Eliminar Reserva</button>
            </div>
            <div>
                <h2>Listar Reservas</h2>
                <button onClick={() => setQuery(!query)}>Listar Reservas</button>
                {loading && <p>Cargando...</p>}
                {error && <p>Error</p>}
                {reservas.map((reserva) => (
                    <div key={reserva.id_reserva}>
                        <p>{reserva.id_reserva}</p>
                        <p>{reserva.id_boleteria}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}



    