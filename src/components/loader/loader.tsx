import React from 'react';
import Loader from "react-loader-spinner";
import styles from './loader.module.css';

const LoaderComponent = (): JSX.Element => {
    return (
        <div className={styles.loaderContainer}>
            <Loader
                type="TailSpin"
                color="#00BFFF"
                height={100}
                width={100}
            />
        </div>
    );
}


export default LoaderComponent;