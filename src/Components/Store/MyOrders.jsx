import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import { useEffect, useState } from "react"


const MyOrders = ()=>{

    const [orders, setOrders] = useState([]);
    const {isAuthenticated, user} = useAuth0();
    const {sizes, setSizes} = useState([]);

    const loadOrders = async() =>{
     try{
        const res = axios.get(`https://gyf-backend.vercel.app/orders/:${user.email}`)
        setOrders(res);

        orders.map((order)=>{
            if(order.items.sizes){
                setSizes(order.items.sizes);
            }
        })
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

    return(
        isAuthenticated && 
        <div>
            <div>
            </div>
            {
               orders.length===0?
               <div>No orders have been yet</div>
               :
               orders.map((order)=>(
                  <div key={order._id}>
                     <div>Order id: {order._id}</div>
                     <div>
                        {
                            order.items.map((item)=>(
                               item.sizes?
                               sizes.map((size)=>(
                                <div key={size._id}> 
                                  <div>{item.title} {size.type} </div> <p>×</p> <div>{size.quantity}</div>
                                </div>
                               ))
                               :
                               <div key={item._id}> 
                                  <div>{item.title}</div> <p>×</p> <div>{item.quantity}</div>
                               </div>
                            ))
                        }
                        <div>
                            <div>
                              <span style={{fontFamily:'sans-serif'}}>₹</span>{order.amount}
                            </div>
                            {
                                order.delivered===true?
                                <div>
                                    delivered
                                </div>
                                :
                                <div>
                                    not delivered
                                </div>
                            }
                        </div>
                     </div>
                  </div>
               )) 
            }
        </div>
    )



}

export default MyOrders