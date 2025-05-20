import { FaWhatsapp } from "react-icons/fa6";
import { IoMdCall} from "react-icons/io";
import styles from './Registrees.module.css'
import { useAuth0 } from "@auth0/auth0-react";
import { useState, useEffect } from "react";
import axios from "axios";
// import Dropdown from 'react-dropdown';
// import 'react-dropdown/style.css';
import './Registrees.css'

const Registrees = () =>{

    const [registrees, setRegistrees] = useState([]);
    const {isAuthenticated, user, loginWithPopup} = useAuth0();
    const [loggedinUser, setLoggedinUser] = useState(undefined);
    let [userFetched, setUserFetched] = useState(false);
    let [registreeFetched, setRegistreeFetched] = useState(false);
    const options = [
        'Delhi Chapter', 'Noida Chapter', 'International Chapter'
    ];
    const defaultOption = options[0];
     
   

    const loadRegistrees = async() =>{
     try{
        const res = await axios.get(`https://gyf-backend.vercel.app/users/`)
        setRegistrees(res.data);
     }
     catch(err){
        console.log(err);
     }
    }

    const fetchUser = async() =>{
        try {
            const response = await axios.get(`https://gyf-backend.vercel.app/storeusers/${user.email}`);
            setLoggedinUser(response.data);
        } catch (error) {
            console.error('Error while fetching user details:', error);
        }
    }


    useEffect(()=>{
       loadRegistrees(); 
       if(isAuthenticated && user){
         fetchUser();
         loadRegistrees();
       }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isAuthenticated, user]);

    setTimeout(()=>{
      setUserFetched(true);
    },2500)

    setTimeout(()=>{
      setRegistreeFetched(true);
    },3500)
    
    return (
        // isAuthenticated && loggedinUser && loggedinUser.isAdmin===true? 
        userFetched===true?
        <div className={styles.outerContainer}>
        {
        registrees.length===0?
        (
            registreeFetched===true?
            <div>No registrations have been made yet</div>
            :
            <div>Please wait...</div>
        )     
        :
        (
            <>
            {/* <Dropdown options={options} className='myClassName' controlClassName='myControlClassName' value={defaultOption} placeholder="Select an option" /> */}
            {registrees.map((registree)=><div key={registree.id} className={styles.innerContainer}>
               <p className={styles.name}>
                <p style={{fontSize:'large'}}>{registree.fullName}</p>
                <p style={{fontSize:'smaller'}}>{registree.chapter}</p>
                </p>

               <div className={styles.buttonContainer}>
               <a  href={`tel:+${registree.mobile}`} target='_blank' className={styles.callButton}><IoMdCall/></a>
               <a  href={`https://wa.me/+${registree.mobile}`} className={styles.whatsAppButton}><FaWhatsapp/></a>
               </div>
            </div>)}
            <div>
               <button></button>
               <button></button>
               <button></button>
            </div>
            </>
            
        )
        }
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

export default Registrees