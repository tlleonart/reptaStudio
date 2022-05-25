import React from 'react'
import './ecard.scss'

const Ecard = ({name, car, price, img}) => {
  return (
    <div className='ecard'>
        <div className='ecard__linkblock'>
            <img src={img} alt='prodImg' className='ecard__linkblock__img'/>
            <div className='ecard__linkblock__des'>
                <h4>{name}</h4>
                <h4>{car}</h4>
                <h4>{price}</h4>
            </div>
        </div>
    </div>
  )
}

export default Ecard