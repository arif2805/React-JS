import React from 'react'

const Card = (props) => {
  return (
    <div className='card'>
        <img className='card--image' src={props.item.imageUrl} alt="" />

        <div className="card--stats">
            <div className="stats-top">
               <img className='card--icon' src="public\images\location-icon.png" alt="" />
                <p ><span className='location'>{props.item.location}</span> <a href={props.item.googleMapsUrl}>view on Google Maps</a></p>
            </div>
            <h2>{props.item.title}</h2>
            <p className='travel-date'>{props.item.startDate}-{props.item.endDate}</p>
            <p>{props.item.description}</p>

        </div>


    </div>
  )
}

export default Card