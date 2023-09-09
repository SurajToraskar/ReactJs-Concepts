//ES5 module 
// const React=require("react");
// const ReactDOM=require("react-dom");
/**there is something called babel that convert js to browser understanble js
 * and web pack=webpack is a module bundler. Its main purpose is to bundle JavaScript files for usage in a browser
 *  which is imported automatically when react is imported
 */

import React from "react";
import ReactDOM from "react-dom";

//multiple ways of writing
// ReactDOM.render(<h1>ReactJs</h1>,document.getElementById("root"));

// ReactDOM.render(React.createElement('h1',null,'BabelJs'),document.getElementById("root"));

// let h1=document.createElement("h1");
// h1.innerHTML="VanillaJs";
// document.getElementById("root").appendChild(h1);

//------------------------------------------------------------------------------------------------
// render multiple Elements in react

// ReactDOM.render(<div>
//   <h1>Anime</h1>
//   <p>DragonBallz</p>
//   <p>Naruto</p>
// </div>,document.getElementById("root"));

// ReactDOM.render([
//   <h1>Anime</h1>,
//   <p>DragonBallz</p>,
//   <p>Naruto</p>,
//   <p>OnePunchMan</p>
// ], document.getElementById("root"));

//-----------------------------------------------------------------------------------------------
// React.Fragment=avoid adding extra Elements like div to wrap multiple Elements save memory and time
// ReactDOM.render(
//   <React.Fragment>
//      <h1>Anime</h1>
//      <p>DragonBallz</p>
//      <p>Naruto</p>
//      <p>Konosuba</p>
//   </React.Fragment>,
//   document.getElementById("root")
// )

// other way of writing
// ReactDOM.render(<>
//   <h1>Anime</h1>
//         <p>DragonBallz</p>
//         <p>Naruto</p>
//         <p>Konosuba</p>
//         <p>DemonSlayer</p>

// </>,
// document.getElementById("root"))

//-----------------------------------------------------------------------------------------------------
// JSX Expression
// no if-else statement

// const userName="KingDestroyer";
// ReactDOM.render(<>
//     <p>userName is {userName}</p>
//     <p>Lucky number is {Math.round(Math.random()*10)}</p>
// </>,document.getElementById("root"));

//-------------------------------------------------------------------------------------------------------
// Template Literals

// const firstName="king";
// const lastName="Destroyer";


// ReactDOM.render(
//   <>
//   <p>my firstName is {firstName} {lastName}</p>
//   <p>my firstName is {firstName+" "+lastName}</p>
//   <p>my firstName is {`${firstName} ${lastName}`}</p>
//   <p>{`my firstName is ${firstName} and lastname is ${lastName}`}</p>
//   </>,
//   document.getElementById("root")
// );

//-------------------------------------------------------------------------------------------------------
/**difference between html elements           and     jsx elements 
 *                    contenteditable="true"         contentEditable="true"(follows camelCase)
 *                     <img src="" alt="">            <img src="" alt=""/>(self closing tag) and should include valid attribute to follow reactjs standard
 *                     
*/

// const img="data:image/jpeg;base64,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";
// const ttImage="https://i.ytimg.com/vi/tiLWCNFzThE/maxresdefault.jpg";
// ReactDOM.render(
//   <>
//   <h1 contentEditable="true">KingDestroyer Website</h1>
//   <img src={img} alt="dragonballz image" width="300px" height="300px"/>
//   <a href="https://www.thapatechnical.com">
//     <img src={ttImage} alt="thapatechnical image" width="300px" height="300px"/>
//   </a>
//   </>,
//   document.getElementById("root")
// )

//----------------------------------------------------------------------------------------------------------
//CSS styling and className
// import "./index.css";

