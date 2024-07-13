import { AiFillHome } from "react-icons/ai";
import { IoNewspaper } from "react-icons/io5";
import { IoIosPeople } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";

import styles from './Footer.module.css'
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
const bottomNavBarItems = [
    {name:'Home' , address:"/" , icon: <AiFillHome/> },
    {name:'Newsletter' , address:"/newsletter" , icon: <IoNewspaper/>},
    {name:'Store' , address:"/store" , icon: <FaCartShopping/>},
    {name:'About us' , address:"/about-us" , icon: <IoIosPeople/>},
];

 
const Footer = () => {

    const {pathname} = useLocation();
    
    return(       
        
        <div className={styles.bottomNavBar}>
            {bottomNavBarItems.map((NavBarItem)=>(<Link className={pathname==NavBarItem.address?styles.NavBarItemActive: styles.NavBarItemInactive} key={NavBarItem.name} to={`${NavBarItem.address}`}><>{NavBarItem.icon}{NavBarItem.name}</></Link>))}
        </div>

    )
}

export default Footer
