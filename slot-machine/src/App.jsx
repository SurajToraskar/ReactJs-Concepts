import React from "react";




const SlotM = (props) => {
    let y = props.x;
    let z = props.y;
    let x = props.z;


    if (x === y && y === z) {
        return (
            <>
                <div className="slot_inner">
                    <h1> {x} {y} {z}</h1>
                    <h1>This is matching</h1>
                    <hr />
                </div>
            </>
        )
    } else {
        return (
            <>
                <div className="slot_inner">
                    <h1> {x} {y} {z}</h1>
                    <h1>This is not  matching</h1>
                    <hr />
                </div>
            </>
        )
    }
}

function App() {
    return (
        <>
            <h1 className="heading_style">Slot machine game</h1>
            <div className="slotMachine">
                <SlotM
                    x="😇"
                    y="😇"
                    z="😇"
                />
                <SlotM 
                    x="😇"
                    y="🚡" 
                    z="😇" />
                <SlotM
                    x="😇"
                    y="😇"
                    z="😇" 
                />
            </div>
        </>
    )
}

export default App;