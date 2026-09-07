import React from 'react';
import styles from './StarBorder.module.css';

export default function StarBorder({
  color = '#a0a0a0',
  speed = '4s',
  isTemporary = false,
  children,
  style = {},
  className = '',
}) {
  return (
    <div
      className={`${styles.starBorderContainer} ${isTemporary ? styles.isTemporaryBorder : ''} ${className}`}
      style={{
        '--star-color': color,
        '--star-speed': speed,
        ...style,
      }}
    >
      <div className={styles.starBorderCanvas} aria-hidden="true">
        <div className={styles.starBorderRevolveGlow} />
        <div className={styles.starBorderRevolve} />
      </div>
      <div className={styles.innerContent}>{children}</div>
    </div>
  );
}
