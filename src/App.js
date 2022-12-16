import Navbar from "./Navbar.jsx"
import Cardfunction from "./Card.jsx"
import Counter from "./Counter.jsx"
function App (){
    return(
        <>
        <h1 className="h1"> This is 1st React Website Developed BY PARAG </h1>
        <p className="p"> Basic Functions</p>
        <Navbar name="Parag" />
        <Navbar name="Sawai" /> 
        <Cardfunction link="https://images.pexels.com/photos/14704971/pexels-photo-14704971.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"/>
        <Cardfunction link="https://images.pexels.com/photos/9374225/pexels-photo-9374225.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"/>
        <Counter />
        </>
    )
}

export default App