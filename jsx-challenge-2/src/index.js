import React from 'react';
import ReactDOM from 'react-dom';

const firstName="king";
const lastName="Destroyer";
const date=new Date();

ReactDOM.render(
  <>
  <h1>{`My firstName is ${firstName} and lastName is ${lastName}`}</h1>
  <p>{`current date is ${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`}</p>
  <p>{`current time is ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()} ${date.getHours()>12?"Pm":"Am"}`}</p>
  <p>{date.toLocaleDateString()}</p>
  <p>{date.toLocaleTimeString()}</p>
  </>,
  document.getElementById("root")
)