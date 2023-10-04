
const CartProduct = ( {trago} ) => {
  return (
    <div className="w-[250px] border-dotted border-2 drop-shadow-md cursor-pointer">
        <img src={ trago.strDrinkThumb }/>
        <div className="flex flex-col items-center">
            <h3 className="text-2xl text-sky-900 text-center"> { trago.strDrink } </h3>
            <div>
                <p className="text-lg text-sky-600 text-center"> { trago.strCategory }</p>
                <p className="text-black  text-center"> $ { trago.idDrink } <small>,00</small></p>
            </div>
            <button className="bg-sky-500 text-white p-2 cursor-pointer w-[80%]">Agregar al carrito</button>
        </div>
    </div>
  ) ;
} ;

export default CartProduct ;