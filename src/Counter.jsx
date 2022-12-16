import { useState } from "react"


const Counter = () => {
    const [batman, batmancount] = useState(100)
    //const [superman, supermancount] = useState(Hey EverOne)
    return (
        <>
        <div className="text-center mt-10 p-5  font-bold text-sky-800 font-extrabold text-lg"> Rating Star - {batman} </div>
        <div className="text-center ">       
        <button className=" mr-10 p-2  rounded font-bold bg-blue-300  text-base " onClick={() => batmancount(100)}> RESET  </button>   
        <button className="  p-2  rounded font-bold bg-blue-300  text-base " onClick={() => batmancount(batman + 5)}> + Star  </button>
        <button className="ml-10  p-2  rounded font-bold bg-blue-300  text-base " onClick={() => batmancount(batman - 5)}> - Star  </button>
        </div>

        {/* <div> Greetings - {superman} </div>
        <button onClick={() => supermancount(HIII..........  CLICKER ........  )}> hii </button>
        <button onClick={() => supermancount(HELLO .......... WARN CLICKER ........  )}> hello </button>
        <button onClick={() => supermancount(HELLO ..........  CLICKER ........  )}> awesome </button> */}
        </>



    )
} 

export default Counter