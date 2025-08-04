import React from 'react';
import styles from './Product.module.css';

const products = [
  { name: 'Product A', sales: 120 },
  { name: 'Product B', sales: 95 },
  { name: 'Product C', sales: 85 },
];

export default function ProductList() {
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th>Product</th>
          <th>Sales</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product, idx) => (
          <tr key={idx}>
            <td>{product.name}</td>
            <td>{product.sales}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
