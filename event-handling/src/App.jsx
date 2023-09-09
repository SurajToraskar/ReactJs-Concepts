import React, { useState } from 'react';


const App = () => {
    let purple = "purple";
    const [currentColor, updateColor] = useState(purple);
    const [currentWord, updateWord] = useState("Click Me");

    const newBg = () => {
        updateColor("red")
        updateWord("Hi Programmer");
    }

    const oldBg = () => {
        updateColor(purple);
        updateWord("I mean ReactJs Developer,to be specific");
    }

    return (
        <>
            <div style={{ backgroundColor: currentColor }}>
                <button onClick={newBg} onDoubleClick={oldBg}>{currentWord}</button>
            </div>
        </>
    );


}

export default App;

