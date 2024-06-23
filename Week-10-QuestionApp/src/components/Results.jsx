import React from 'react';

function Results({ userAnswer, correctAnswer, wrongAnswer, onReset }) {
  return (
    <div className="results">
      <div>
        <h2>Results</h2>
        <p>
          <b>#</b> of <b style={{ color: 'green' }}>correct</b> answers = {correctAnswer}
        </p>
        <p>
          <b>#</b> of <b style={{ color: 'red' }}>wrong</b> answers = {wrongAnswer}
        </p>
      </div>
      <div>
        <h2>Quiz Review</h2>
        <ul>
          {userAnswer.map((answer, index) => (
            <li key={index}>
              <b>Question</b> {answer.questionId}: Your Answer - {answer.answer} (
              <span style={{ color: answer.isCorrect ? 'green' : 'red' }}>
                <b>{answer.isCorrect ? "True" : "False"}</b>
              </span>)
            </li>
          ))}
        </ul>
      </div>
      <button onClick={onReset} className="button">Retake Quiz</button>
    </div>
  );
}

export default Results;