// const img="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAFwAXAMBIgACEQEDEQH/xAAbAAADAQADAQAAAAAAAAAAAAAEBQYDAQIHAP/EAD0QAAIBAgQEBAQCCAQHAAAAAAECAwQRAAUSIRMxQVEGImFxFIGRoSMyFTNSYrHB0fAkJUKyNFNydILh8f/EABoBAAIDAQEAAAAAAAAAAAAAAAMFAQIEAAb/xAApEQACAgEDAwQBBQEAAAAAAAABAgADEQQSIQUxYRNBUYEyUpGh0fAi/9oADAMBAAIRAxEAPwCwhUVMElM/lDxRsp5+YBd/9n3xPQpBTyw1L0cMuo8NuIgJU6jpYfW3K/LthHD4lzI1cU6yINESoIdHkZf3uvbcHph40q5hDFIUEVM/mk2sVN77Hl1FiO19tsJweTNVdyWcLHTztKgLcVAB5dKahz7W/kMC5hV08Bp0rpd+KobQCvla6knfYaS25OEr51LXZnT5WtQ1OUjvVyR2BdxYaFPTc7kb9OmFuaqtVmKZNC34s8nCAjGoQg33P7Uht179TiVRxcKwOcZ+vmHBQoXJ47fcukyanlpAaKFYK24M8fxDxhuf5xGfMfXrzwnybwRHl/iOsr65pjDLFFKJFrpQFlDNe5uCwAC21XtfAWS51nGWUhoooKV44iU+NrXKmybWcXFyvK5t0xYZOZ63TLmE8NQw8yonlUHoQm5+bG/oMadxGRmD2DgxJX5TR5lUZpBSBIqaoIDvTgLaRhaWRj/qYqbL7k2tuWNBltDldGlDlcCU1PGPLa5JO1ydxc7czf8Aqm8X0VJL4jpo6eqkWvlYyVQiazJEqgKbjkdQAHozdMNMozKKsoI5ZtavbTI4UABrbEDfYggg+u+AXM2duZdVGN0N4aBAAZOIOUmoA/QCxHoRj5nq7frY5Af2lsfqP6Y4KxTlvI90JBBc3B+vK3L3xzLTq8gk1Ro3VhGC/wBTywDJ7S2IG0E/E/DoY2OnSClUUuBy5Lt8sZpBnYG6x+g4avYe5kBP0weSsZGqomOo6RdhzP8A0gY1iuF8rOnoX37d8WDYkEZnj8KBkQm9yASQbdMPstrKiSBKIl3jj08IX/Ku4sDz6be535YHjyCtTRG/DVTGrLJe+pSNrDvsfoTyGKVaODKI6aKUgs8Y/G0aQW2DFvUm25729+VWDEmLtNS4fJ4EmcpoTReJ88zGqu0VCp0En8xdQ5+xt88T0dRPHULUpIY6hZBKsi76Xve+/Pfvi4g/zHI6/wAtp5uKHU81axAHyAA+WPP2/EjBWVowRe623w+6DYL7L3ccjA+sS/U0NS1qvbk/ZlfT+P6yjgJahoXqWN5KuW+p27kd/YgdgMbLJ4l8S6ZMxrTR0tw6hYVRiQbgrtqHuT8jgXJshosogSvzCMzV7jUkczAiId+w9T8h6t4UnzCVVq5HWKQFtHIyAW6dF3G3M9ewVa/qlQLDSoAP1Hn9hN2k0DsoN7fX9ztl1Bl6xSwUULcFjeWo5mY33Grmf4dMHLGmWqaqAWZd5Sx/XL1DE9e3b2uMI808WUVJqpcpVKiWPy3H6pPT972H1xLV1bV5i5NZO83ZLWRfZeWAdP6NrtY/rMdq+e5hNX1DS0L6ajJ8dp6uOIklNU08mqhZTrP7KkXVvVQfoGPTkY5MNwwL3vuuwHod/vhD4MzM1nh6njeM/wCD/wAIw20sqqNJAtztYHl1w1/HpoyY7yxKLhWPnAHQHr6A7+uJurNblG7iCRtyhh7wmB1kW6XW53UnkTjaI8RSYxYA2sx0/wARhNNVUHwjz6gAg3QL5iAblSu3y+oOOn6clDFEjQKlgDKxLHYHe3vim2TmbUDpV5TQiSOySx8F97MpUdx6qfqMLswqkrMthlcjiQVIilBFvW5v3GNcnkWnphFIHiUrDUQ8SMoCfKWVSdj15dziWbN3V6pYI1aGWVXtKNwVOxFj1GLsAMkwTWqigtDqarjos/aNFKQVUSMbgjz7jr+6B98LfDuSf51UcZAKeglKKp5Fua/IKQfmMZ53NJW5bNmMCIlRRlWZTvqXcn+/Q4Z5D4ty6qob1dVHTyJs3FbScCssvoqd6B+YwfH+E11ejfs3n8eR5jSLLWepaatKyea6r0J6E+g6D58zhP4qzCSgkrNMhVzRtwj21sim3tYnDgZxFLKI6SnnqO7KLKB33wD4l/RtTEVqlDOgKiQGwTuL9fb62ws0pcXr6q5HxGFyg1kKZJeEfDFVm5NT8TDSUW4aeQarW57fI8+2Lyp8G5RT5FUfBxPUVb07Nx6lSSigElgmwBNrDa9zfocKvAEtKmXywxsktPHMWvzHlKyfxGPQ/EdYaDJ6qQJxJCpRE/aYj+lz8sepfXXMcBsD4iFdJWo5GTJ6M0/h9IKWnGqmENliWxfUDu3ck3+uOHzg1E2imGmOxu99yRbl0A3588Jc1rqehqSoleeSWFEaO9jtaxv06n54+yeVXjRYAXmZTaIA3v5QL7dBck72GFx/6OfeEV1zsBhtPTJd4S2u66ZL9ef8jjRZqSNEEw0uVBKlGJFxy5YxFNXx080ohMxnEmlqVxIN7WAGxNlH7PTAHwlLUkyVcssbn8qAflHrfrzPzxG35l8yxyavp5qClgSWPirTx6oiw1flHTGWZ+HsuzCN70scEx3E0MYUg9zbY/PE/QQJLl9ONTaeEjLb/SbD7dxgyOugDCKankFQOfBNxffcXsRyv/ZxBHJxI2gjBElMwWPL6rMcomnTjSQRBSvJ1Ytci/7pv/8AMRMVHpHCqhwpOaX2JXlcdxiv8X0dRP4pFcWDQiPgajzDCIn+B+2HGZUFPPQ5DSVcKuhlQOrDoUIP3b7Y11a1dEyjG4MOZUaP1qsDjHaQdNmGYZdGYKLNZo4yb6I2W33O3ywLVyzVsoNZWmVn5CSUvc+w2xcp4TyhapA0crIapoSjSnTp4ZI9eduuGkuSZfl2iWjpI44WtFOgH5lY21X6EEj+xi1nWdErApVyfE5enahhhn4EReFYjleU1QkEqyEO80Tp5kXTYMBzsdgeoNuhvj1LOJEelq5qhNRpKcy2BsPMrAk+1jiLqqLjxUJndlqIJxAX5a0vY/Vbn5kdcXaMBnk8GlmEtIjFtio0swt89X2xmTUevl4ZqvSws8mSirM1rY4KZNdVcXfpHp2Ysegv/wCsXNBBTZDFwKb8ere3Ecjcn17KOg5+/PBFUHy5auioWWniWcsWVLlFZVawHU6ifl8sC5eqwSlpAyMereaw/ePc7Xv6W7kZXHEy1UBCT7wkcE6oMzgVGYF43jNjpO9r3v5SbfTphjDLTTglaiRgDYXRr9+2/PnhbW1CfBvVTr+HEQ8A6seQbfve1u2/syoquCpgE0RADHzDWAQeoPrjj2zDyGooSKGnmhYgiCMugJFvL+Ydifvgk1SExOHBmjbysvNrc1YdD9twRtfH2TUdY9LTSRwSkCKMXIsCNI5E/wAu3qcGjI6F55Pi6qWOUb8Onj1Wt62N/awwQ4ycyPbiSmeRTvXwlgRHUSFg4N1fVdQeXQSAf+Pthjmc+mppEckmOvIv20iM/wA8FeI4KQ1GWQ5czyXdmbUzcw6Hkdh15DAHiWL/AIsIxFUsoq6cchLZQGQHv5b258rYy2kNcq+JuqG2rMc1lLI4fgqSy1sctu4sgY/S+DK6Lj0c8Q/M0ZC+htt97Y65bWLXUqzxgAEkWv2P9LY2hkWaNJEPlbcX6YRWO4YAj8TGCgY494rz+vp4Mh+MnJCnhMulSTcspH9++HtF4y8PplcVTNmcDS6ArRoS0jW6aRv9bYk/GcctRkrZdl0DSsHj1qnKNV8wuT7DEzlfhvO5qVgmWzjhKzO8q6FWwudz/LHq+iaSmygta23kn6iPqV9iWbUGZ6XlOYNm9BPm0lNJBFNPIyK3mOhQFDG3LZeXcdcZS1MrxmaUcKj57j84vy9ja1vlvfBsMNVleUUFFQAyiGARs68ywA357XOq53tcY1lpYhBIn6PAUhWtFIVuxvfccrX54E5UsSO0qucAGTEeaNXmpqJkBghV+HFvewA3Pre49LbdbrJZ6hWHw7OqlVJCm25AP9MVsdDRcIinoBxORWGoLCw7ncd+ffHNH4Yp2i1VZmWQn8scgsB0HLHbgJ0MyRW/QtB/20f+0YNYFgVbcHmDuMZZIitlFDqF7U6Ee4UYKjUpUGMsXUgEarbbkWwJu5lh2kl4n4cOe5I5Fmk4iHy87aSLn05Y7ZhldJmA/HQhrW1obNbt2PzvjLx4xGa5WRbyKWHvxFwxY2BPYYWa8sjo6HBjPSgGvBk94acUlbWZWzkmOzIT/qA8t/oF++G9AQrVUH/KmNvZvMP44R0otPQVQ/WyVbozd1Kbj6i+GkztFn8IU7TQ2cd7MbYpqE3ufI/kQ1ZwMQ/wzXCjqM2lrNKwrZmPMg6ig+2n325Yd5tmEcVDmEdRIql2emiuQLsUFh9W+mJHNo1iqIilx8ayxTDoQCCDbuNvpvjjNYB8bRcR5JTLUDUZDfnYH7D3wzp1SbF47iL307FjzLUJICFZVtfmDyHtjg0qOoWRBJbccTzdb9cI5s6qqShgdVjkY0yuTICbnQDfY98F5eWrXZqqR5AbDhk2TlfkNuuLgZ5mckDiMOPTghBMhYbBU8x+gwSALYEzSdqKjMkKrcMFAPK2Cor8JCdyRubDEESRP//Z";

