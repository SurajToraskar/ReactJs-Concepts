import React, { useState } from 'react';

const App = () => {
    const [details, updateDetails] = useState({
        firstname: "",
        lastname: "",
        email: "",
        phonenumber: ""
    })

    const formSubmit = (event) => {
        event.preventDefault();
        alert("Confirmed");

    }

    const updateFields = (event) => {
        console.log(event.target.value);
        console.log(event.target.name);
        updateDetails((prevData) => {
            if (event.target.name === "firstname") {
                return (
                    {
                        firstname: event.target.value,
                        lastname: prevData.lastname,
                        email: prevData.email,
                        phonenumber: prevData.phonenumber
                    }
                )
            } else if (event.target.name === "lastname") {
                return (
                    {
                        firstname: prevData.firstname,
                        lastname: event.target.value,
                        email: prevData.email,
                        phonenumber: prevData.phonenumber
                    }
                )
            } else if (event.target.name === "email") {
                return (
                    {
                        firstname: prevData.firstname,
                        lastname: prevData.lastname,
                        email: event.target.value,
                        phonenumber: prevData.phonenumber
                    }
                )
            } else {
                return (
                    {
                        firstname:prevData.firstname,
                        lastname:prevData.lastname,
                        email:prevData.email,
                        phonenumber:event.target.value

                    }
                )
            }
        })

    }


    return (
        <>
            <div>
                <form onSubmit={formSubmit}>
                    <div>
                        <h1>Hello {details.firstname} {details.lastname}</h1>
                        <h5>{details.email}</h5>
                        <h5>{details.phonenumber}</h5>
                        <input type="text" placeholder='Enter Your FirstName' name="firstname" onChange={updateFields} />
                        <input type="text" placeholder='Enter Your LastName' name="lastname" onChange={updateFields} />
                        <input type="text" placeholder='Enter Your Email' name="email" onChange={updateFields} />
                        <input type="text" placeholder='Enter Your PhoneNumber' name="phonenumber" onChange={updateFields} />
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default App;