import React, { useState, useEffect } from 'react'
import './Square.scss'


const Square = () =>  {
    const [color,setColor]=useState('white');

    const getRandomColor = () => {
        return `#${Math.floor(Math.random()*16777215).toString(16)}`
    }

    return (
        <div className='square' style={{backgroundColor: color}} 
            onClick={() => setColor(getRandomColor())}>
        </div>
    )
}

export default Square;