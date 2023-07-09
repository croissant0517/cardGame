import { useState } from "react";

import Card from "../components/Card/Card";

import styles from "./App.module.css";

const array = [1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8];

function App() {
  const [cardArray, setCardArray] = useState(array);

  const handleRandomCard = () => {
    let newArray = [1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8];
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

  return (
    <div className={styles.app}>
      <div className={styles.cards}>
        {cardArray.map((item, index) => (
          <Card key={index}>{item}</Card>
        ))}
      </div>

      <button className={styles.startButton} onClick={handleRandomCard}>
        Start!
      </button>
    </div>
  );
}

export default App;
