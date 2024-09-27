import { FC } from "react";
import styles from "./CardProduct.module.css"
import { CarProduct, Product } from "../../../interfaces/products";
import useCartContext from "../../../hooks/useCartContext";
import { toast } from 'sonner'

interface Props{
    product:Product
}



export const CardProduct:FC<Props> = ({product}) => {
    const {dispatch} = useCartContext()



    const item:CarProduct= {
        id:product.id,
        name:product.name,
        image: product.image,
        quantity:1,
        price:product.price
    }

    const addToCart = (item:CarProduct) =>{
        dispatch({type:"ADD_TO_CART", payload:item})
        toast.success("Product added to cart")
    }
    return (
        <div className={styles.cardContainer}>
            <img className={styles.cardImage} src={product.image} alt={product.name}/>
            <div className={styles.cardDetail}>
                <h3 className={styles.cardTitle}>{product.name}</h3>
                <div className={styles.cardBody}>
                    <p className={styles.cardType}>{product.type}</p>
                    <p className={styles.cardPrice}>
                        price, <small>00</small>
                    </p>
                </div>
                <button className={styles.cardButton} onClick={()=> addToCart(item)}>Add to cart</button>
            </div>
        </div>
    );
};