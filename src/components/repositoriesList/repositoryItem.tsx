import React, { useState } from 'react';
import styles from './repositoriesList.module.css';
import { IRepositoryItem } from '../../state/types';
import { ReactComponent as ActionRepo } from "../../assets/icons/actionRepo.svg";
import { ReactComponent as Star } from "../../assets/icons/star.svg";
import { ReactComponent as ForksIcon } from "../../assets/icons/fork.svg";
import { DATE_RANGE_OBJ } from '../../constants'

import classnames from "classnames";

interface IRepositoryItemProps {
    data: IRepositoryItem;
}

const RepositoryItem = ({ data }: IRepositoryItemProps ):JSX.Element => {
    const {
        since,
        language,
        repositoryName,
        description,
        forks,
        username,
        builtBy
    } = data;
    const [starsSince, setStarsSince] = useState<number>(data.starsSince);
    const [totalStars, setTotalStars] = useState<number>(data.totalStars);
    const [isUpVoted, setIsUpVoted] = useState<boolean>(false);

    const handleUpVote = () => {
        if(!isUpVoted) {
            setStarsSince((prevState) => prevState + 1);
            setTotalStars((prevState) => prevState + 1);
        } else {
            setStarsSince((prevState) => prevState - 1);
            setTotalStars((prevState) => prevState - 1);
        }
        setIsUpVoted((prevState) => !prevState)
    }
    return (
        <div className={styles.repositoryContainer}>
            <div className={styles.row}>
                <div className={styles.repoInfo}>
                    <ActionRepo className={styles.icon} />
                    <span className={styles.repoName}>
                        {`${username} / ${repositoryName}`}
                    </span>
                </div>
                <div className={styles.upVoteContainer} onClick={handleUpVote}>
                    <span className={styles.starBtn}>
                        <Star className={classnames(styles.starIcon, {
                            [styles.isStarActive]: isUpVoted
                        })} />
                        { isUpVoted ? 'Starred' : 'Star' }
                    </span>
                </div>
            </div>
            <div className={classnames(styles.row, styles.descriptionRow)}>
                {description}
            </div>
            <div className={classnames(styles.row, styles.infoRow)}>
                <div className={styles.plrow}>
                    <div className={styles.row}>
                        <span className={styles.pLanguage}>{language}</span>
                        <span className={styles.starsCount}>
                        <Star className={styles.starIconSmall} />
                            {totalStars}
                        </span>
                            <span className={styles.forks}>
                            <ForksIcon className={styles.forksIcon} />
                                {forks}
                        </span>
                    </div>

                    <span className={styles.builtBy}>
                        Built by
                        {builtBy?.map((user) => {
                            return <img key={user.username} src={user.avatar} className={styles.author} alt={user.username} />
                        })}
                    </span>

                </div>
                <span className={styles.starsSince}>
                    <Star className={styles.starIconSmall} />
                    {starsSince} stars { since && DATE_RANGE_OBJ[since]}
                </span>
            </div>

        </div>
    )
}

export default RepositoryItem;