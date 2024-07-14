/* eslint-disable react/no-unescaped-entities */

import styles from './WelcomeMsgAndIntro.module.css'
import gyfLogoPNG from './Images/gyfLogoPNG.png'
import GouiyaYouthForum from './Images/GoudiyaYouthForum.png'
import { Link, useNavigate } from 'react-router-dom'
import { RxCross2 } from "react-icons/rx";
import RecentActivities from './RecentActivities';





const WelcomeMsgAndIntro=()=>{
    
    function handleCancelButton(){
        const element = document.getElementsByClassName(styles.welcomeMessage)
        for (let i = 0; i < element.length; i++) {
            element[i].style.display = 'none';
        }
        const element2 = document.getElementsByClassName(styles.aboutHeading);
        for (let i = 0; i < element2.length; i++) {
            element2[i].style.marginTop= '3%';
        }
    }

    const navigate = useNavigate();

    function handleOnClick(){
        navigate('/register' , {state: {chapterValue:undefined}});
    }
    
    return (
        <div className={styles.container}>

               <div className= {styles.welcomeMessage}>
                 <div className={styles.cancelButton}><RxCross2 onClick={handleCancelButton}/></div>
                 <div className={styles.welcomeHeading}>Register now!</div>
                 <div className={styles.intro}>Step into a transformative journey with Goudiya Youth Forum, dedicated to empowering youth through the profound wisdom of ancient scriptures!</div>
                 <button className={styles.registerButton} onClick={()=>{handleOnClick()}}>Register</button>
                 {/* <Link to='/register' className={styles.registerButton}>Register</Link> */}
               </div>
               {/* <RecentActivities></RecentActivities> */}
               <div className={styles.aboutHeading}>About Goudiya Youth Forum</div>
               <div className={styles.aboutDescription}>At the Goudiya Youth Forum, we are committed to nurturing a community where young individuals delve into the profound teachings of scriptures such as the Bhagavad Gita. Our programs include <strong>regular classes</strong> that explore scripture deeply, transformative <strong>workshops</strong>, and immersive <strong>spiritual study tours</strong> that provide hands-on learning experiences. These initiatives are designed to inspire personal growth, spiritual enlightenment, and the practical application of timeless wisdom.  
               </div>

        </div>
    )
}

export default WelcomeMsgAndIntro