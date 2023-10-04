import { Outlet } from "react-router-dom";
import Nabvar from "../Ui/Nabvar/Nabvar";


const LayoutsMain = () => {
  return (
    <>
         <Nabvar />            
         <Outlet />
    </>
  )
}

export default LayoutsMain ; 