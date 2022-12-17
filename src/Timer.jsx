import { useState } from "react"


    const Timer = () => {
        const [days, setDays] = useState(10);
        const [hours, setHours] = useState(0);
        const [minutes, setMinutes] = useState(0);
        const [seconds, setSeconds] = useState(0);
      
        return (
          <div className="text-center mt-10 font-bold">
            <h1>Days to Left - {days}</h1>
            <button className=" mt-5 p-1 rounded font-bold bg-blue-100  text-base" onClick={() => setDays(days - 1)}>  Few Days Left </button>
            {/* <button OnClick={() => setDays(days -1)}> Few Days Left</button>   */}
          </div>
        );
}
export default Timer