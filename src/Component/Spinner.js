import React from 'react'
import spinner from '../images/Spinner-2.gif'

export const Spinner = () => {
    return (
        <div style={{height:"400px",display:"flex",justifyContent:"center",alignItems:"center"}}>
            <img src={spinner} alt="Loading...." />
        </div>
    )
}
