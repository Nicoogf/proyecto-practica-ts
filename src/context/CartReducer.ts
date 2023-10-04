export const estadoInicial = {
    cartItems : [] ,
}

/**
 * 
 *  La accion tiene la siguiente estrucura
 * action :  {
 *       type: "ADD_TO_CART"            ========== siempre va a ser un string
 *       payload : producto
 * }
 * 
 *     
 */

export const cartReducer = ( estado , accion ) =>{
 switch( accion.type ){
     case "AGREGAR_AL_CARRITO" : {
        const { id } = accion.payload ;
        //validacion

        const existeProducto = estado.cartItems.find((item)=> item.id === id )

        if(existeProducto){
            return{
                ...estado ,
                cartItems: estado.cartItem.map((item)=> item.id === id ? {...existeProducto, quantity : existeProducto.quantity +1 } : item)
            }
        }else{
            return{
                ...estado,
                cartItems: [...estado.cartItem , accion.payload]
            }
        }
     }
     case "BORRAR_DEL_CARRITO" : {
      const { id : productoBorradoID } = accion.payload

      //validacion
      const itemABorrar = estado.cartItems.find((item)=> item.id === productoBorradoID)

      if(itemABorrar.quantity === 1){
        return{
            ...estado ,
            cartItems: estado.cartItem.filter((item)=> item.id !== productoBorradoID)
        }
      }else{
        return{
            ...estado,
            cartItems : estado.cartItem.map((item)=> item.id === productoBorradoID ? {...itemABorrar , quantity : itemABorrar.quantity - 1} : item)
        }
      }
     } default: 
     return estado
   } 
}