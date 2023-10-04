import { Outlet } from "react-router-dom";
import Nabvar from "../Ui/Nabvar/Nabvar";
import Home from "../../paginas/Home/Home";

const LayoutsMain = () => {
  return (
    <>
         <Nabvar />
         <Home />        
         <Outlet />
    </>
  )
}

export default LayoutsMain ; 