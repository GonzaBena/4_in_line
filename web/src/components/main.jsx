import React, { useState } from 'react'
import Ficha from './ficha'

class FichaElement {
  constructor (id, color) {
    this.id = id
    this.color = color
  }
}

function Main () {
  const blue = (id) => new FichaElement(id, 'blue')
  const red = (id) => new FichaElement(id, 'red')
  const trans = (id) => new FichaElement(id, 'transparent')
  const ficha = [
    [blue(0), red(1), red(2), red(3), red(4), red(5), trans(6), trans(7)],
    [red(0), red(1), blue(2), trans(3), trans(4), trans(5), trans(6), trans(7)],
    [red(0), red(1), red(2), blue(3), trans(4), trans(5), trans(6), trans(7)],
    [blue(0), red(1), red(2), red(3), red(4), red(5), trans(6), trans(7)],
    [blue(0), trans(1), trans(2), trans(3), trans(4), trans(5), trans(6), trans(7)],
    [blue(0), trans(1), trans(2), trans(3), trans(4), trans(5), trans(6), trans(7)],
    [blue(0), trans(1), trans(2), trans(3), trans(4), trans(5), trans(6), trans(7)],
    [blue(0), trans(1), trans(2), trans(3), trans(4), trans(5), trans(6), trans(7)]
  ]
  const [fichas, setFichas] = useState(ficha)

  const handleClick = (e) => {
    const ficha = e.target

    console.log(ficha)
  }

  return (
    <main className='tablero'>
      <div className='col' onClick={(e) => handleClick(e)}>
        {fichas[0].reverse().map(color => <Ficha key={color.id} ficha={color} />)}
      </div>
      <div className='col'>
      </div>
      <div className='col'>
      </div>
      <div className='col'>
      </div>
      <div className='col'>
      </div>
      <div className='col'>
      </div>
      <div className='col'>
      </div>
      <div className='col'>
      </div>
    </main>
  )
}
export default Main
