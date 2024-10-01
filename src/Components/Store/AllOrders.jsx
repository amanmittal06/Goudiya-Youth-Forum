import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import { useEffect, useState } from "react"
import styles from './AllOrders.module.css'


const MyOrders = ()=>{

    const [orders, setOrders] = useState([]);
    const {isAuthenticated, user, loginWithPopup} = useAuth0();
    const [loggedinUser, setLoggedinUser] = useState(undefined);
    let [userFetched, setUserFetched] = useState(false);
    let [orderFetched, setOrderFetched] = useState(false);
   

    const loadOrders = async() =>{
     try{
        const res = await axios.get(`https://gyf-backend.vercel.app/orders/`)
        setOrders(res.data);
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

    const changeDeliveryStatus = async (orderId) => {
      try{
         await axios.patch(`https://gyf-backend.vercel.app/orders/${orderId}`, {delivered:true});
         loadOrders();
      }
      catch(err){
          console.log('error in updating status' , err);
          alert('Error in updating status');
      }
    }

    const changePaymentStatus = async (orderId, status) =>{
      try{
        await axios.patch(`https://gyf-backend.vercel.app/orders/${orderId}`, {paymentStatus:status});
        loadOrders();
      }
      catch(err){
        console.log('error in updating status' , err);
        alert('Error in updating status');
      }
    }


    useEffect(()=>{
       if(isAuthenticated && user){
         fetchUser();
         loadOrders();
       }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isAuthenticated, user]);

    setTimeout(()=>{
      setUserFetched(true);
    },2500)

    setTimeout(()=>{
      setOrderFetched(true);
    },3500)

  
    return(
      //
        isAuthenticated && loggedinUser && loggedinUser.isAdmin===true?  
        <center className={styles.container}>
            <div className={styles.topHeading}>
                All Orders
            </div>
            {
               orders.length===0?
               (
                  orderFetched===true?
                  <div>No orders have been made yet</div>
                  :
                  <div>Please wait...</div>
               )
               :
               orders.map((order)=>(
                  <div key={order._id} className={styles.order}>
                     <div style={{textAlign:'start', fontWeight:500}}>Id: <span style={{fontSize:'small'}}>{order.name}</span></div>
                     <div>
                        {
                            order.items.map((item)=>(
                               item.sizes?
                               item.sizes.map((size)=>(
                                <div key={size._id} className={styles.item}> 
                                  <div style={{width:'70%', textAlign:'left'}}>{item.title} {size.type} </div>  <div style={{width:'30%', textAlign:'right'}}>{size.quantity}</div>
                                </div>
                               ))
                               :
                               <div key={item._id} className={styles.item}> 
                                  <div style={{width:'70%', textAlign:'left'}}>{item.title}</div>  <div style={{width:'30%', textAlign:'right'}}>{item.quantity}</div>
                               </div>
                            ))
                        }
                        <div style={{padding:'2px 0px 2px 4px', fontSize:'small', fontWeight:'400', textAlign:'left', textDecoration:'underline 1px solid black'}}>Payment details</div>
                        <div className={styles.payment}>
                        <div style={{width:'50%', textAlign:'left'}}>Payment Id:</div> <div style={{width:'50%', textAlign:'right'}}>
                           {
                              order.paymentId==undefined?
                              'N/A'
                              :
                              order.paymentId
                           }
                        </div>
                        </div>
                        <div className={styles.payment}>
                        <div style={{width:'60%', textAlign:'left'}}>Payment Status:</div> <div style={{width:'40%', textAlign:'right'}}>{order.paymentStatus}</div>
                        </div>
                        <div className={styles.priceAndStatus}>
                            

                            {
                                order.delivered===true?
                                <div style={{fontWeight:'400'}}>
                                   Status: Delivered
                                </div>
                                :
                                <button className={styles.markDelivered} onClick={()=>{changeDeliveryStatus(order._id)}}>Mark delivered</button>
                                 
                            }
                            {
                              order.paymentStatus!=='Paid' &&
                              <button className={styles.markDelivered} onClick={()=>{changePaymentStatus(order._id, 'Paid')}}>Mark paid</button>
                              &&
                              <button className={styles.markDelivered} onClick={()=>{changePaymentStatus(order._id, 'Not found')}}>Not found</button> 

                            }
                             <div style={{fontWeight:'400'}}>
                              <span style={{fontFamily:'sans-serif'}}>₹</span>{order.amount}
                            </div>
                        </div>
                     </div>
                  </div>
               )) 
            }
        </center>
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

export default MyOrders