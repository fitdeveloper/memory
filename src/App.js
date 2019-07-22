// // import React from 'react';
// // import './App.css';

// // function App() {
// //   return (
// //     <p> Hello World this my first React App </p>
// //   );
// // }

// // export default App;

// import React, { Component } from 'react'
// import './App.css'
// import Card from './Card';
// import GuessCount from './GuessCount';

// class App extends Component {
//   handledCardClick(card){
//     console.log(card,"clicked");
//   }

//   render() {
//     const won = new Date().getSeconds() % 2 === 0
//     return (
//     <div className="memory"> 
//     <GuessCount guesses={0} />
//         <Card card="😀" feedback="hidden" onClick={this.handledCardClick}/>
//         <Card card="🎉" feedback="justMatched" onClick={this.handledCardClick}/>
//         <Card card="💖" feedback="justMismatched" onClick={this.handledCardClick}/>
//         <Card card="🎩" feedback="visible" onClick={this.handledCardClick}/>
//         <Card card="🐶" feedback="hidden" onClick={this.handledCardClick}/>
//         <Card card="🐱" feedback="justMatched" onClick={this.handledCardClick}/>
//         {won && <p>GAGNÉ !</p>}
//     </div> 
//     )
//     // const className = "log entry ${this.isOpen() ? 'open' : 'closed'}"
//     // return (
//     //   <li className={className} onClick={this.toggle}>
//     //     … test 
//     //   </li>
//     // )
//   }
// }

// export default App;


import React, { Component } from 'react'
import shuffle from 'lodash.shuffle'

import './App.css'
// import Card from './Card';
// import GuessCount from './GuessCount';
import Card from './Card'
import GuessCount from './GuessCount'
import HallOfFame, { FAKE_HOF } from './HallOfFame';

const SIDE = 6
const SYMBOLS = '😀🎉💖🎩🐶🐱🦄🐬🌍🌛🌞💫🍎🍌🍓🍐🍟🍿'


class App extends Component {
  cards = this.generateCards()

  generateCards() {
    const result = []
    const size = SIDE * SIDE
    const candidates = shuffle(SYMBOLS)
    while (result.length < size) {
      const card = candidates.pop()
      result.push(card, card)
    }
    return shuffle(result)
  }

  handleCardClick(card) {
    console.log(card, 'clicked')
  }

  render() {
    return (
      <div className="memory">
        <GuessCount guesses={0} />
        { this.cards.map((card, index)=> (
          <Card 
          card={card}
          feedback="hidden"
          key={index}
          onClick={this.handleCardClick} />
        )) }
        <HallOfFame entries={FAKE_HOF} />
        {/* 
            const won = new Date().getSeconds() % 2 === 0
        <Card card="😀" feedback="hidden" onClick={this.handleCardClick} />
        <Card card="🎉" feedback="justMatched" onClick={this.handleCardClick} />
        <Card
          card="💖"
          feedback="justMismatched"
          onClick={this.handleCardClick}
        />
        <Card card="🎩" feedback="visible" onClick={this.handleCardClick} />
        <Card card="🐶" feedback="hidden" onClick={this.handleCardClick} />
        <Card card="🐱" feedback="justMatched" onClick={this.handleCardClick} /> 
                {won && <p>GAGNÉ !</p>} */}
      </div>
    )
  }
}

export default App