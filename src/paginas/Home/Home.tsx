import { useEffect, useState } from "react";
import Hero from "../../Componentes/Ui/Hero/Hero";

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
    </div>
  )
}

export default Home ;