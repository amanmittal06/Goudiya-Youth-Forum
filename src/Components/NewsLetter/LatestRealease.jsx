/* eslint-disable react/prop-types */
import styles from './LatestRelease.module.css'
import NewsLetterCard from './NewsLetterCard'
const LatestRealease = ({latestNewsletter}) =>{
    
     return(
        <>
           <div className={styles.latestReleaseContainer}>
            <div className={styles.latestReleaseHeading}>LATEST EDITION!</div>
            <hr className={styles.hrTag}></hr>
            <NewsLetterCard newsletters = {latestNewsletter}></NewsLetterCard>
           </div>
           
       </>
     )
}

export default LatestRealease