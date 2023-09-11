import React, { useState } from 'react';

const App = () => {
    const [firstName, updatefirstname] = useState("");
    const [insertFirstName, setFirstName] = useState("");
    const [lastName, updatelastname] = useState("");
    const [insertlastname, setlastname] = useState("");

    const updateFirstName = (event) => {
        updatefirstname(event.target.value);
    }

    const updateLastName = (event) => {
        updatelastname(event.target.value);
    }

    const submitForm = (event) => {
        event.preventDefault();
        setFirstName(firstName);
        setlastname(lastName);
    }



    return (
        <>
            <div>
                <form onSubmit={submitForm}>
                    <div>
                        <h1>Hello  {insertFirstName} {insertlastname}</h1>
                        <input type="text" onChange={updateFirstName} />
                        <br />
                        <input type="text" onChange={updateLastName} />
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </>
    );
}

export default App;