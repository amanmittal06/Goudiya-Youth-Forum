import { useEffect, useState } from 'react'
import styles from './ProductCard.module.css'
import { FaCartShopping } from "react-icons/fa6";
import axios from 'axios'
import { useAuth0 } from '@auth0/auth0-react';




const ProductCard = () => {

    let [products, setProducts] = useState([]);
    let [cart, setCart] = useState([]); 
    let [totalItems, setTotalItems] = useState(0);
    let [displayOrderSummary, setDisplayOrderSummary] = useState(false);
    let [totalBill, setTotalBill] = useState(undefined)
    let [selectedSizes, setSelectedSizes] = useState({});
    let [selectedSize, setSelectedSize] = useState('null');
    const {user, isAuthenticated} = useAuth0();
    
  

    const loadProducts = async () =>{
      try{
        const res =  await axios.get('https://gyf-backend.vercel.app/products/');
        setProducts(res.data);
      }
      catch(err){
        console.log(err);
      }
    }

    function changeQuantity(ch, id, sizes){
        
        if(sizes){
          if(selectedSize==='null'){ 
            alert('Please select the size');
          }
          else{
            const updatedSelectedSizes = {...selectedSizes};
            if(ch==='+')
            {
              const updatedProducts = products.map(product=>
                product._id===id ? {...product, quantity: product.quantity+1} : product
              );
              setProducts(updatedProducts);
              updatedSelectedSizes[selectedSize] = (updatedSelectedSizes[selectedSize] || 0) + 1;
              setSelectedSizes(updatedSelectedSizes);
              setTotalItems(totalItems+1)
            }
            else if(ch==='-'){
              if (updatedSelectedSizes[selectedSize]) {
                const updatedProducts = products.map(product=>
                  product._id===id ? {...product, quantity: product.quantity-1} : product
                )
                setProducts(updatedProducts);

                updatedSelectedSizes[selectedSize] = updatedSelectedSizes[selectedSize] - 1;
                if (updatedSelectedSizes[selectedSize] === 0) {
                  delete updatedSelectedSizes[selectedSize];
                }
                setSelectedSizes(updatedSelectedSizes);
                setTotalItems(totalItems - 1);
               } 
               else {
                alert(`The size "${selectedSize}" is not in your cart.`);
               }
            }
            console.log(updatedSelectedSizes);
            
          }
        }
        else{
          const updatedProducts = products.map(product=>
            product._id===id ? {...product, quantity: ch==='+'?product.quantity+1: product.quantity-1} : product
          );
          setProducts(updatedProducts);
          ch==='+'? setTotalItems(totalItems+1):setTotalItems(totalItems-1);
        } 
    }

    
    
    useEffect(()=>{
      loadProducts();
    }, [])

    const handleShowCart = () =>{
      if(displayOrderSummary===false){
        createCart();
        setSelectedSize('null');
      }
      setDisplayOrderSummary(!displayOrderSummary)
      scrollTo({
        top:0,
      })
     }

    const createCart = () =>{
      let bill = 0;
      const cartItems = products.filter((product) => {
        if(product.quantity>0){
          bill = bill + (product.price*product.quantity);
        }

        return product.quantity > 0;
      });
      setCart(cartItems);
      setTotalBill(bill);
    }
    
  
    let currOrder;
    const createOrder = async()=>{
      const sizes = Object.entries(selectedSizes).map(([type, quantity])=>({type:type, quantity:quantity}))
      const item = cart.map((Item)=> (Item.sizes?{title:Item.title, quantity:Item.quantity, sizes:sizes}: {title:Item.title, quantity:Item.quantity}));
      currOrder = {...currOrder, items:item};
    }

    const handleProceedToPay = async (amount) =>{
      
      if(isAuthenticated){
        // currOrder = {...currOrder, amount:amount, name:user.email}
        // try{
        //   const res = await axios.post('https://gyf-backend.vercel.app/orders/', currOrder);
        //   console.log(res.data);
        //   alert('Order placed successfully!')
        //   window.location.reload(false);
        // }
        // catch(err){
        //   console.log(err);
        //   alert('Something went wrong');
        // }
      currOrder = {...currOrder, amount:amount, name:user.email}
      try{
        const res = await axios.post('https://gyf-backend.vercel.app/payments/checkout/', currOrder);
        const {data} = res;
        const {order} = data;
        console.log(data);
        const options = {
          key:"rzp_test_pZa22hfxIMxFrp",
          amount: order.amount,
          currency: "INR",
          name: "Goudiya Youth Forum",
          description: "Test Transaction",
          image: "https://www.gyf.org.in/assets/gyfLogoPNG-Dkccnkw2.png",
          order_id: order.id,
          callback_url: "https://gyf-backend.vercel.app/payments/paymentverification",
          notes: {
              "address": "Razorpay Corporate Office"
          },
          theme: {
              "color": "#6950a3"
          }
        };
        const razor = new window.Razorpay(options);
        razor.open();
        window.location.reload(true);

      }
      catch(err){
        console.log(err);
      }
      }
      else{
        alert('You are not logged in');
      }

      
    } 

     return(
       <> 
       {
        displayOrderSummary===false
        ?
        <div>
          { products.map((product)=>(
           <div key={product._id} className={styles.cardContainer}>
          <img className={styles.image} src= {product.image} alt="Loading" width={'100%'}/>
           <div className={styles.titleAndStock}>
             <div style={{ fontSize:'150%', textTransform:'capitalize' ,fontWeight:'400' ,color:'black', fontFamily:'poppins', textAlign:'left'}}>{product.title}
              {
              product.sizes && (product.stock==0 || product.stock==product.quantity? <span style={{color:'red', alignSelf:'flex-start', marginTop:'-2px', fontSize:'small'}}> Out of stock</span>:<span style={{color:'green', alignSelf:'flex-start', margin:'-10px 0px 5px 5px', fontSize:'60%'}}> In stock</span>)
              }
             </div>
             {
              product.sizes?
              <div style={{color:'black', textAlign:'right', fontSize:'larger'}}><span style={{fontFamily:'sans-serif'}}>₹</span>{product.price}</div>
              :
              product.stock==0 || product.stock==product.quantity? <div style={{color:'red', textAlign:'right'}}>Out of stock</div>:<div style={{color:'green', textAlign:'right'}}>In stock</div>
             }
             
           </div>
           
           <div className={styles.priceAndAddtoCart}>
             {product.sizes?
             <select className={styles.priceButton} defaultValue='null' name="" id="" onChange={(event)=>{setSelectedSize(event.target.value)}}>
              <option value="null" disabled>Select size</option>
              {product.sizes.map((size)=>( <option key={size} value={size}>{size}</option> ))}
             </select>
             :
             <div className={styles.priceButton}><span style={{fontFamily:'sans-serif'}}>₹</span> {product.price}</div>
             }
             <div className={styles.addToCartButton}>
             {
             product.quantity===0?
             <div  onClick={()=>{product.stock===0?alert('Product is out of stock!'):changeQuantity('+', product._id, product.sizes)}}>Add to cart</div>
             :
             <div className={styles.quantity}>
               <button disabled={product.quantity==0?true:false} className={styles.quantityButton} onClick={()=>{changeQuantity('-', product._id, product.sizes)}}>-</button>
               <div>{product.quantity}</div>
               <button disabled={product.quantity==product.stock?true:false} className={styles.quantityButton} onClick={()=>{changeQuantity('+', product._id, product.sizes)}}>+</button>
             </div>
             }
             </div>
           </div>
          </div>))
          }
         
          <div className={totalItems>0?styles.cart:styles.noCart}>
            <div style={{fontWeight:'500'}}> {totalItems>1? `${totalItems} items`: '1 item' } added</div>
            <button className={styles.goToCart}><div onClick={()=>{handleShowCart()}}>Check out</div>&nbsp;<FaCartShopping/></button>
          </div>
  
        </div>
       :
       <div className={displayOrderSummary===true? styles.showOrderSummary: styles.noOrderSummary }>
           <div style={{margin: '15px',paddingTop:'10px', fontSize:'150%', fontWeight:'200', borderBottom:' 1px solid #6950a3'}}>Cart Summary</div>
           <div className={styles.orderSummary}>
           {cart.map((cartItem)=> 
          (
          cartItem.sizes? 
           Object.entries(selectedSizes).map(([size, quantity])=>(
          <div key={size} className={styles.cartItem}> <p style={{width:'70%', textAlign:'left'}}>{cartItem.title} {size} × {quantity}</p>  <p style={{textAlign:'right', width:'10%'}}><span style={{fontFamily:'sans-serif'}}>₹</span>{quantity*cartItem.price}</p></div>
           ))
           :
           <div key={cartItem._id} className={styles.cartItem}> <p style={{width:'70%', textAlign:'left'}}>{cartItem.title} × {cartItem.quantity}</p>  <p style={{textAlign:'right', width:'10%'}}><span style={{fontFamily:'sans-serif'}}>₹</span>{cartItem.quantity*cartItem.price}</p></div>
          )
           )}
           <div className={styles.cartItem} style={{borderTop:'1px solid #6950a3', color:'#6950a3'}}><p style={{fontSize:'110%' }}>Total amount :</p> <p style={{fontSize:'110%' }}><span style={{fontFamily:'sans-serif'}}>₹</span>{totalBill}</p></div>
           </div>
           
           <div className={styles.bottomButtons}><button className={styles.backButton} onClick={()=>{handleShowCart()}}>Back</button><button className={styles.proceedButton} onClick={()=>{createOrder(); handleProceedToPay(totalBill);}}>Place order</button></div>
       </div>
       }
       </>
    )

}

export default ProductCard