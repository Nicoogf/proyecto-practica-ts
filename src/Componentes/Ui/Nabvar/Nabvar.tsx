import Logo from "../../../assets/png.png" ;
import Carrito from "../../../assets/carrito.png" ;


const Nabvar = () => {
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
            <img src={Carrito} alt='Carrito'  className="w-[55px] cursor-pointer"/>
        </div>
    </div>
  ) ;
} ;

export default Nabvar ;