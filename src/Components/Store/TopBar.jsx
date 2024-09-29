/* eslint-disable react/prop-types */
import styles from './TopBar.module.css'
import gyfLogoPNG from './Images/gyfLogoPNG.png'
import { MdOutlineMenu } from "react-icons/md";
import { RxCross1 } from "react-icons/rx";
import { useState} from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Link } from 'react-router-dom';



const TopBar = ({title, loggedinUser}) => {

    const [menuActive, setMenuActive] = useState(false);
    const {logout, isAuthenticated, loginWithRedirect}  =useAuth0();
    const toggleMenu = ()=>{
        setMenuActive(!menuActive);
        scrollTo({
        top:0
        })
        
    }

    return(
  
        <div className={menuActive==true? styles.topBarContainerActive: null}>
          <div className={styles.topBar}>
            <div className={styles.topBarLeft}>
              <img src={gyfLogoPNG} alt=""  height="50px"/>
              <div className={styles.topBarHeading}>{title}</div>
            </div>
            {menuActive==true?<RxCross1 className={styles.crossIcon} onClick={()=>{toggleMenu()}}/>:<MdOutlineMenu className={styles.menuIcon}  onClick={()=>{toggleMenu()}}/>}
          </div>
          <div className={menuActive?styles.menuActive: styles.menuDisabled}>
              
              <div className={styles.menuContainer}>
                  <Link to={"/orders"} className={styles.buttons}>Orders</Link>
                  {loggedinUser && loggedinUser.isAdmin && <Link to={"/admin/orders"} className={styles.buttons}>Admin</Link>}
                  {
                    isAuthenticated===true?
                    <button className={styles.buttons}  onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Log out</button>
                    :
                    <button className={styles.buttons}  onClick={()=> loginWithRedirect()} >Log in</button>
                  }
              </div>
           </div>
        </div>
    )
}

export default TopBar