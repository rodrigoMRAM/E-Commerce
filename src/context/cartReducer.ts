import { CarProduct } from "../interfaces/products"

export interface CartState{
    cartItems: CarProduct[]
}
export const initialState ={
    cartItems : []
}


export const cartReducer=(state,action)=>{
    switch (action.type) {
        case "ADD_TO_CART":{
            const {id} = action.payload
            //Validar si el item ya existe en el carrito, true o false
            const existingItem = state.cartItems.find((item)=>item.id === id)
            if(existingItem){
                return{
                    ...state,
                    cartItems: state.cartItems.map((item)=> item.id === id ? {...existingItem,quantity:existingItem.quantity+1}: item)
                }
            }else{
                return{
                    ...state,
                    cartItems:[...state.cartItems, action.payload]
                }
            }
        }
        case "REMOVE_FROM_CART":{
            const {id:removeItemID} = action.payload;
            //Validar si el titem ya existe en el carrito
            const itemToRemove = state.cartItems.find((item)=>  item.id === removeItemID)
            if(itemToRemove.quantity ===1){
                return {
                    ...state,
                    cartItems: state.cartItems.filter((item)=> item.id !== removeItemID)
                }
            }
            else{
                return{
                    ...state,
                    cartItems:state.cartItems.map((item)=> item.id ===removeItemID?{...itemToRemove, quantity: itemToRemove.quantity-1} : item)
                }
            }
        }
        default:
            return state;
        
    }

}