//  const ttImage="https://i.ytimg.com/vi/tiLWCNFzThE/maxresdefault.jpg";
// ReactDOM.render(
//   <>
//   <h1 contentEditable="true" className="heading">KingDestroyer Website</h1>
//   <div className="img-div">
//       <img src={img} alt="dragonballz image" width="300px" height="300px"/>
//       <img src={ttImage} alt="thapatechnical image" width="300px" height="300px"/>
      
//   </div>
//   </>,
//   document.getElementById("root")
// )

//-----------------------------------------------------------------------------------------------------------
// import "./index.css";

const img = "data:image/jpeg;base64,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";

const heading={
  color: '#fa9191',
  textAlign: 'center',
  textTransform: 'capitalize',
  fontWeight: 'bold',
  textShadow: '0px 2px 4px #ffe9c5',
  margin: '70px 0',
  fontFamily: 'Josefin Sans, sans - serif'
}

const ttImage = "https://i.ytimg.com/vi/tiLWCNFzThE/maxresdefault.jpg";
ReactDOM.render(
  <>
    <h1 contentEditable="true" style={heading}>KingDestroyer Website</h1>
    <div style={{
      display: 'flex',
      justifyContent: 'center'
    }}>
      <img src={img} alt="dragonballz image" width="300px" height="300px" />
      <img src={ttImage} alt="thapatechnical image" width="300px" height="300px" />

    </div>
  </>,
  document.getElementById("root")
)