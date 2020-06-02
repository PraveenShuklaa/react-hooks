import React,{useState} from 'react'

function UseState() {
    const [count,setCount] =  useState(0);
    //not safe for using with loop where previous states are used.
    return (
        <>
        Without previous State => Count : {count} <br/>
          <button onClick={()=>setCount(count+1)}>Increment</button>  
        </>
    )
}

export default UseState
