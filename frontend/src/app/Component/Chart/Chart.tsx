import React, { ReactNode } from 'react';
import styles from './Chart.module.css';

interface ChartCardProps {
  title: string;
  children: ReactNode;
}

export default function ChartCard({ title, children }: ChartCardProps) {
  return (
    <div className={styles.card}>
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.chartContainer}>{children}</div>
    </div>
  );
}
