// Form for new patients to create their profile with medical details

import React,{useState} from 'react'

export default function CreateProfile() {
    const [name,setName]=useState('');
    const [number,setNumber]=useState('');
    const [email,setEmail]=useState('');
    const[dob,setDob]=useState('');
    const [address,setAddress]=useState('');

    const handleSubmit = (e)=> {
        e.preventDefault();
        // need to add notification
        console.log('details submitted');
        setName('');
        setNumber('');
        setEmail('');
        setDob('');
        setAddress('');
    }
  return (
    <>
    <div className='container'>
        <form onSubmit={handleSubmit} className='form'>
            <input 
            type='text'
            placeholder='enter name'
            value={name}
            required
            onChange={(e)=>setName(e.target.value)}
            />
            <input 
            type='tel'
            value={number}
            placeholder='enter mobile number'
            required
            onChange={(e)=>setNumber(e.target.value)}
            />
            <input
            type='email'
            value={email}
            placeholder='enter email'
            required
            onChange={(e)=>setEmail(e.target.value)} 
            />
            <input 
            type='date'
            value={dob}
            placeholder='date of birth'
            required
            onChange={(e)=>setDob(e.target.value)}                      
            />
            <input
            type='text'
            placeholder='enter address'
            required
            value={address}
            onChange={(e)=>setAddress(e.target.value)}
            />
          <button type="submit">
            submit details
          </button>
        </form>

    </div>    
    </>
  );
}


