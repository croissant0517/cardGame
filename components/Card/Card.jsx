import { useState } from "react";

import styles from "./Card.module.css";

const Card = ({ children }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    console.log(children);
    setIsFlipped(!isFlipped);
  };

  return (
    <div
      className={`${styles.card} ${isFlipped ? styles.flipped : ""}`}
      onClick={handleClick}
    >
      <div className={styles.cardContent}>{children}</div>
    </div>
  );
};

export default Card;
