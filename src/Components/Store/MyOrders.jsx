import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import { useEffect, useState } from "react"
import styles from './MyOrders.module.css'


const MyOrders = ()=>{

    const [orders, setOrders] = useState([]);
    const {isAuthenticated, user, loginWithPopup} = useAuth0();
    let [userFetched, setUserFetched] = useState(false);
    let [orderFetched, setOrderFetched] = useState(false);
    let [paymentId, setPaymentId] = useState(undefined);
   
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


    const changePaymentId = (event) =>{
      setPaymentId(event.target.value);
    }

    const openInputBox = (orderId) =>{
      const updatedOrders = orders.map((order)=> order._id==orderId? {...order, openInputBox:true} : order);
      setOrders(updatedOrders);
    }

    const changePaymentStatus= async(orderId ,status) =>{
      try{
         await axios.patch(`https://gyf-backend.vercel.app/orders/${orderId}`, {paymentId: paymentId ,paymentStatus:status});
         loadOrders();
       }
       catch(err){
         console.log('error in updating status' , err);
         alert('Error in updating status');
       }

    }

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
                        <div style={{width:'40%', textAlign:'left'}}>Payment Id:</div> <div style={{width:'60%', textAlign:'right'}}>
                           {
                              order.paymentStatus==='Paid'?
                              order.paymentId 
                              :
                              (order.paymentStatus==='Under verification'?
                                 (order.openInputBox===true?
                                 <div style={{width:'100%'}} className={styles.inputForm}>
                                    <input className={styles.inputBox} onChange={(event)=>{changePaymentId(event)}} type="number" defaultValue={order.paymentId}/>
                                    <button onClick={()=>changePaymentStatus(order._id, 'Under verification')} className={styles.submitButton}>Submit</button>
                                 </div>
                                 :
                                 <div>{order.paymentId} <span onClick={()=>openInputBox(order._id)} className={styles.editButton}>Edit</span></div>) 
                              :
                              (
                                 order.paymentStatus=='Due'?
                                 (
                                    order.openInputBox===true?
                                    <div style={{width:'100%'}} className={styles.inputForm}>
                                       <input className={styles.inputBox} onChange={(event)=>{changePaymentId(event)}} type="number" />
                                       <button onClick={()=>changePaymentStatus(order._id, 'Under verification')} className={styles.submitButton}>Submit</button>
                                    </div>
                                    :
                                    <button onClick={()=>openInputBox(order._id)} className={styles.inputButton}>Enter Id</button>
                                 )
                                 :
                                 order.paymentStatus=='Not found' &&
                                 (
                                    order.openInputBox===true?
                                    <div style={{width:'100%'}} className={styles.inputForm}>
                                       <input className={styles.inputBox} onChange={(event)=>{changePaymentId(event)}} type="number" />
                                       <button onClick={()=>changePaymentStatus(order._id ,'Under verification')} className={styles.submitButton}>Submit</button>
                                    </div>
                                    :
                                    <button onClick={()=>openInputBox(order._id)} className={styles.inputButton}>Re-enter Id</button>
                                 )
                              ))
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