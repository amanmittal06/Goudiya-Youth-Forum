import styles from './Header.module.css'
import gyfLogoPNG from '../assets/Images/gyfLogoPNG.png'
import gyfLogo from '../assets/Images/gyfLogo.jpeg'
import { Link } from "react-router-dom";

const Header = () => {
   
    return(
       
        
        // <header className={styles.header}>
           
        //        <div className={styles.headerLeft} >
        //            <img className={styles.gyfLogo} src={gyfLogo}  height="30px" alt=""/>
        //            <h2 className={styles.gyfTopHeading}>Goudiya Youth Forum</h2>
        //        </div>
        //        <div className='headRight'>
        //            <Link to="/sign-up" className={styles.signUp} >Sign up</Link> 
        //        </div>
          
        //   </header>

       <div className={styles.topBar}>
            <img src={gyfLogoPNG} alt=""  height="50px"/>
            <div className={styles.topBarHeadingAndMotto}>
                <div className={styles.topBarHeading}>GOUDIYA YOUTH FORUM </div>
                <p className={styles.motto}>ADD TO SUCCESS AND TRANSFORM TO HAPPINESS</p></div>
        </div>
    )
}

export default Header
