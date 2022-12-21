import React, { useState } from 'react'

function Theme() {
    const themes = [
        {
            colorHeading: "#2C3639", // light theme
            colorText: "#3F4E4F",
            bg: "#F9F5EB",
        },
        {
            colorHeading: "#EAE3D2", // dark theme
            colorText: "#F9F5EB",
            bg: "#100720",
        },
    ];
    const [state, setState] = useState("Light Theme")
    const [theme, setTheme] = useState(themes[0])
    const handleChange = (e) => {
        setState(e.target.value)
        e.target.value === "Light Theme" ? setTheme(themes[0]) : setTheme(themes[1])
    }
  return (
    <div style={{ backgroundColor : theme.bg}}>
   <select value={state} onChange={handleChange}>
       <option value="Light Theme">Light Theme</option>
       <option value="Dark Theme">Dark Theme</option>
   </select>

   <h2 style={{ colorHeading : theme.colorHeading}}>
       Lorem ipsum dolor sit, amet consectetur adipisicing elit.
   </h2>
   <p style={{ colorText : theme.colorText}}>
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
       placeat necessitatibus, vitae laboriosam in quos, nesciunt modi
       error sit porro, reprehenderit voluptatem dolore libero
       incidunt. Illo mollitia fugit quam inventore?
   </p>
</div>
  )
}

export default Theme