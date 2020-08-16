import React from 'react'

export default function Nav() {
    return (
        <div>
            <nav className="navbar navbar-dark bg-dark">
                <form className="form-inline">
                    <button className="btn btn-outline-success btn-lg" type="button">Calculadora</button>
                    <button type="button" className="btn btn-outline-primary btn-lg">Gráfica</button>
                </form>
            </nav>
        </div>
    )
}
