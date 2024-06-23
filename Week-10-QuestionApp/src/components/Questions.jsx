import { useState, useEffect } from 'react';
import questions from '/public/assets/questions';
import Results from './Results';

function Questions({ onReset }) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [timer, setTimer] = useState(30); // Each question must remain on the screen for a maximum of 30 seconds.
  const [showOptions, setShowOptions] = useState(false);
  const [correctAnswer, setCorrectAnswer] = useState(0);
  const [wrongAnswer, setWrongAnswer] = useState(0);
  const [userAnswer, setUserAnswer] = useState([]);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const currentQuestion = questions[currentQuestionIndex];

  useEffect(() => {
    setShowOptions(false); // Answer choices will not appear for the first 10 seconds.
    const countDown = timer > 0 && setInterval(() => {
      setTimer(prevTimer => prevTimer - 1);
    }, 1000);

    // Answer choices appear after 10 seconds.
    if (timer <= 20) {
      setShowOptions(true);
    }

    if (timer === 0) {
      nextQuestion(); // After one of the answer choices has been chosen or 30 seconds have elapsed, a new question will be asked.
    }

    return () => clearInterval(countDown);
  }, [timer, currentQuestionIndex]);

  const nextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setTimer(30);
      setShowOptions(false);
    } else {
      setQuizCompleted(true);
    }
  };

  const handleAnswer = (selectedOption) => {
    const isCorrect = selectedOption === currentQuestion.answer;
    if (isCorrect) {
      setCorrectAnswer(prevCorrect => prevCorrect + 1);
    } else {
      setWrongAnswer(prevWrong => prevWrong + 1);
    }
    setUserAnswer(prevAnswers => [
      ...prevAnswers,
      {
        questionId: currentQuestion.id,
        answer: selectedOption, isCorrect
      }
    ]);
    nextQuestion();
  };

  return (
    <div>
      {!quizCompleted ? (
        <div className='questions'>
          <p className={`timer ${timer <= 10 ? 'timer-red' : ''}`}>{timer}</p>
          <h2>{currentQuestion.id} - {currentQuestion.question}</h2>
          <img
            src={`/assets/pictures/${currentQuestion.media}`}
            alt={currentQuestion.media}
            width='500'
            className='image-frame'
          />
          {showOptions && (
            <div className='options'>
              {currentQuestion.options.map((item, index) => (
                <button className='button' key={index} onClick={() => handleAnswer(item)}>
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>
      ) : (
        // At the end of the test, the answer to each question and the number of correct and incorrect answers will be shared with the user.
        <Results userAnswer={userAnswer} correctAnswer={correctAnswer} wrongAnswer={wrongAnswer} onReset={onReset} />
      )}
    </div>
  );
}

export default Questions;