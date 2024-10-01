import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import { useEffect, useState } from "react"
import styles from './MyOrders.module.css'


const MyOrders = ()=>{

    const [orders, setOrders] = useState([]);
    const {isAuthenticated, user, loginWithPopup} = useAuth0();
    let [userFetched, setUserFetched] = useState(false);
    let [orderFetched, setOrderFetched] = useState(false);
   

    const loadOrders = async() =>{
     try{
        const res = await axios.get(`https://gyf-backend.vercel.app/orders/${user.email}`)
        setOrders(res.data);
     }
     catch(err){
        console.log(err);
     }
    }


    useEffect(()=>{
       if(isAuthenticated && user){
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
        isAuthenticated===true?
        <center className={styles.container}>
            <div className={styles.topHeading}>
               Your Orders
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
                     <div style={{textAlign:'start', fontWeight:500}}>Order id: <span style={{fontSize:'small'}}>{order._id}</span></div>
                     <div>
                        {
                            order.items.map((item)=>(
                               item.sizes?
                               item.sizes.map((size)=>(
                                <div key={size._id} className={styles.item}> 
                                  <div style={{width:'60%', textAlign:'left'}}>{item.title} {size.type} </div> <p style={{width:'10%'}}>×</p> <div style={{width:'30%', textAlign:'right'}}>{size.quantity}</div>
                                </div>
                               ))
                               :
                               <div key={item._id} className={styles.item}> 
                                  <div style={{width:'60%', textAlign:'left'}}>{item.title}</div> <p style={{width:'10%'}}>×</p> <div style={{width:'30%', textAlign:'right'}}>{item.quantity}</div>
                               </div>
                            ))
                        }
                        
                        <div className={styles.priceAndStatus}>
                        <div className={styles.item}>
                        <div style={{width:'50%', textAlign:'left'}}>Payment Id:</div> <div style={{width:'50%', textAlign:'right'}}>
                           {
                              order.paymentId==undefined?
                              'N/A'
                              :
                              order.paymentId
                           }
                        </div>
                        </div>
                        <div className={styles.item}>
                        <div style={{width:'60%', textAlign:'left'}}>Payment Status:</div> <div style={{width:'40%', textAlign:'right'}}>{order.paymentStatus}</div>
                        </div>

                            {
                                order.delivered===true?
                                <div style={{fontWeight:'400'}}>
                                   Status: Delivered
                                </div>
                                :
                                <div style={{fontWeight:'400'}}>
                                   Status: Not delivered
                                </div>
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
         (userFetched===true?
         <center style={{marginTop:'40vh'}} className={styles.externalAccess}>
          <div>Your are not logged in.<br/>Please login to continue</div>
          <button onClick={()=>loginWithPopup()} className={styles.loginButton}>Log in</button>
         </center>
         :
         <center className={styles.externalAccess}>
          <div>Please wait...</div>
         </center>
         )
        
    )



}

export default MyOrders