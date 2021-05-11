import React, { useState, useEffect } from 'react'
import Square from './components/Square'
import './Dash.scss'


const Dash = () =>  {
    return (
        <div className='dash'>
          <div className='squareWrapper' >
            <Square />
            <Square />
            <Square />
            <Square />
          </div>
        </div>
    )
}

export default Dash;