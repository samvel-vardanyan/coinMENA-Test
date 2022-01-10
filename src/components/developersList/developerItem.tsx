import React, { useState } from 'react';
import { IDeveloperItem } from '../../state/types';
import styles from './developersList.module.css';
import  classnames from 'classnames';

import { ReactComponent as ActionRepo } from "../../assets/icons/actionRepo.svg";
import { ReactComponent as Fire } from "../../assets/icons/fire.svg";
import { ReactComponent as Heart } from "../../assets/icons/heart.svg";

interface IDeveloperItemProps {
    data: IDeveloperItem;
}

const  DeveloperItem = ({ data }: IDeveloperItemProps):JSX.Element => {
    const { avatar, name, username, popularRepository, rank } = data;
    const [isFollowing, setIsFollowing ] = useState<boolean>(false);

    const  toggleFollow = () => {
        setIsFollowing((state) => !state)
    }
    return (
        <div className={styles.developerContainer}>
            <div className={styles.developerInfo}>
                <span className={styles.developerRank}>{rank}</span>
                <img className={classnames(styles.image, styles.circleImg)} src={avatar} alt="avatar"/>
                <span className={styles.developerNameContainer}>
                    <span className={styles.developerName}>{name}</span>
                    <span className={styles.developerUserName}>{username}</span>
                </span>
            </div>
            <div className={styles.developerRepoInfo}>
                <span className={styles.popularRepo}>
                    <Fire className={styles.fireIcon} />
                    Popular Repo
                </span>
                <span className={styles.repoName}>
                    <ActionRepo className={styles.actionRepoIcon} />
                    <span className={styles.repositoryName}>{popularRepository.repositoryName}</span>
                </span>
                <span className={styles.repoDescription}>
                    {popularRepository.description || "A lightweight, stable and high-performance reverse proxy for NAT traversal, written in Rust. An alternative to frp and ngrok"}
                </span>
            </div>
            <div className={styles.developerMediaInfo}>
                <span className={classnames(styles.sponsorBtn, styles.btn)}>
                    <Heart className={styles.heartIcon} />
                    Sponsor
                </span>
                <span className={classnames(styles.followBtn, styles.btn)} onClick={toggleFollow}>
                   {isFollowing ? 'Unfollow' : 'Follow'}
                </span>
            </div>
        </div>
    )
}

export default DeveloperItem;