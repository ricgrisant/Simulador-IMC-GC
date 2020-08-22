import React from 'react'
import {NavLink } from 'react-router-dom'

const personas= JSON.parse(window.localStorage.getItem('personas'));

export default function Nav() {
    return (
        <div>
            <nav className="navbar navbar-dark bg-dark">
                <form className="form-inline">
                    <NavLink className="btn btn-outline-success btn-lg" to="/formulario">Calculadora</NavLink>
                    {personas? (<a className="btn btn-outline-warning btn-lg" href="/chart">Gráfica</a>)
                    :(<a className="btn btn-outline-warning btn-lg disabled" href="/chart">Gráfica</a>)}
                </form> 
            </nav>
        </div>
    )
}
