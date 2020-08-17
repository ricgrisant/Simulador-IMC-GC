import React from 'react'
import {NavLink } from 'react-router-dom'


export default function Nav() {
    return (
        <div>
            <nav className="navbar navbar-dark bg-dark">
                <form className="form-inline">
                    <NavLink className="btn btn-outline-success btn-lg" to="/formulario">Calculadora</NavLink>
                    <NavLink className="btn btn-outline-primary btn-lg" to="/chart">Gráfica</NavLink>
                </form>
            </nav>
        </div>
    )
}
