import React, { useState, useEffect } from 'react';

interface TypewriterProps {
  phrases: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
}

const Typewriter: React.FC<TypewriterProps> = ({
  phrases,
  typingSpeed = 100,
  deletingSpeed = 50,
  pauseDuration = 1500,
}) => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');

  useEffect(() => {
    if (index >= phrases.length) {
      setIndex(0);
      return;
    }

    const currentPhrase = phrases[index];

    const handleTyping = () => {
      if (isDeleting) {
        // Deleting
        if (subIndex > 0) {
          setText(currentPhrase.substring(0, subIndex - 1));
          setSubIndex(subIndex - 1);
        } else {
          setIsDeleting(false);
          setIndex((prev) => (prev + 1) % phrases.length);
        }
      } else {
        // Typing
        if (subIndex < currentPhrase.length) {
          setText(currentPhrase.substring(0, subIndex + 1));
          setSubIndex(subIndex + 1);
        } else {
          // Pause before deleting
          setTimeout(() => setIsDeleting(true), pauseDuration);
          return; // Return early to avoid setting the timeout below for typing speed
        }
      }
    };

    const speed = isDeleting ? deletingSpeed : typingSpeed;
    const timer = setTimeout(handleTyping, speed);

    return () => clearTimeout(timer);
  }, [subIndex, isDeleting, index, phrases, typingSpeed, deletingSpeed, pauseDuration]);

  // Handle newlines in the text
  const formattedText = text.split('\n').map((line, i, arr) => (
    <React.Fragment key={i}>
      {line}
      {i < arr.length - 1 && <br />}
    </React.Fragment>
  ));

  return (
    <span className="inline-block">
      {formattedText}
      <span className="cursor-blink ml-1 border-r-2 border-black/80 h-[1em] inline-block align-middle">&nbsp;</span>
    </span>
  );
};

export default Typewriter;