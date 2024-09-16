import { useEffect, useState } from 'react'
import styles from './ProductCard.module.css'
import { FaCartShopping } from "react-icons/fa6";
import axios from 'axios'

const ProductCard = () => {

    let [products, setProducts] = useState([]);
    let [totalItems, setTotalItems] = useState(0);

    const loadProducts = async () =>{
      try{
        const res =  await axios.get('/products/');
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

    return(
       <> 
       { products.map((product)=>(
        <div key={product._id} className={styles.cardContainer}>
        <img src= {product.image} alt="" width={'100%'}/>
        <div className={styles.titleAndStock}>
          <div style={{width:'40%', fontSize:'120%', color:'black', fontFamily:'serif'}}>{product.title}</div>
          {
            product.stock==0 || product.stock==product.quantity? <div style={{color:'red', width:'40%'}}>Out of stock</div>:<div style={{color:'green', width:'40%'}}>In stock</div>
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
         <button className={styles.goToCart}><div>Go to cart</div>&nbsp;<FaCartShopping/></button>
       </div>
       </>
    )

}

export default ProductCard