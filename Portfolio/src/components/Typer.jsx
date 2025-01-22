import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { motion } from "motion/react";

function Typer() {

  const info = useSelector((state) => state.userdata.value)
  const arr = info.basicinfo.designation;

  const [displayedText, setDisplayedText] = useState('');
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let typingInterval;

    const handleTyping = () => {
      const currentWord = arr[currentWordIndex];
      if (!isDeleting) {
        // Typing effect
        setDisplayedText((prev) => currentWord.slice(0, prev.length + 1));
        if (displayedText === currentWord) {
          setTimeout(() => setIsDeleting(true), 2000); // Pause before deleting
        }
      } else {
        // Deleting effect
        setDisplayedText((prev) => currentWord.slice(0, prev.length - 1));
        if (displayedText === '') {
          setIsDeleting(false);
          setDisplayedText('')
          setCurrentWordIndex((prevIndex) => (prevIndex + 1) % arr.length); // Move to the next word
        }
      }
    };

    typingInterval = setTimeout(handleTyping, 150); // Smooth typing speed
    return () => clearTimeout(typingInterval);
  }, [displayedText, isDeleting]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      style={{ fontSize: '24px', fontWeight: 'bold' }}
    >
      {displayedText}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.5, repeat: Infinity }}
        style={{ fontWeight: 'normal' }}
      >
        |
      </motion.span>
    </motion.div>
  );




}

export default Typer