import React, { useState } from 'react';

const App = () => {
    const [time, getTime] = useState(new Date().toLocaleTimeString());

    const GetTime=()=>{
        getTime(new Date().toLocaleTimeString());
    }
   return (
    <>
        <h1>{time}</h1>
        <button onClick={GetTime}>GET TIME</button>
    </>
   )

}

export default App;