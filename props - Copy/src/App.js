import React from 'react';
import Netflix from './Netflix';
import Amazon from './Amazon';

    const favourite = "netflix";
// const Favplatform = () => {
//     if (favourite === "netflix") {
//         return <Netflix />;
//     } else {
//         return <Amazon />
//     }

// }



const App = () => {
    return (
        <>
            <p className="heading_style">Top 3 Netflix Series</p>
            {/* <Favplatform /> */}
            {(favourite==="netflix")?<Netflix/>:<Amazon/>}

        </>
    )
}

export default App;