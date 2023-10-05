import React from 'react'

function Ficha ({ ficha }) {
  return (
    <div className='ficha' id={ficha.id} style={{ backgroundColor: ficha.color }}>
    </div>
  )
}
export default Ficha
