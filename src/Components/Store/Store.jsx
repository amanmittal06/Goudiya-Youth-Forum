import styles from './Store.module.css'
import ProductCard from "./ProductCard"
import TopBar from './TopBar'

const Store= () =>{
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