import { AiFillHome } from "react-icons/ai";
import { IoNewspaper } from "react-icons/io5";
import { IoIosPeople } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";

import styles from './Footer.module.css'

const Footer = () => {
   
    return(
       
        
        <ul className={styles.bottomNavBar}>
                <li className={styles.bottomNavBarItems} id="home"><AiFillHome/>Home</li>
                <li className={styles.bottomNavBarItems} id="newsletter"><IoNewspaper/>Newsletter</li>
                <li className={styles.bottomNavBarItems} id="store"><FaCartShopping/>Store</li>
                <li className={styles.bottomNavBarItems} id="contact-us"><IoIosPeople/>About us</li>
        </ul>

    )
}

export default Footer
