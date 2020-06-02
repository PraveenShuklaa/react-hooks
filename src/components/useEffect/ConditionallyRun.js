import React,{useState,useEffect} from 'react'

function ConditionallyRun() {
    const [count,setCount] = useState(0);
    const [name,SetName] = useState('');
    useEffect(()=>{
        console.log('useEffect hook executed');
        document.title=`Clicked ${count} times`;
    },[count])
    return (
        <div>
            <input type='text' value={name} onChange={e=>SetName(e.target.value)}/>
            <button onClick={()=>setCount(count+1)}> Clicked {count} times </button>
        </div>
    )
}

export default ConditionallyRun
