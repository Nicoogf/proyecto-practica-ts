import { useEffect, useState } from "react";
import Hero from "../../Componentes/Ui/Hero/Hero";
import { CartProduct } from "../../Componentes/cartProduct";

const Home = () => {

  const [ tragos , setTragos ] = useState([]) ;

  const getTragos = async () =>{
    try {
      const respuesta = await fetch(" http://localhost:3000/Tragos ")
      const data = await respuesta.json()
      setTragos(data)
    } catch (error) {
       console.error(error)
    }
  }

  useEffect( ()=>{
    getTragos()
  } , [])

  console.log( tragos )

  return (
    <div>
       <Hero />
       <div className="flex flex-row items-center justify-center gap-3">
          { tragos.map( (trago )=>(
            <CartProduct key={trago.idDrink} trago={trago}/>
          ))}
       </div>
    </div>
  )
}

export default Home ;

