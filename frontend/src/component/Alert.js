import { red } from '@mui/material/colors'
import React from 'react'
import { useSelector } from 'react-redux'

function Alert() {
    const errors=useSelector(state=>state.Reducererror)
    console.log(errors)
  return (
    <div>
        {errors.map(e=>
            <span style={{color:"red"}}>
                {e.msg}
            </span>
        )}
    </div>
  )
}

export default Alert