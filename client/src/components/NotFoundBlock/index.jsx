import React from "react";
import styles from "./NotFoundBlock.module.scss";

export const NotFoundBlock = () => (
  <div className={styles.root}>
    <div className={styles.content}>
      <h1>
        <span>😕</span>
        <br />
        Nothing found
      </h1>
      <p className={styles.description}>Unfortunately, this page is not available in our online store.</p>
    </div>
  </div>
);

