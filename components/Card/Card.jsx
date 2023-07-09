import { useState } from "react";

import * as styles from "./Card.module.css";

const Card = ({ item, onClick, index }) => {
  const handleClick = () => {
    onClick(index);
  };

  return (
    <div
      className={`${styles.card} ${item.flipped ? styles.flipped : ""}`}
      onClick={handleClick}
    >
      <div className={styles.cardContent}>{item.value}</div>
    </div>
  );
};

export default Card;
