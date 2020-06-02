import React,{useState} from 'react'

export default function WithObject() {
    const [name,setName] = useState({firstName:'',lastName:''});
    return (
        <div>
            <label htmlFor='firstName'>First Name : </label>
            <input type='text' value={name.firstName} onChange={e=>setName({...name,firstName:e.target.value})}/>
            <label htmlFor='lastName'>Last Name : </label>
            <input type='text' value={name.lastName} onChange={e=>setName({...name,lastName:e.target.value})}/>
            <h3>Your First Name : '{name.firstName}'. Your Last Name : '{name.lastName}'</h3>
        </div>
    )
}
