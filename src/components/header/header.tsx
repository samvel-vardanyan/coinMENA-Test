import React from 'react';
import styles from './header.module.css';

const Header = () => {
    return (
        <div className={styles.headerContainer}>
            <div className={styles.header}>
                <h1 className={styles.headerTitle}>Trending</h1>
                <p className={styles.headerDescription}>
                    See what the GitHub community is most excited about today.
                </p>
            </div>
        </div>
    );
}

export default Header;