import useCartContext from '../../../hooks/useCartContext'
// import { CartAction } from '../../../context/cartReducer'
import { CarProduct } from '../../../interfaces/products'
import { toast } from 'sonner'
import styles  from './Table.module.css'

export const Table = () => {

    const {state:{cartItems},dispatch } = useCartContext()

    const removeCart = (item:CarProduct) =>{
        dispatch({type:"REMOVE_FROM_CART", payload:item})
        toast.warning("Objeto eliminado")
    }

    const addToCart = (item:CarProduct,cantidad:number)=>{
        dispatch({
            type:"ADD_TO_CART" ,payload:item
        })
        toast.warning("Objeto agregado "+ cantidad)
    }


    const totalPay = () =>{
        const total = cartItems.reduce((acc,item)=>{
            return acc + item.price * item.quantity
        },0)
        return total
    }
  return (
    <>
    <table className={styles.modalTable}>
            <thead>
                <tr>
                    <th>Product</th>
                    <th>Delete</th>
                    <th>Quantity</th>
                    <th>Add</th>
                </tr>
            </thead>
            <tbody>
               {cartItems.map((item) =>(
                 <tr key={item.id}>
                 <td>
                    <p>
                        {item.name}
                    </p>
                 </td>
                 <td>
                     <button className={styles.modalButtonRemove} onClick={()=> removeCart(item)}>-1</button>
                 </td>
                 <td>
                     <p>{item.quantity}</p>
                 </td>
                 <td><button className={styles.modalButtonAdd} onClick={()=> addToCart(item, item.quantity)}>+1</button></td>
             </tr>
               ))}
            </tbody>
        </table>
        <div className={styles.modalTotalContainer}>
            <h3>Total ${totalPay()}</h3>
        </div>
    </>
  )
}