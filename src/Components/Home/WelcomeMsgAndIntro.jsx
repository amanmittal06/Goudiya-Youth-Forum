/* eslint-disable react/no-unescaped-entities */

import styles from './WelcomeMsgAndIntro.module.css'
// import { RxCross2 } from "react-icons/rx";
// import Image1 from './Images/Home1.jpg'
// import Image2 from './Images/Home2.jpg'
// import Image3 from './Images/Home3.jpg'
// import Image4 from './Images/Jhinjholi.jpg'
// import Image5 from './Images/Jhinjholi2.jpg'
// import Image6 from './Images/Jhinjholi3.jpg'
// import Carousel from './Carousel';




const WelcomeMsgAndIntro=()=>{

    // const slides = [
    //     { image: Image1, title: 'Slide 1' },
    //     // { image: Image2, title: 'Slide 2' },
    //     // { image: Image3, title: 'Slide 3' },
    //     // { image: Image4, title: 'Slide 4' },
    //     // { image: Image5, title: 'Slide 5' },
    //     // { image: Image6, title: 'Slide 6' },
    //     // Add more slides as needed
    //   ];
    
    // function handleCancelButton(){
    //     const element = document.getElementsByClassName(styles.welcomeMessage)
    //     for (let i = 0; i < element.length; i++) {
    //         element[i].style.display = 'none';
    //     }
    //     const element2 = document.getElementsByClassName(styles.aboutHeading);
    //     for (let i = 0; i < element2.length; i++) {
    //         element2[i].style.marginTop= '3%';
    //     }
    // }
    
    return (
        <div className={styles.container}>

               {/* <div className= {styles.welcomeMessage}>
                 <div className={styles.cancelButton}><RxCross2 onClick={handleCancelButton}/></div>
                 <div className={styles.welcomeHeading}>Register now!</div>
                 <div className={styles.intro}>Step into a transformative journey with Goudiya Youth Forum, dedicated to empowering youth through the profound wisdom of ancient scriptures!</div>
                 <button className={styles.registerButton} onClick={()=>{handleOnClick()}}>Register</button>
                 <Link to='/register' className={styles.registerButton}>Register</Link>
               </div> */}
               {/* <RecentActivities></RecentActivities> */}
               {/* <div style= {{margin:'0% 0% 10% 0%'}}><Carousel slides={slides}></Carousel></div> */}
               {/* <div className={styles.videoWrapper}>
               <iframe
                className={styles.videoIframe}
                src={`https://www.youtube.com/embed/Fx9E40flD-E?si=ymLymFkoL5cTAp9v`}
                title="YouTube Video"
                allowFullScreen
               ></iframe>
               </div> */}
               <div className={styles.aboutHeading}>About Goudiya Youth Forum</div>
               <div className={styles.aboutDescription}>At the Goudiya Youth Forum, we are committed to nurturing a community where young individuals delve into the profound teachings of scriptures such as Shrimad Bhagavad Gita. Our programs include <strong>regular classes</strong> that explore scripture deeply, transformative <strong>workshops</strong>, and immersive <strong>spiritual study tours</strong> that provide hands-on learning experiences. These initiatives are designed to inspire personal growth, spiritual enlightenment, and the practical application of timeless wisdom.  
               </div>

        </div>
    )
}

export default WelcomeMsgAndIntro