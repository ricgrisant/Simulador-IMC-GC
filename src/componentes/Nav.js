import React from 'react'
import {NavLink } from 'react-router-dom'


export default function Nav() {
    return (
        <div>
            <nav className="navbar navbar-dark bg-dark">
                <form className="form-inline">
                    <NavLink className="btn btn-outline-success btn-lg" to="/formulario">Calculadora</NavLink>
                    <a className="btn btn-outline-warning btn-lg" href="/chart">Gráfica</a>
                    <NavLink className="btn btn-outline-warning btn-lg" to="/estUso">Estadísticas de uso</NavLink>
                </form> 
            </nav>
        </div>
    )
}
