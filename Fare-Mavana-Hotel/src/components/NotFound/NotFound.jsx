import React from "react";
import styles from './NotFound.module.css';

export const NotFound = () => {

    console.log('not found here');
    return (
        <section className={styles['page-404']}>
        <div className={styles.container}></div>
    </section>
    )
}