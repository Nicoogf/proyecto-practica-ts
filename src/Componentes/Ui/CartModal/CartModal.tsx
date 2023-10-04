
const CartModal = ( {handleShowCartModal} ) => {
  return (
    <div className="w-[400px] border-2 border-orange-400 absolute bg-black top-4 right-4 z-50">
       
        <button className="text-white bg-red-500 px-3 py-1 absolute right-0" onClick={handleShowCartModal}> X </button>

        <table className="w-full mt-10">
            <thead >
                <tr>
                    <th > Producto </th>
                    <th > Eliminar </th>
                    <th > Cantidad </th>
                    <th > Sumar </th>
                </tr>
            </thead>
            <tbody className="">
                <tr className="">
                    <td className="text-center">Name</td>
                    <td className="text-center"> <button className="bg-orange-500 px-3 py-1" > -1 </button> </td>
                    <td className="text-center"> 12 </td>
                    <td className="text-center"> <button className="bg-orange-500 px-3 py-1" > +1 </button> </td>                    
                </tr>
            </tbody>
        </table>

        <div className="h-[200px] flex items-center justify-center">
            <h3 className="text-2xl"> Total : $4800 , 00</h3>
        </div>

        <div className="flex items-center justify-center"> 
            <button className="mb-5 bg-orange-400 px-8 py-4"> Finalizar </button>
        </div>
    </div>
  ) ;
} ;

export default CartModal ;