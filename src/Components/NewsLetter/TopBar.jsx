import styles from './TopBar.module.css'
import gyfLogoPNG from './Images/gyfLogoPNG.png'
const TopBar = () => {
    return(
        <div className={styles.topBar}>
            <img src={gyfLogoPNG} alt=""  height="50px"/>
            <div className={styles.topBarHeading}>MONTHLY NEWSLETTERS</div>
        </div>
    )
}

export default TopBar