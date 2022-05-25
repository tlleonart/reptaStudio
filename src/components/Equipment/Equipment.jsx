import React from 'react'
import { equipement } from '../../jsfiles/equipment'
import Ecard from '../Ecard/Ecard'
import './equipment.scss'

const Equipment = () => {
  return (
    <section className='equipment'>
        <div className='equipment__titlecont'>
            <h2>Equipos en alquiler</h2>
            <h3>El alquiler de equipos se cobra por separado del espacio</h3>
        </div>
        <div className='equipment__cont'>
            {equipement.map(e => {
                return <Ecard name={e.name} car={e.car} price={e.price} img={e.img} key={e.name}/>
            })}
        </div>
    </section>
  )
}

export default Equipment