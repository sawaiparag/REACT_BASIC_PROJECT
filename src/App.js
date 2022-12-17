import Navbar from "./Navbar.jsx"
import Cardfunction from "./Card.jsx"
import Counter from "./Counter.jsx"
import Timer from "./Timer.jsx"
import axios from "axios"
import Cards from "./Cards.jsx"
import { useEffect, useState } from "react"
function App (){
    const [details , setDetails] =useState({})
    const fetchDetails = async () => {
       const { data } = await axios.get("https://randomuser.me/api/")
       //console.log(data)
       const details = data.results[0]
       setDetails(details)
    }
    useEffect(() => {
          fetchDetails()
    }, [])

    return(
        <>
        <h1 className="font-bold text-center mt-10"> This is 1st React Website Developed BY PARAG </h1>
        <p className="font-bold text-center mt-2"> Basic Functions</p>
        <Navbar name="Parag" head="Welcome to JS" />
        <Navbar name="Sawai" head="Welcome to React" /> 
        <div className="flex ">
        < Cardfunction link="https://images.pexels.com/photos/611328/pexels-photo-611328.jpeg?auto=compress&cs=tinysrgb&w=600" head="Sheep"/>
        <Cardfunction link="https://images.pexels.com/photos/21787/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600" head="Sea"/>
        <Cardfunction link="https://images.pexels.com/photos/176382/pexels-photo-176382.jpeg?auto=compress&cs=tinysrgb&w=600" head="WaterFall"/>
        </div>
        <Counter />
        <div className="flex mt-10 ">
        < Cardfunction link="https://images.pexels.com/photos/5755160/pexels-photo-5755160.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" details={details}/>
        <Cardfunction link="https://images.pexels.com/photos/887751/pexels-photo-887751.jpeg?auto=compress&cs=tinysrgb&w=600" head="WhitePhone"/>
        <Cardfunction link="https://images.pexels.com/photos/369376/pexels-photo-369376.jpeg?auto=compress&cs=tinysrgb&w=600" head="IPhone"/>
        </div>
        <Timer />
        <div className="flex">
        <Cards details={details}/>
        <Cards details={details}/>
        <Cards details={details}/>
        </div>
        </>
    )
}

export default App