// import React from 'react';
// import styles from './WorldMap.module.css';
// import {
//   ComposableMap,
//   Geographies,
//   Geography,
// } from 'react-simple-maps';

// const geoUrl =
//   'https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json';

// export default function WorldMap() {
//   return (
//     <div className={styles.mapContainer}>
//       <h3 className={styles.mapTitle}>Sales Mapping by Country</h3>
//       <ComposableMap projectionConfig={{ scale: 130 }}>
//         <Geographies geography={geoUrl}>
//           {({ geographies }) =>
//             geographies.map((geo) => (
//               <Geography
//                 key={geo.rsmKey}
//                 geography={geo}
//                 style={{
//                   default: {
//                     fill: '#d1d5db',
//                     outline: 'none',
//                   },
//                   hover: {
//                     fill: '#6366f1',
//                     outline: 'none',
//                   },
//                   pressed: {
//                     fill: '#4f46e5',
//                     outline: 'none',
//                   },
//                 }}
//               />
//             ))
//           }
//         </Geographies>
//       </ComposableMap>
//     </div>
//   );
// }
