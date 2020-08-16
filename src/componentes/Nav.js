import React from 'react'

export default function Nav() {
    return (
        <div>
            <nav className="navbar navbar-dark bg-dark">
                <form className="form-inline">
                    <a className="btn btn-outline-success btn-lg" href="/formulario">Calculadora</a>
                    <a className="btn btn-outline-primary btn-lg" href="/chart">Gráfica</a>
                </form>
            </nav>
        </div>
    )
}
