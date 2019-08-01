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
import Table1 from './tables/Table1';
import Table4 from './tables/Table4 ';
import Table7 from './tables/Table7';

const SIDE = 6

const SYMBOLS = '🎉💖🎩🐶🐱🐬🌛💫🍎🍌🍓🍟'
const VISUAL_PAUSE_MSECS = 750

var data = [
  {id: 1, name: 'Gob', value: '2'},
  {id: 2, name: 'Buster', value: '5'},
  {id: 3, name: 'George Michael', value: '4'}
];

class App extends Component {

  state = { 
    cards : this.generateCards(),
    currentPair: [],
    guesses : 0,
    matchedCardIndices : [],

  }

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

  // Arrow fx for binding
handleCardClick = index => {
  const { currentPair } = this.state

  if (currentPair.length === 2) {
    return
  }

  if (currentPair.length === 0) {
    this.setState({ currentPair: [index] })
    return
  }

  this.handleNewPairClosedBy(index)
}

handleNewPairClosedBy(index){
const { cards,  currentPair ,  guesses , matchedCardIndices } = this.state
const newPair = [ currentPair[0], index ]
const newGuesses = guesses + 1 
const matched  = cards[ newPair[0]] === cards[newPair[1]]

this.setState({ currentPair: newPair, guesses: newGuesses})
if(matched) { 
  this.setState({matchedCardIndices: [...matchedCardIndices, ...newPair]})
}
setTimeout(() => this.setState({currentPair: []}), VISUAL_PAUSE_MSECS)
}


  getFeedBackForCard(index) {
    const {currentPair, matchedCardIndices } = this.state
    const indexMatched =  matchedCardIndices.includes(index)

    if(currentPair.length <2 ){
        return indexMatched || index ==currentPair[0] ?  'visible' : 'hidden'
    }
    
    if(currentPair.includes(index) ){
         return indexMatched ?  'justMatched' : 'justMismatched'
    }


    return indexMatched ? 'visible ' : 'hidden'

  }


  render() {

    const  {cards , guesses , matchedCardIndices} = this.state
    const won  = matchedCardIndices.length === cards.length

    return (
      <div className="memory">
        <GuessCount guesses={0} />
        { cards.map((card, index)=> (
          <Card 
          card={card}
          feedback={this.getFeedBackForCard(index)}
          key={index}
          index={index}
          onClick={this.handleCardClick} />
        )) }
        <HallOfFame entries={FAKE_HOF} />

                {won && <p>GAGNÉ !</p>}
      {/* 
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

      <div className="App">
         <p className="Table-header"> Basic Table </p>
         <Table7 data={data}/></div> */}
      </div> 
    
    )
  }
}

export default App