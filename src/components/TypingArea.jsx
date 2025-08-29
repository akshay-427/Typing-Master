import React from "react";

const TypingArea = ({ userInput, setUserInput, isActive }) => {
  return (
    <textarea
      value={userInput}
      onChange={(e) => setUserInput(e.target.value)}
      disabled={!isActive}
      placeholder="Start the test and type here..."
      rows="6"
      cols="60"
    />
  );
};

export default TypingArea;
