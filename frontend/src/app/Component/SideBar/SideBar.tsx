import React from 'react';
import styles from './SideBar.module.css';

const menuItems = [
  'Dashboard',
  'Leaderboard',
  'Orders',
  'Products',
  'Sales Report',
  'Messages',
  'Settings',
  'Sign Out',
];

export default function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <div>
        <div className={styles.logo}>My Dashboard</div>
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
