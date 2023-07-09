import { useEffect, useState } from "react";

import Card from "../components/Card/Card";

import * as styles from "./App.module.css";

const array = [
  { value: 1, flipped: false },
  { value: 2, flipped: false },
  { value: 3, flipped: false },
  { value: 4, flipped: false },
  { value: 5, flipped: false },
  { value: 6, flipped: false },
  { value: 7, flipped: false },
  { value: 8, flipped: false },
  { value: 1, flipped: false },
  { value: 2, flipped: false },
  { value: 3, flipped: false },
  { value: 4, flipped: false },
  { value: 5, flipped: false },
  { value: 6, flipped: false },
  { value: 7, flipped: false },
  { value: 8, flipped: false },
];

function App() {
  const [cardArray, setCardArray] = useState(array);
  const flippedCards = cardArray.filter((item) => item.flipped === true);

  const handleRandomCard = () => {
    let newArray = [
      { value: 1, flipped: false },
      { value: 2, flipped: false },
      { value: 3, flipped: false },
      { value: 4, flipped: false },
      { value: 5, flipped: false },
      { value: 6, flipped: false },
      { value: 7, flipped: false },
      { value: 8, flipped: false },
      { value: 1, flipped: false },
      { value: 2, flipped: false },
      { value: 3, flipped: false },
      { value: 4, flipped: false },
      { value: 5, flipped: false },
      { value: 6, flipped: false },
      { value: 7, flipped: false },
      { value: 8, flipped: false },
    ];

    for (let i = 0; i < newArray.length; i++) {
      const randomIndex =
        Math.round(Math.random() * (newArray.length - 1 - i)) + i;
      [newArray[i], newArray[randomIndex]] = [
        newArray[randomIndex],
        newArray[i],
      ];
    }
    setCardArray(newArray);
  };

  const handleFlip = (index) => {
    let newArray = [...cardArray];
    newArray[index].flipped = true;
    setCardArray(newArray);
  };

  useEffect(() => {
    // check match
    if (flippedCards.length !== 0 && flippedCards.length % 2 === 0) {
      let needReset = false;
      const newArray = cardArray.map((item) => {
        if (item.flipped === true) {
          const sameValue = flippedCards.filter(
            (card) => card.value === item.value
          );
          if (sameValue.length !== 2) {
            needReset = true;
            return { ...item, flipped: false };
          } else {
            return item;
          }
        } else {
          return item;
        }
      });
      if (needReset) {
        console.log("reset");
        setTimeout(() => {
          setCardArray(newArray);
        }, 500);
      }
    }
  }, [flippedCards]);

  useEffect(() => {
    handleRandomCard();
  }, []);

  return (
    <div className={styles.app}>
      <div className={styles.cards}>
        {cardArray.map((item, index) => (
          <Card key={index} item={item} index={index} onClick={handleFlip} />
        ))}
      </div>

      <button className={styles.startButton} onClick={handleRandomCard}>
        Start!
      </button>
    </div>
  );
}

export default App;
