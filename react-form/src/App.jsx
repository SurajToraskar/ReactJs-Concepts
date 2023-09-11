import React, { useState } from 'react';

const App=()=>{
    const [name,setName]=useState("");
    const [fullName,SetFullName]=useState("")

    const Update=(event)=>{
        console.log(event.target.value);
        setName(event.target.value);
    }

    const onSubmit=()=>{
        SetFullName(name);
    }


    return(
        <>
        <div>
            <h1>Hello {fullName}</h1>
            <input type="text" placeholder="Enter Your Name" onChange={Update} />
            <button onClick={onSubmit}> Submit 👍 </button>
        </div>
        </>
    );
}

export default App;