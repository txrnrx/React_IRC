import React from 'react'
import {useState} from 'react'

function Statex(){
    const[visible,setVisible]=useState(true);
    function toggle(){
        setVisible(!visible);
    }
    setTimeout(()=>{
        setVisible(false)
    },5000)
    return(
        <>
        {visible?(<button onClick={toggle}>WELCOME</button>):
       (<button onClick={toggle}>GOOD BYE!</button>)
        }
        </>
    )
}
export default Statex