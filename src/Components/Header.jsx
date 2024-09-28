import styles from './Header.module.css'
import gyfLogoPNG from '../assets/Images/gyfLogoPNG.png'


const Header = () => {
   
    return(

       <div className={styles.topBar}>
            <img src={gyfLogoPNG} alt=""  height="50px"/>
            <div className={styles.topBarHeadingAndMotto}>
                <div className={styles.topBarHeading}>GOUDIYA YOUTH FORUM </div>
                <p className={styles.motto}>ADD TO SUCCESS AND TRANSFORM TO HAPPINESS</p></div>
        </div>
    )
}

export default Header
