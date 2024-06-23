import React from 'react';

function Intro({ startTest, style }) {
  const info = [
    { id: 1, description: "This quiz has 10 questions." },
    { id: 2, description: "Each question will remain on the screen for a maximum of 30 seconds." },
    { id: 3, description: "Answering will be available after 10 seconds has passed." },
    { id: 4, description: "After clicking on one of the answers or once the 30 second timer runs out, the next question will appear." },
    { id: 5, description: "You won't be able to return to the previously answered questions." },
    { id: 6, description: "After clicking START your quiz will begin." },
    { id: 7, description: "Once all the questions have been answered or your time runs out the results will be displayed." },
  ];

  return (
    <div className="introduction" style={style}>
      <h1>! WELCOME TO MY QUIZ APP !</h1>
      <ul className="info">
        {info.map((item) => (
          <li key={item.id}>{item.description}</li>
        ))}
      </ul>
      <h3>GOOD LUCK & HAVE FUN!</h3>
      <button id="start" onClick={startTest}>START</button>
      <p>Created with <span style={{color:'red'}}>love</span> by Arda Canbakış</p>
    </div>
  );
}

export default Intro;