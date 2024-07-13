/* eslint-disable react/prop-types */
import { useState } from 'react';
import styles from './ChapterCard.module.css'
import { MdLocationOn } from "react-icons/md";
import { MdAccessTimeFilled } from "react-icons/md";
import { SiGooglemeet } from "react-icons/si";
import { Link } from 'react-router-dom';



const ChapterCard = ({chapter}) =>{

    
    return(
        <div className={styles.cardContainer}>
            <img className={styles.poster} src={chapter.poster} alt="No img found"/>
            <div className={styles.chapterDescription}>
                <div className={styles.chapterTitle}>{chapter.title}</div>
                <div className={styles.address}>{chapter.address==undefined? <><SiGooglemeet/> <>Online through Google Meet</></> : <><MdLocationOn></MdLocationOn> {chapter.address}</> }</div>
                <div className={styles.timming}><MdAccessTimeFilled/> {chapter.timming}</div>
            </div>
            {/* <button className={styles.registrationButton}>Register</button> */}
            <Link to='/register' className={styles.registrationButton}>Register</Link>
        </div>
    )

}

export default ChapterCard