/* eslint-disable react/no-unescaped-entities */

import styles from './WelcomeMsgAndIntro.module.css'
import gyfLogoPNG from './Images/gyfLogoPNG.png'
import GouiyaYouthForum from './Images/GoudiyaYouthForum.png'
import { Link } from 'react-router-dom'




const WelcomeMsgAndIntro=()=>{

    
    return (
        <div className={styles.container}>

               <div className={styles.welcomeHeading}>Goudiya Youth Forum<br></br>welcomes you!</div>
               <div className={styles.intro}>Step into a transformative journey with Goudiya Youth Forum, dedicated to empowering youth through the profound wisdom of ancient scriptures!</div>

               <div className={styles.aboutHeading}>About Goudiya Youth Forum</div>
               <div className={styles.aboutDescription}>At the Goudiya Youth Forum, we are committed to nurturing a community where young individuals delve into the profound teachings of scriptures such as the Bhagavad Gita. Our programs include <strong>regular classes</strong> that explore scripture deeply, transformative <strong>workshops</strong> , and immersive <strong>spiritual study tours</strong> that provide hands-on learning experiences. These initiatives are designed to inspire personal growth, spiritual enlightenment, and the practical application of timeless wisdom.  
               </div>

        </div>
    )
}

export default WelcomeMsgAndIntro