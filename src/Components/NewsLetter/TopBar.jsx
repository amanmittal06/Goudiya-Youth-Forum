/* eslint-disable react/prop-types */
import styles from './TopBar.module.css'
import gyfLogoPNG from './Images/gyfLogoPNG.png'
const TopBar = ({title}) => {
    return(
        <div className={styles.topBar}>
            <img src={gyfLogoPNG} alt=""  height="50px"/>
            <div className={styles.topBarHeading}>{title}</div>
        </div>
    )
}

export default TopBar