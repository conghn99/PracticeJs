import React, { useState } from 'react';
import './App.css';

function App() {
    const [count, setCount] = useState(5);
    const boxes = document.getElementsByClassName("boxes")

    const remove = (e) => {
      e.target.remove();
      setCount((count) => count - 1);
    }

    const addBoxes = () => {
      colors.map(color => {
        let att = document.createElement("div");
        att.key = color;
        att.className = 'box';
        att.style.backgroundColor = color;
        att.onclick = remove;
        boxes[0].appendChild(att)
        // <div key={color} className="box" style={{ backgroundColor : color }} onClick={remove}></div>
      })
      setCount((count) => count + 5);
    }
    let colors = [
      '#3498db',
      '#9b59b6',
      '#e74c3c',
      '#2c3e50',
      '#d35400',
  ]
  return (
      <React.Fragment>
        <h1> JS DOM</h1>
        <button id="btn" onClick={addBoxes}>More boxes</button>
        <h4 id="score"> Total box:<span className="points">{count}</span></h4>

        <div className="boxes">
          {colors.map(color => (
            <div key={color} className="box" style={{ backgroundColor : color }} onClick={remove}></div>
          ))}
        </div>
      </React.Fragment>
  );
}

export default App;
