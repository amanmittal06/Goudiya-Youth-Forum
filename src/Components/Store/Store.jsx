import styles from './Store.module.css'
import ProductCard from "./ProductCard"
import TopBar from './TopBar'
import axios from 'axios'
import { useEffect } from 'react'
import { useAuth0 } from '@auth0/auth0-react'


const Store= () =>{
  const {user, isAuthenticated} = useAuth0();
  const postUser = async()=>{
    try {
        const response = await axios.post('https://gyf-backend.vercel.app/storeusers/', { email: user.email });
        console.log('User successfully posted:', response.data);
    } catch (error) {
        console.error('Error posting user:', error);
    }
  }
  
  useEffect( () => {
    if(isAuthenticated && user){
      postUser();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated, user]);
  
    return(
      
      
      <center className={styles.storeContainer}>
      {/* <div className={styles.sorry}>Sorry!!</div>  
      <div className={styles.sorryMessage}>Currently we are not selling anything online.</div>
      <Link className={styles.homeButton} to='/'>Home</Link> */}
      <TopBar title={`GYF STORE`}></TopBar>
      <ProductCard></ProductCard>
      </center>

    )
}

export default Store