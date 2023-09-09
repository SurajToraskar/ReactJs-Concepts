import React from 'react';
import Card from './Card';
import Sdata from './Sdata';

function Netflix() {
    return (<Card
        key={Sdata[1].id}
        className="randomString"//treat as properties(props)   
        imgsrc={Sdata[1].imgsrc}
        sname={Sdata[1].sname}
        link={Sdata[1].link}
        title={Sdata[1].title}
    />)
}

export default Netflix;