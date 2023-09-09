import React from 'react';
import Card from './Card';
import Sdata from './Sdata';
const App = () => {
    return (
        <>
            <p className="heading_style">Top 3 Netflix Series</p>
            {Sdata.map(val => {
                return (
                    <Card
                        key={val.id}
                        className="randomString"//treat as properties(props)   
                        imgsrc={val.imgsrc}
                        sname={val.sname}
                        link={val.link}
                        title={val.title}
                    />

                )
            })}
        </>
    )
}

export default App;