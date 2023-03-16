import React from "react"

export default function Card(props) {
    
    let badgeText
    if (props.item.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.item.location === "Online") {
        badgeText = "ONLINE"
    }

    return (
        <div className="card">
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img src={`../public/images/${props.item.coverImg}`} className="card--image" />
            <div className="card--stats">
                <img src="./public/images/Star.png" className="card--star" />
                <span>{props.item.stats.rating}</span>
                <span className="gray">({props.item.stats.reviewCount}) • </span>
                <span className="gray">{props.item.location}</span>
            </div>
            <p>Life Lessons with Katie Zaferes</p>
            <p><span className="bold">From ${props.item.price}</span> / person</p>
        </div>
    )
}