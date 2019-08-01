import React from 'react'
import PropTypes from 'prop-types'

// import './Card.css'

// const HIDDEN_SYMBOL = '❓'

// const Card = ({ card, feedback , onClick }) => (
//     <div className={'card ${feedback}'}  onClick= {() => {onClick(card)}}>
//         <span className="symbol">
//             { feedback === 'hidden' ? HIDDEN_SYMBOL : card }
//         </span>
//     </div>
// )

// export default Card

import './Card.css'

const HIDDEN_SYMBOL = '❓'

const Card = ({ card, feedback, onClick, index }) => (
  <div className={`card ${feedback}`} onClick={() => onClick(index)}>
    <span className="symbol">
      {feedback === 'hidden' ? HIDDEN_SYMBOL : card}
    </span>
  </div>
)

Card.prototype = { 
  card:  PropTypes.string.isRequired,
  card: PropTypes.oneOf([
      'hidden',
      'justMatched',
      'justMismatched',
      'visible'
  ]).isRequired,
  index: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
}
export default Card