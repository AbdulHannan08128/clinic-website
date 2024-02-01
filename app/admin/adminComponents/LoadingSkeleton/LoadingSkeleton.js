// LoadingSkeleton.jsx

import React from 'react';
import styles from './LoadingSkeleton.module.css';

const LoadingSkeleton = () => {
  return (
    <div className={styles.loadingSkeleton}>
      <div className={styles.skeletonBlock}></div>
      <div className={styles.skeletonBlock}></div>
      <div className={styles.skeletonBlock}></div>
      <div className={styles.skeletonBlock}></div>
      <div className={styles.skeletonBlock}></div>
      <div className={styles.skeletonBlock}></div>
      <div className={styles.skeletonBlock}></div>
      <div className={styles.skeletonBlock}></div>
      <div className={styles.skeletonBlock}></div>
      <div className={styles.skeletonBlock}></div>
      <div className={styles.skeletonBlock}></div>
      <div className={styles.skeletonBlock}></div>
      {/* Add more skeleton blocks as needed */}
    </div>
  );
};

export default LoadingSkeleton;
