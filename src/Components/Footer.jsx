import { AiFillHome } from "react-icons/ai";
import { IoNewspaper } from "react-icons/io5";
import { IoIosPeople } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";

import styles from './Footer.module.css'
import { Link, useLocation } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import { useEffect } from "react";



const bottomNavBarItems = [
    {name:'Home' , address:"/" , icon: <AiFillHome/> },
    {name:'Newsletter' , address:"/newsletter" , icon: <IoNewspaper/>},
    {name:'Store' , address:"/store" , icon: <FaCartShopping/>},
    {name:'About us' , address:"/about-us" , icon: <IoIosPeople/>},
];

 
const Footer = () => {

    const {loginWithRedirect, isAuthenticated} = useAuth0();
    const {pathname} = useLocation();

    
    return(       
        
        <div className={styles.bottomNavBar}>
            {bottomNavBarItems.map((NavBarItem)=>(
            NavBarItem.name==='Store' && isAuthenticated===false? 
            <div onClick={()=>{loginWithRedirect();}} key = {NavBarItem.name} className={pathname==NavBarItem.address?styles.NavBarItemActive: styles.NavBarItemInactive}>{NavBarItem.icon}{NavBarItem.name}</div>
            :
            <Link className={pathname==NavBarItem.address?styles.NavBarItemActive: styles.NavBarItemInactive} key={NavBarItem.name} to={`${NavBarItem.address}`}><>{NavBarItem.icon}{NavBarItem.name}</></Link>))}
        </div>

    )
}

export default Footer
