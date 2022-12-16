import Navbar from "./Navbar.jsx"
import Cardfunction from "./Card.jsx"
import Counter from "./Counter.jsx"
function App (){
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
        < Cardfunction link="https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=600" head="BlackPhone"/>
        <Cardfunction link="https://images.pexels.com/photos/887751/pexels-photo-887751.jpeg?auto=compress&cs=tinysrgb&w=600" head="WhitePhone"/>
        <Cardfunction link="https://images.pexels.com/photos/369376/pexels-photo-369376.jpeg?auto=compress&cs=tinysrgb&w=600" head="IPhone"/>
        </div>
        </>
    )
}

export default App