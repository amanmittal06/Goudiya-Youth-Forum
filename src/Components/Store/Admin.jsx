import { useAuth0 } from '@auth0/auth0-react';
import styles from './Admin.module.css'
import { Link } from "react-router-dom"
import { useEffect, useState } from 'react';
import axios from 'axios';

const Admin  = () =>{

    const {isAuthenticated, user, loginWithPopup} = useAuth0();
    const [loggedinUser, setLoggedinUser] = useState(undefined);
    let [userFetched, setUserFetched] = useState(false);

    const fetchUser = async() =>{
        try {
            const response = await axios.get(`https://gyf-backend.vercel.app/storeusers/${user.email}`);
            console.log(response.data);
            setLoggedinUser(response.data);
        } catch (error) {
            console.error('Error while fetching user details:', error);
        }
    }
    
    useEffect(()=>{
           if(isAuthenticated && user){
             fetchUser();
           }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isAuthenticated, user]);

    setTimeout(()=>{
        setUserFetched(true);
    },2500)

    
    return(
        isAuthenticated && loggedinUser && loggedinUser.isAdmin===true?
        <div className={styles.container}>
            <Link to={"/allorders"} className={styles.buttons}>Orders</Link>
            <Link to={"/registrees"} className={styles.buttons}>Registrations</Link>
        </div>
        :
        <center className={styles.externalAccess}>
            {userFetched==true?
            (
            isAuthenticated===true?
            <div>Unauthorized access!</div>
            :
            <div style={{marginTop:'40vh'}}>
                <div>Your are not logged in.<br/>Please login to continue</div>
                <button onClick={()=>loginWithPopup()} className={styles.loginButton}>Log in</button>
            </div>
            )
            :
            <div>Please wait...</div>
            }
        </center>   
    )
}

export default Admin 