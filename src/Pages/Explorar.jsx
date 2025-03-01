import React, { useEffect, useState } from 'react'
import Carta from '../Components/Carta'

export default function Explorar() {

  const [item, setItem] = useState([])

  async function GetInfo() {
    const answer  = await fetch("https://cx1.davcs.workers.dev/api/gallery");
    const data = await answer.json();
    setItem(data);
    console.log(data)
  }

  useEffect(() => {
    GetInfo()
  }, [])

  return (
    <main>
       {
            item.map((e) => {
              return <Carta key={e.id} id={e.id} imagen={e.url} info={e.description} fecha={e.created_at}></Carta>
            })
          }
    </main>
  )
}
