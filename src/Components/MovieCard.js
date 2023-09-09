import React, { useState } from "react";
import "./MovieCard.css";

const MovieCard = (props) => {
    const date = new Date(props.year);
    const [isHoverd, setIsHoverd] = useState(false);
    
    const handleMouseOver = () => {
        setIsHoverd(true);
    }

    const handleMouseOut = () => {
        setIsHoverd(false)
    }

    return (
        <div className="container">
            <div className="movie" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
                <div className="movie-img">
                    <img src={props.poster} alt="poster" className="onHoverOver"/>
                </div>
                {isHoverd && 
                    <div className="details">
                        <h6>{props.rating}/10</h6> 
                        <button>View Details</button>
                    </div>}
            </div>
            <div className="content">
                <h5>{props.title}</h5>
                <p>{date.getFullYear()}</p>
            </div>
        </div>
    )
}

export default MovieCard;