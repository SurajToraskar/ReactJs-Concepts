import React,{useState} from 'react';


const App=()=>{
    const [time,setTime]=useState(new Date().toLocaleTimeString());
    const UpdateTime=()=>{
        setTime(new Date().toLocaleTimeString());
    }

    setInterval(UpdateTime,1000);

    return(
        <>
        <h1>{time}</h1>
        </>
    )
}

export default App;