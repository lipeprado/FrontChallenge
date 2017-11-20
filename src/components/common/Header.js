import React from 'react';
import styles from "./header.scss";

const Header = () => {
  return (
    <div className={styles.header}>
      <h1 className={styles.headerMain}>
        Marvel 
      </h1>
      <h3 className={styles.headerDev}>FrontEnd Challenge</h3>
    </div>
  );
};

export default Header;