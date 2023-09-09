import React from 'react';
import Card from './Card';
import Sdata from './Sdata';


function Amazon(){
    return (<Card
                        key={Sdata[2].id}
                        className="randomString"//treat as properties(props)   
                        imgsrc={Sdata[2].imgsrc}
                        sname={Sdata[2].sname}
                        link={Sdata[2].link}
                        title={Sdata[2].title}
                    /> 
    )
}

export default Amazon;
