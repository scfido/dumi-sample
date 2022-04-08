import React from 'react';
import styles from 'style.less';

export default ({ title }: { title: string }) => (
  <h1 className={styles.header}>{title}</h1>
);
