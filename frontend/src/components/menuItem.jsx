import React from 'react'

export default function menuItem({ image, name, price }) {
    return (
        <div className="menuItem">
            <div style={{ backgroundImage: `url(${image})`, color: 'white' }}></div>
            <h2 >{name}</h2>
            <p>{price}</p>
        </div>
    )
}
