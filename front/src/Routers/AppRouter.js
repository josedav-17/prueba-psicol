import React from 'react'
import NavBar from '../components/ui/NavBar'
import { Routes, Route } from 'react-router-dom'
import NotFound from '../Components/ui/NotFound'
import Footer from '../Components/ui/Footer'
import reservas from '../Components/Reservas/reservas'
import clientes from '../Components/Clientes/clientes'
import boleteria from '../Components/Boleteria/boleteria'


export default function AppRoutes() {
    return (
        <div>
            <NavBar />
            <Routes>
                <Route path='/' element={<reservas />} />
                <Route path='/reservas' element={<reservas />} />
                <Route path='/clientes' element={<clientes />} />
                <Route path='/boleteria' element={<boleteria />} />
                <Route path='*' element={<NotFound />} />
            </Routes>
            <Footer />
        </div>
    )
}

// Path: front\src\Routers\index.j