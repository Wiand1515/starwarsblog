import React from 'react'
import "./FlipCard.css"

function FlipCard() {
    return (
       <>
       <div className="flip-box">
        <div className="flip-box-inner">
          <div className="flip-box-front">
            <img src="img_paris.jpg" alt="Paris" />
          </div>
          <div className="flip-box-back">
            <h2>Paris</h2>
            <p>What an amazing city</p>
          </div>
        </div>
      </div>
       </>
    )
}

export default FlipCard
