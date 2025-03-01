import React from 'react'

export default function Carta({id,imagen, favorito, info,fecha }) {
    return (
        <div className={`Carta${id}`} id='Carta'>
            <img className="imagen" src={imagen} alt="" />
            <div className={favorito ? "favorito" : ""} id='info'>
                <p className='descripcion'>{info}</p>
                <p className="select">{fecha}<span><img src={favorito ? "/star-filled-white.png" : "/star-outline.png"} alt="" /></span></p>
            </div>
        </div>
    )
}
