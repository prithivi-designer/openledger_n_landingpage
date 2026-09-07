import React, { useState, useEffect } from 'react';

const CHARS = '.:*#@%$!/\\~^';

export default function ScrambledText({ text, scrambleSpeed = 40 }) {
  const [displayText, setDisplayText] = useState(text);

  const handleHover = () => {
    let iteration = 0;
    const interval = setInterval(() => {
      setDisplayText((prev) =>
        text
          .split('')
          .map((char, index) => {
            if (index < iteration) {
              return text[index];
            }
            if (char === ' ') return ' ';
            return CHARS[Math.floor(Math.random() * CHARS.length)];
          })
          .join('')
      );

      if (iteration >= text.length) {
        clearInterval(interval);
      }
      iteration += 1 / 2;
    }, scrambleSpeed);
  };

  return (
    <span
      onMouseEnter={handleHover}
      style={{
        cursor: 'default',
        transition: 'color 0.2s ease',
      }}
    >
      {displayText}
    </span>
  );
}
