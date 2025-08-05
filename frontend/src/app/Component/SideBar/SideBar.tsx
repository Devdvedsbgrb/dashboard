import React from 'react';
import styles from './SideBar.module.css';

const menuItems = [
  'Dashboard',
  'Store ',
  'Customer',
  'Product',
  'Sales Report',
  'Discount',
  'Settings',
  'Sign Out',
];

export default function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <div>
        <div className={styles.logo}> Store</div>
        <ul className={styles.menu}>
          {menuItems.map((item, index) => (
            <li key={index} className={styles.menuItem}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
