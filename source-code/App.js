import React from "react";
import useWordsCount from "./hooks/useWordsCount";

function App() {
  const {
    inputRef,
    handleChange,
    text,
    game,
    timer,
    resetStart,
    wordCount,
  } = useWordsCount();

  return (
    <div className="App">
      <h1>Speed Typing</h1>
      <textarea
        ref={inputRef}
        onChange={handleChange}
        value={text}
        disabled={game === false ? true : false}
      />
      <h4>Time remaining: {timer}</h4>
      <button onClick={resetStart} disabled={game}>
        Start
      </button>
      <h1>Word Count: {wordCount}</h1>
    </div>
  );
}

export default App;
