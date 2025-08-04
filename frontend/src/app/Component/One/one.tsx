"use client";
import { useState, useEffect } from "react";
import styles from "./one.module.css";

const charts: Record<string, string> = {
  "Төлбөрийн Арга": "ka1.png",
  "Топ 10 Өдөр": "ka2.png",
  "Идэвхтэй хэрэглэгч": "ka3.png",
  "Сайн салбар (Size)": "ka4.png",
  "Хамгийн их зарагдсан комбо": "ka5.png",
};

export default function ChartPage() {
  const [selected, setSelected] = useState("ka1.png");
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.className = darkMode ? styles.dark : "";
  }, [darkMode]);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>📊 Хяналтын Самбар</h1>
        <button onClick={() => setDarkMode(!darkMode)} className={styles.toggle}>
          {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
        </button>
      </div>

      <div className={styles.selectBox}>
        <label>График сонгох:</label>
        <select value={selected} onChange={(e) => setSelected(e.target.value)}>
          {Object.entries(charts).map(([label, file]) => (
            <option key={file} value={file}>
              {label}
            </option>
          ))}
        </select>
      </div>

      <div className={styles.imageBox}>
        <img
          src={`http://192.168.92.130:5000/static/${selected}`}
          alt="Chart"
        />
      </div>
    </div>
  );
}
