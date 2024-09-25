import React, { useState, useEffect } from "react";

const DynamicH1 = () => {
  const [quoteIndex, setQuoteIndex] = useState(0);

  const quotes = [
    "Jay Jinendra Dev!",
    "Welcome Dev!",
    "Sat Sri Akal Dev!",
    "Khamma Gani Dev!",
    "Nomoskar Dev!",
  ];
  useEffect(() => {
    const interval = setInterval(() => {
      setQuoteIndex((prevIndex) => (prevIndex + 1) % quotes.length);
    }, 5000);

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  return (
    <div>
      <h1>{quotes[quoteIndex]}</h1>
    </div>
  );
};

export default DynamicH1;
