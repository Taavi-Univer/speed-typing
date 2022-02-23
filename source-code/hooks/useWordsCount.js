import { useState, useEffect, useRef } from "react";

function useWordCount(startTime = 10) {
  const inputRef = useRef(null);

  const [text, setText] = useState("");
  const [timer, setTimer] = useState(startTime);
  const [game, setGame] = useState(false);
  const [wordCount, setWordCount] = useState(0);

  function handleChange(e) {
    const { value } = e.target;
    setText(value);
  }

  function countWords(text) {
    const words = text
      .trim()
      .split(" ")
      .filter((word) => word !== "");

    return words.length;
  }

  useEffect(() => {
    if (timer !== 0 && game) {
      setTimeout(() => setTimer((prev) => prev - 1), 1000);
    } else {
      setGame(false);
      const wordsCount = countWords(text);
      setWordCount(wordsCount);
    }
  }, [timer, game]);

  function resetStart() {
    setText("");
    setTimer(startTime);
    setGame(true);
    setWordCount(0);
    inputRef.current.disabled = false;
    inputRef.current.focus();
  }

  return { inputRef, handleChange, text, game, timer, resetStart, wordCount };
}

export default useWordCount;
