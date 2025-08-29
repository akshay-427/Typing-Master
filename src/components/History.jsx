import React from "react";

const History = ({ history }) => {
  if (!history.length) return null;

  return (
    <div className="history">
      <h2>📖 History</h2>
      <table border="1" cellPadding="8">
        <thead>
          <tr>
            <th>Date</th>
            <th>WPM</th>
            <th>Accuracy</th>
            <th>Chars</th>
          </tr>
        </thead>
        <tbody>
          {history.map((h, i) => (
            <tr key={i}>
              <td>{h.date}</td>
              <td>{h.wpm}</td>
              <td>{h.accuracy}%</td>
              <td>{h.chars}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default History;
