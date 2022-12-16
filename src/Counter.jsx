import { useState } from "react"


const Counter = () => {
    const [batman, batmancount] = useState(100)
    //const [superman, supermancount] = useState(Hey EverOne)
    return (
        <>
        <div> Rating Star - {batman} </div>
        <button onClick={() => batmancount(100)}> RESET  </button>   
        <button onClick={() => batmancount(batman + 5)}> + Star  </button>
        <button onClick={() => batmancount(batman - 5)}> - Star  </button>

        {/* <div> Greetings - {superman} </div>
        <button onClick={() => supermancount(HIII..........  CLICKER ........  )}> hii </button>
        <button onClick={() => supermancount(HELLO .......... WARN CLICKER ........  )}> hello </button>
        <button onClick={() => supermancount(HELLO ..........  CLICKER ........  )}> awesome </button> */}
        </>



    )
} 

export default Counter