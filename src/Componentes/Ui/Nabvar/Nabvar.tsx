import Logo from "../../../assets/png.png" ;
import Carrito from "../../../assets/carrito.png" ;
import { useState } from "react";
import { CartModal } from "../CartModal";


const Nabvar = () => {

  const [ showModal , setShowModal ] = useState(false)

  const handleShowModal = () =>[
    setShowModal(!showModal)
  ]


  return (
    <div className="w-100 bg-gray-800 text-white flex flex-row justify-around py-1">
        <div className="flex flex-row items-center gap-2">
            <img src={Logo} alt='Logo' className="w-[70px]"/>
            <div>
                <span>Commerce-Test</span>
            </div>
        </div>

        <div className="relative flex items-center">
            <p className="absolute bg-red-700 p px-2 rounded-full -right-2 top-2">2</p>
            <img src={Carrito} alt='Carrito'  className="w-[55px] cursor-pointer" onClick={handleShowModal}/>
        </div>
        { showModal && (<CartModal handleShowCartModal={ handleShowModal }/>)}
    </div>
  ) ;
} ;

export default Nabvar ;