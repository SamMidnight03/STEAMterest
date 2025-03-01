import React from 'react'
import { Link } from 'react-router'

export default function Login() {
  return (
    <section>
        <section id='InisioSesion'>
            <form>
                <h1>Inicio de sesion</h1>
                <div className='Input'>
                    <input placeholder="Nombre de usuario"/>
                    <input placeholder="Contraseña"/>
                </div>
                <div className='botonesRegitro'>
                    <Link className="btmReg Explorar login" to='LogIn'>Registro</Link>
                    <div className="btmReg  Login">Iniciar sesion</div>
                </div>
            </form>
        </section>
    </section>
  )
}
