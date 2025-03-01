import React from 'react'
import { Link } from 'react-router'

export default function Registro() {
    return (
        <section id='Registro'>
            <form>
                <h1>Registro</h1>
                <div className='Input'>
                    <input placeholder="Nombre de usuario"/>
                    <input placeholder="Contraseña"/>
                    <input placeholder="Repita su contraseña"/>
                </div>
                <div className='botonesRegitro'>
                    <Link className="btmReg Explorar login" to='LogIn'>Iniciar sesion</Link>
                    <div className="btmReg  Login">Registro</div>
                </div>
            </form>
        </section>
    )
}
