import { useEffect, useState } from 'react'
import styles from './ProductCard.module.css'
import { FaCartShopping } from "react-icons/fa6";
import axios from 'axios'



const ProductCard = () => {

    let [products, setProducts] = useState([]);
    let [cart, setCart] = useState([]); 
    let [totalItems, setTotalItems] = useState(0);
    let [displayOrderSummary, setDisplayOrderSummary] = useState(false);
    let [totalBill, setTotalBill] = useState(undefined)

    const loadProducts = async () =>{
      try{
        const res =  await axios.get('https://gyf-backend.vercel.app/products/');
        setProducts(res.data);
      }
      catch(err){
        console.log(err);
      }
    }

    function changeQuantity(ch, id){
        const updatedProducts = products.map(product=>
          product._id===id ? {...product, quantity: ch==='+'?product.quantity+1: product.quantity-1} : product
        );

        setProducts(updatedProducts);

        ch==='+'? setTotalItems(totalItems+1):setTotalItems(totalItems-1);
    }
    
    useEffect(()=>{
      loadProducts();
    }, [])

    const handleShowCart = () =>{
      if(displayOrderSummary===false){
        createCart();
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

    return(
       <> 
       {
        displayOrderSummary===false
        ?
        <div>
          { products.map((product)=>(
           <div key={product._id} className={styles.cardContainer}>
          <img className={styles.image} src= {product.image} alt="" width={'100%'}/>
           <div className={styles.titleAndStock}>
             <div style={{ fontSize:'150%', textTransform:'capitalize' ,fontWeight:'400' ,color:'black', fontFamily:'poppins', textAlign:'left'}}>{product.title}</div>
             {
               product.stock==0 || product.stock==product.quantity? <div style={{color:'red', textAlign:'right'}}>Out of stock</div>:<div style={{color:'green', textAlign:'left'}}>In stock</div>
             }
           </div>
           
           <div className={styles.priceAndAddtoCart}>
             <div className={styles.priceButton}>₹ {product.price}</div>
             <div className={styles.addToCartButton}>
             {
             product.quantity===0?
             <div  onClick={()=>{changeQuantity('+', product._id)}}>Add to cart</div>
             :
             <div className={styles.quantity}>
               <button disabled={product.quantity==0?true:false} className={styles.quantityButton} onClick={()=>{changeQuantity('-', product._id)}}>-</button>
               <div>{product.quantity}</div>
               <button disabled={product.quantity==product.stock?true:false} className={styles.quantityButton} onClick={()=>{changeQuantity('+', product._id)}}>+</button>
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
           {cart.map((cartItem)=> <div key={cartItem._id} className={styles.cartItem}> <p style={{width:'70%', textAlign:'left'}}>{cartItem.title}</p> <p>×</p> <p style={{textAlign:'right', width:'10%'}}>{cartItem.quantity}</p></div> )}
           <div className={styles.cartItem} style={{borderTop:'1px solid #6950a3', color:'#6950a3'}}><p style={{fontSize:'110%' }}>Total amount :</p> <p style={{fontSize:'110%' }}>₹{totalBill}</p></div>
           </div>
           
           <div className={styles.bottomButtons}><button className={styles.backButton} onClick={()=>{handleShowCart()}}>Back</button><button className={styles.proceedButton}>Proceed to pay</button></div>
       </div>
       }
       </>
    )

}

export default ProductCard