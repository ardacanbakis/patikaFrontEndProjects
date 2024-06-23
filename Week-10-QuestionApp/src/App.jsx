import { useEffect, useState } from "react";
import "./App.css";
import Intro from '/src/components/Intro'
import Questions from '/src/components/Questions'

function App() {
  const [hasStarted, setHasStarted] = useState(false);

  const startQuiz = () => {
    setHasStarted(true);
  };

  const resetQuiz = () => {
    setHasStarted(false);
  };

  return (
    <div>
      {!hasStarted ? (
        <Intro startTest={startQuiz} style={{ display: 'flex' }} />
      ) : (
        <Questions onReset={resetQuiz} />
      )}
    </div>
  );
}

export default App;