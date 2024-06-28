import styles from './Header.module.css'
import gyfLogo from '../assets/Images/gyfLogo.jpeg'

const Header = () => {
   
    return(
       
        
        <header className={styles.header}>
        
            <div className={styles.headerLeft} >
                <img className={styles.gyfLogo} src={gyfLogo}  height="30px" alt=""/>
                <h2 className={styles.gyfTopHeading}>Goudiya Youth Forum</h2>
            </div>
            <div className='headRight'>
                <a className={styles.signUp} href="#">Sign up</a> 
            </div>
       
       </header>
    )
}

export default Header
