import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [timeLeft, setTimeLeft] = useState(60);
  const [isRunning, setIsRunning] = useState(false);
  const [typedText, setTypedText] = useState("");
  const [wpm, setWpm] = useState(0);
  const [accuracy, setAccuracy] = useState(0);

  const sampleText =
    "The quick brown fox jumps over the lazy dog. Practice typing to improve your speed and accuracy.";

  // Timer
  useEffect(() => {
    let timer;
    if (isRunning && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isRunning, timeLeft]);

  // Calculate Results
  const calculateResults = () => {
    const wordsTyped = typedText.trim().split(/\s+/).length;
    const correctWords = typedText
      .trim()
      .split(/\s+/)
      .filter((word, index) => word === sampleText.split(/\s+/)[index]).length;

    setWpm(wordsTyped);
    setAccuracy(((correctWords / sampleText.split(/\s+/).length) * 100).toFixed(2));
  };

  const startTest = () => {
    setIsRunning(true);
    setTypedText("");
    setTimeLeft(60);
    setWpm(0);
    setAccuracy(0);
  };

  const finishTest = () => {
    setIsRunning(false);
    calculateResults();
  };

  return (
    <div className="app">
      <h1>⌨️ Typing Master</h1>

      <div className="card">
        <p className="timer">⏳ Time Left: {timeLeft}s</p>
        <p className="sample-text">{sampleText}</p>

        <textarea
          placeholder="Start typing here..."
          value={typedText}
          onChange={(e) => setTypedText(e.target.value)}
          disabled={!isRunning || timeLeft === 0}
        ></textarea>

        <div className="buttons">
          <button className="start-btn" onClick={startTest}>
            Start Test
          </button>
          <button className="finish-btn" onClick={finishTest}>
            Finish Test
          </button>
        </div>

        {wpm > 0 && (
          <div className="results">
            <p>⚡ Words Per Minute: <b>{wpm}</b></p>
            <p>🎯 Accuracy: <b>{accuracy}%</b></p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
