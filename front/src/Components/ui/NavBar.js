import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function NavBar({title}) {
    return (
        <nav className="navbar navbar-expand-lg bg-primary">
            <div className="container-fluid">
                <Link to='/'className='navbar-brand text-white'tabIndex={0}aria-label='Ir a Inicio'>
                    {title}
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                <div className="navbar-nav" >
                    <NavLink to='/' tabIndex={2} className="nav-item nav-link text-white">
                        Inicio
                    </NavLink>
                    <NavLink to='/reservas' tabIndex={2} className="nav-item nav-link text-white">
                        Reservas
                    </NavLink>
                    <NavLink to='/clientes' tabIndex={2} className="nav-item nav-link text-white">
                        Clientes
                    </NavLink>
                    <NavLink to='/boleteria' tabIndex={2} className="nav-item nav-link text-white">
                        Boleteria
                    </NavLink>
                </div>
                </div>
            </div>
        </nav>
    )
}
