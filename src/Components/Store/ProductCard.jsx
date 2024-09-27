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
    let [selectedSizes, setSelectedSizes] = useState({});
    let [selectedSize, setSelectedSize] = useState('null');
  

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
             {product.sizes?
             <select className={styles.priceButton} defaultValue='null' name="" id="" onClick={(event)=>{setSelectedSize(event.target.value)}}>
              <option value="null" disabled>Select size</option>
              {product.sizes.map((size)=>( <option key={size} value={size}>{size}</option> ))}
             </select>
             :
             <div className={styles.priceButton}>₹ {product.price}</div>
             }
             <div className={styles.addToCartButton}>
             {
             product.quantity===0?
             <div  onClick={()=>{changeQuantity('+', product._id, product.sizes)}}>Add to cart</div>
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
          <div key={size} className={styles.cartItem}> <p style={{width:'70%', textAlign:'left'}}>{cartItem.title} {size} × {quantity}</p>  <p style={{textAlign:'right', width:'10%'}}>₹{quantity*cartItem.price}</p></div>
           ))
           :
           <div key={cartItem._id} className={styles.cartItem}> <p style={{width:'70%', textAlign:'left'}}>{cartItem.title} × {cartItem.quantity}</p>  <p style={{textAlign:'right', width:'10%'}}>₹{cartItem.quantity*cartItem.price}</p></div>
          )
           )}
           <div className={styles.cartItem} style={{borderTop:'1px solid #6950a3', color:'#6950a3'}}><p style={{fontSize:'110%' }}>Total amount :</p> <p style={{fontSize:'110%' }}>₹{totalBill}</p></div>
           </div>
           
           <div className={styles.bottomButtons}><button className={styles.backButton} onClick={()=>{handleShowCart()}}>Back</button><button className={styles.proceedButton}>Proceed to pay</button></div>
       </div>
       }
       </>
    )

}

export default ProductCard