import styles from './LatestRelease.module.css'
import NewsLetterCard from './NewsLetterCard'
const LatestRealease = () =>{
    
     return(
        <>
           <div className={styles.latestReleaseContainer}>
            <div className={styles.latestReleaseHeading}>LATEST RELEASE!!</div>
            <hr className={styles.hrTag}></hr>
           </div>
           <NewsLetterCard></NewsLetterCard>
       </>
     )
}

export default LatestRealease