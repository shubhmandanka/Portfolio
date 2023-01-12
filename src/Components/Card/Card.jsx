import React from 'react'
import "./Card.css"

const Card = ({emoji, heading, detail}) => {
  return (
    <div>
      <div className="card-s">
        <img src={emoji} alt="" />
        <span>{heading}</span>
        <span>{detail}</span>
      </div>
    </div>
  )
}

export default Card
