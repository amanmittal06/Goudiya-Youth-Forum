/* eslint-disable react/prop-types */
import styles from './TopBar.module.css'
import gyfLogoPNG from './Images/gyfLogoPNG.png'
import { MdOutlineMenu } from "react-icons/md";
import { RxCross1 } from "react-icons/rx";
import { useState } from 'react';
import { GoogleLogin, googleLogout } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';


const TopBar = ({title}) => {

    const [user, setUser] = useState(null);

    const [menuActive, setMenuActive] = useState(false);
    const toggleMenu = ()=>{
        setMenuActive(!menuActive);
    }

    // Handle the successful login
    const handleLoginSuccess = (response) => {
        const decoded = jwtDecode(response.credential);  // Decode JWT token to get user info
        console.log(decoded);  // Log the user data to see what info you get
        setUser({
            name: decoded.name,
            email: decoded.email,
        });
    };

    // Handle login failure
    const handleLoginFailure = () => {
        console.log('Login Failed');
    };

    // Handle logout
    const handleLogout = () => {
        googleLogout(); // Logs out the user from Google
        setUser(null);  // Clear the user state
    };

    return(
        <div>
          <div className={styles.topBar}>
            <div className={styles.topBarLeft}>
              <img src={gyfLogoPNG} alt=""  height="50px"/>
              <div className={styles.topBarHeading}>{title}</div>
            </div>
            {menuActive==true?<RxCross1 className={styles.crossIcon} onClick={()=>{toggleMenu()}}/>:<MdOutlineMenu className={styles.menuIcon}  onClick={()=>{toggleMenu()}}/>}
          </div>
          <div className={menuActive?styles.menuActive: styles.menuDisabled}>
              {user?
              <div className={styles.menuContainer}>
                  <button className={styles.buttons}>Orders</button>
                  <button className={styles.buttons} onClick={()=>{handleLogout}}>Log out</button>
              </div>
              :
              <div className={styles.loginContainer}>
                    
                    <div>
                    <div style={{marginBottom:'5%'}}>Kindly log in to view your orders</div>
                    <GoogleLogin
                        onSuccess={handleLoginSuccess}
                        onError={handleLoginFailure}
                        className= {styles.loginButton}
                    />
                    </div>
              </div>}
           </div>
        </div>
    )
}

export default TopBar