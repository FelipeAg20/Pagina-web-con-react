import React from 'react'
import PrimerDiv from './primerDiv'
import Cards from './cards'
import img1 from './imagenes/1.jpeg'
import img2 from './imagenes/2.jpg'
function Main() {
  let des = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus tempore cumque deleniti voluptatibus iste, eveniet nobis quis minima maiores voluptatem in, id, facilis accusantium atque fugiat vero alias esse. Aliquam."
  return (
    <main >
        <PrimerDiv/>
        <div className='divContenedor'>
        <Cards imagen={img1} titulo="Chanchito" descripcion={des}/>
        <Cards imagen={img2} titulo="Chanchito" descripcion={des}/>
        <Cards imagen={img1} titulo="Chanchito" descripcion={des}/>
        <Cards imagen={img2} titulo="Chanchito" descripcion={des}/>
        <Cards imagen={img1} titulo="Chanchito" descripcion={des}/>
        <Cards imagen={img1} titulo="Chanchito" descripcion={des}/>
        <Cards imagen={img2} titulo="Chanchito" descripcion={des}/>
        <Cards imagen={img1} titulo="Chanchito" descripcion={des}/>
        <Cards imagen={img2} titulo="Chanchito" descripcion={des}/>
        <Cards imagen={img1} titulo="Chanchito" descripcion={des}/>
        </div>
    </main>
  )
}

export default Main;

