import React from 'react';
import styles from './TopPanel.module.css';

const data = [
  { label: 'Total Sales', value: '$1k', change: '+5%' },
  { label: 'Total Order', value: '300', change: '+5%' },
  { label: 'Product Sold', value: '5', change: '+1.2%' },
  { label: 'New Customers', value: '8', change: '0.5%' },
];

export default function TopPanel() {
  return (
    <div className={styles.cardContainer}>
      {data.map((item, index) => (
        <div key={index} className={styles.card}>
          <div className={styles.label}>{item.label}</div>
          <div className={styles.value}>{item.value}</div>
          <div className={styles.change}>{item.change} from yesterday</div>
        </div>
      ))}
    </div>
  );
}
