import React, { useState } from "react";
import str from './text.js';

export default function TextForm(props)
{
    
    const reloadfunc = () => {
        window.location.reload()
    }
    const [text , set] = useState("")
    
    
        
    
       
    const onch = (event) =>{
        set(event.target.value)
        if(text === str)
        {
            
            document.getElementById("message").innerHTML = "Hurrah ! You WON ..."
            document.getElementById("message").classList.add("win")
        }
        
    }
        
    return(
        <>
        <center>
            
            <p className='matterpara'>
                {str}  
            </p>

            <p className="head">
                Write The Above Text Again ++^
            </p>
        <textarea name="text" id="TextForm" placeholder="Write Something" value={text} onChange={onch}>
        </textarea>
        <br />
        <button type="submit" className="submitbutton" onClick={reloadfunc}>Next</button>
        </center>
        </>
    )
}