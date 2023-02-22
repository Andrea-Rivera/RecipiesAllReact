import React from 'react'
import { useNavigate } from 'react-router-dom';
import {TbSoup} from 'react-icons/tb';


function Button() {
    const history= useNavigate()
  return (
    <div>
        <button onClick={()=> history(-1)}><TbSoup/>  Go Back</button>
    </div>
  )
}

export default Button