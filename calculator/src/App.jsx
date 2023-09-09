import React from 'react';
import add, { sub, div, mul } from './Calc';


function App() {
    return (
        <>
            <div>
                <li>The Sum of 2 number is {add(4, 5)}</li>
                <li>The Sub of 2 number is {sub(3, 4)}</li>
                <li>The Div of 2 number is {div(9, 6)}</li>
                <li>The Mul of 2 nunber is {mul(7, 6)}</li>

            </div>
        </>
    )
}

export default App;


