import React, { useState } from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'
import videoTiktok from './tải xuống.mp4'

const colors = ["red", "yellow", "green", "blue", "orange", "black", "pink"]
function Blog() {
    const [color, setColor] = useState("red")
    const videoRef = useRef();
    const inputRef = useRef();
    const colorRef = useRef();
    const play = () => {
        videoRef.current.play()
    }
    const pause = () => {
        videoRef.current.pause()
    }

    // Mỗi lần random ko dc trùng vs màu đang có trong state
    const randomColor = () => {
        // let randomNums = Math.floor(Math.random() * colors.length);
        // if(colorRef.current.style.backgroundColor === colors[randomNums]) {
        //     randomColor()
        // } else {
        //     setColor(colors[randomNums])
        // }
        colorRef.current.style.backgroundColor = colors.filter(c => c !== colorRef.current.style.backgroundColor)[Math.floor(Math.random() * (colors.length - 1))]
    }
    useEffect(() => {
        inputRef.current.focus();
    }, [])
  return (
    <div>
        <h1>useRef() Hook</h1>
        <input type="text" placeholder="Enter something..." ref={inputRef}></input>

        <hr />
        <video src={videoTiktok} style={{height: 300}} ref={videoRef}></video>
        <button onClick={play}>Play</button>
        <button onClick={pause}>Pause</button>
        <hr />
        <div style={{height: 200, width: 200, border: "1px solid black", backgroundColor: color}} ref={colorRef}>
        </div>
        <button onClick={randomColor}>Random color</button>
    </div>
  )
}

export default Blog