import React, { useState, useEffect } from "react";

const DynamicH1 = () => {
  // const [quoteIndex, setQuoteIndex] = useState(0);

  const words = [
    "Jay Jinendra",
    "Welcome ",
    "Sat Sri Akal",
    "Khamma Gani ",
    "Nomoskar ",
  ];

  // State to track the current word index
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  // State to track the current letter index
  const [currentLetterIndex, setCurrentLetterIndex] = useState(0);

  // State for the currently displayed part of the word
  const [displayedWord, setDisplayedWord] = useState("");

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setQuoteIndex((prevIndex) => (prevIndex + 1) % quotes.length);
  //   }, 5000);

  //   return () => clearInterval(interval); // Cleanup on component unmount
  // }, []);

  useEffect(() => {
    // Interval to reveal one letter at a time
    const letterInterval = setInterval(() => {
      const currentWord = words[currentWordIndex];
      
      // Check if we have reached the end of the word
      if (currentLetterIndex < currentWord.length) {
        setDisplayedWord((prev) => prev + currentWord[currentLetterIndex]);
        setCurrentLetterIndex((prevIndex) => prevIndex + 1);
      } else {
        // Once the word is fully typed, wait and then move to the next word
        setTimeout(() => {
          setCurrentLetterIndex(0);
          setDisplayedWord("");
          setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        }, 1000); // Pause before showing the next word
      }
    }, 200); // Speed of letter appearance (200ms)

    // Cleanup function to clear the interval when component unmounts
    return () => clearInterval(letterInterval);
  }, [currentLetterIndex, currentWordIndex]);

  return (
    <div>
      {/* <h1>{quotes[quoteIndex]}</h1>*/}

      <h1>
      <span style={{ color: "blue" }}>{displayedWord}</span> Dev!
    </h1>

    </div>
  );
};

export default DynamicH1;
