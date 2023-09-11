import React,{useState} from 'react';

const App=()=>{
    const [name,setName]=useState({
        firstname:"",
        lastname:""
    })

    const invokeFunc=(event)=>{
        console.log(event.target.value);
        console.log(event.target.name);
        setName((prevstate)=>{
            console.log(prevstate);
            if(event.target.name==="firstname"){
                return (
                    {
                        firstname:event.target.value,
                        lastname:prevstate.lastname
                    }
                )
            }else if(event.target.name==="lastname"){
                return(
                    {
                        firstname:prevstate.firstname,
                        lastname:event.target.value
                    }
                )
            }
        })
    }

    const submitFunc=(event)=>{
        event.preventDefault();
    }



    return(
        <>
        <div>
            <form onSubmit={submitFunc}>
                <div>
                    <h1>Hello {name.firstname} {name.lastname}</h1>
                    <input type="text" placeholder="Enter your FirstName" onChange={invokeFunc}  name="firstname" />
                    <input type="text" placeholder="Enter your LastName" onChange={invokeFunc}  name="lastname"/>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
        </>
    )
}

export default App;