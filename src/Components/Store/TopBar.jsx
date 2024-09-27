/* eslint-disable react/prop-types */
import styles from './TopBar.module.css'
import gyfLogoPNG from './Images/gyfLogoPNG.png'
import { MdOutlineMenu } from "react-icons/md";
import { RxCross1 } from "react-icons/rx";
import { useState} from 'react';
import { useAuth0 } from '@auth0/auth0-react';



const TopBar = ({title}) => {

    const [menuActive, setMenuActive] = useState(false);
    const {logout}  =useAuth0();
    const toggleMenu = ()=>{
        setMenuActive(!menuActive);
        scrollTo({
        top:0
        })
        
    }

    return(
        <div>
          <div style={{position: menuActive==true?'fixed':'relative'}} className={styles.topBar}>
            <div className={styles.topBarLeft}>
              <img src={gyfLogoPNG} alt=""  height="50px"/>
              <div className={styles.topBarHeading}>{title}</div>
            </div>
            {menuActive==true?<RxCross1 className={styles.crossIcon} onClick={()=>{toggleMenu()}}/>:<MdOutlineMenu className={styles.menuIcon}  onClick={()=>{toggleMenu()}}/>}
          </div>
          <div className={menuActive?styles.menuActive: styles.menuDisabled}>
              
              <div className={styles.menuContainer}>
                  <button className={styles.buttons}>Orders</button>
                  <button className={styles.buttons}  onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Log out</button>
              </div>
           </div>
        </div>
    )
}

export default TopBar