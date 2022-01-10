import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import classnames from 'classnames';
import styles from './filtersSection.module.css';
import FilterDropDown from './filterDropdown/filterDropdown';
import { SPEAKING_LANGUAGES, PROG_LANGUAGES, DATE_RANGE } from '../../constants';
import { useSelector } from 'react-redux';
import { FiltersSelector } from '../../state/filters/selectors';

const FiltersSection = () => {
    let location = useLocation();
    const { since, spoken_language, language } = useSelector(FiltersSelector);
    const isDevelopersPage = location.pathname === '/developers';
    const isReposPage = location.pathname === '/';
    return (
        <div className={styles.filtersContainer}>
            <div className={styles.filtersRow}>
                <div>
                    <Link to='/'  className={classnames(styles.button, styles.repoButton, {
                        [styles.isActive]: isReposPage
                    })} >
                        Repositories
                    </Link>
                    <Link to='/developers' className={classnames(styles.button, styles.devButton, {
                        [styles.isActive]: isDevelopersPage
                    })}>
                        Developers
                    </Link>
                </div>
                <div className={styles.filtersRow}>
                    {isReposPage && <FilterDropDown
                        title="Spoken Language"
                        heading="Select a spoken language"
                        type="spoken_language"
                        labels={SPEAKING_LANGUAGES}
                        selectionValue={spoken_language}
                        noSearch
                    />}
                    <FilterDropDown
                        title="Language"
                        heading="Select a language"
                        type="language"
                        labels={PROG_LANGUAGES}
                        selectionValue={language}
                    />
                    <FilterDropDown
                        title="Date range"
                        type="since"
                        heading="Adjust time span"
                        labels={DATE_RANGE}
                        selectionValue={since}
                        noSearch
                    />
                </div>
            </div>
        </div>
    );
};

export default FiltersSection;