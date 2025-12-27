import { useState } from 'react'
import "./index.css"

function App() {
  const [headingText, setHeadingText] = useState("Hello")
  const [isHovored, setIsHovered] = useState(false)

  const HandleClick = () =>{
    setHeadingText("Submitted")
}

  const MouseOver = () =>{
    setIsHovered(true)
}

  const MouseOut = () =>{
    setIsHovered(false)
  }

return (
    <div className="container">
      <h1>{headingText} </h1>
      <input type="text" placeholder="What's your name?" />
      <button style={{backgroundColor: isHovored ? "black" : "white"}} onMouseOver={MouseOver} onMouseLeave={MouseOut} onClick={HandleClick}>Submit</button>
    </div>
  );
}

export default App;
