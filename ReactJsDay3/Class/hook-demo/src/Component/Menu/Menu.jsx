import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';

function Menu() {
    const[time, setTime] = useState(() => {
        return new Date().toLocaleString()
    })
    // Event
    const handleScroll = () => {
        console.log("roll")
    }
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        // Clean up
        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, []);

    // Timer - setInterval
    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date().toLocaleString());
        }, 1000)

        return () => {
            clearInterval(interval)
        }
    }, [])
  return (
    <div>
        <h1>Menu component</h1>
        <h2>Time: {time}</h2>
    </div>
  )
}

export default Menu