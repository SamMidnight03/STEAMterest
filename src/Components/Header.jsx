import React from 'react'
import { Link } from 'react-router'

export default function Header() {
    return (
        <header>
            <img src="/steamterest.png" alt="Steam logo" />
            <nav>
                <Link className='Explorar boton' to="/">Explorar</Link>
                <div className="Botones">
                    <Link  className="Login boton" to="/LogIn">Log In</Link>
                    <Link className="Registro boton" to="/Registro">Registro</Link>
                </div>
            </nav>
        </header>
    )
}
