import  React from 'react';
import styles  from './noData.module.css';

interface INoDataProps {
    section: string;
}

const NoData = ({ section }: INoDataProps): JSX.Element => {
    return (
        <div className={styles.noDataContainer}>
            <h1>
                {`It looks like we don’t have any trending ${section} for your search.`}
            </h1>
        </div>
    );
}

export default NoData;