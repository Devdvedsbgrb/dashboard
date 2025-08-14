// components/NumberGrid.tsx
import React from "react";
import styles from "./World.module.css"; // We'll create this CSS module

const NumberGrid: React.FC = () => {
  return (
    <div className={styles.parent}>
      <div className={styles.div1}>1</div>
      <div className={styles.div2}>2</div>
      <div className={styles.div3}>3</div>
      <div className={styles.div4}>4</div>
      <div className={styles.div5}>5</div>
      <div className={styles.div6}>6</div>
      <div className={styles.div7}>7</div>
      <div className={styles.div8}>8</div>
    </div>
  );
};

export default NumberGrid;
