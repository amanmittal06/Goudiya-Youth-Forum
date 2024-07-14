/* eslint-disable react/prop-types */

import styles from './IntroCard.module.css'
import ReadMore from '../NewsLetter/ReadMore'

const IntroCard = ({member}) => {
      
    return(
        <div className={styles.introCardContainer}>
            
            <div className={styles.introCard}>
             <div className={styles.name}>{member.nAme}<br/><div className={styles.designation}>{`${member.designation}`}</div></div>
             <hr className={styles.hrTag}></hr>
             <img className={styles.image} src={member.image} alt="" width='40%' />
             <p className={styles.description}><ReadMore sliceSize={500}>{member.description}</ReadMore></p>
            </div>
        </div>
    )   
}

export default IntroCard