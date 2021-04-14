import React, { useState } from 'react'

const Flashcard = ( { flashcard } ) => {
    const [flip, setFlip] = useState(false)
  
    return ( 
        <div
        className={`card ${flip ? 'flip' : ''} cards ` }
        onClick={() => setFlip(!flip)}
      >
        <div className="front">
         <h4> {flashcard.category}  </h4>
         <p> {flashcard.front} </p>
         
        </div>
        <div className="back"><p>{flashcard.back}</p> <h5>${flashcard.price}</h5></div>
      </div>
    )
}

export default Flashcard
