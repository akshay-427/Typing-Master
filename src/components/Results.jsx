import React from "react";

const Results = ({ results }) => {
  return (
    <div className="results">
      <h2>📊 Results</h2>
      <p>WPM: {results.wpm}</p>
      <p>Accuracy: {results.accuracy}%</p>
      <p>Total Characters: {results.chars}</p>
    </div>
  );
};

export default Results;
