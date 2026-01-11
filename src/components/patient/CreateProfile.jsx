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


// option 2
// import React, { useState } from 'react';

// export default function CreateProfile() {
//   const [form, setForm] = useState({
//     name: '',
//     number: '',
//     email: '',
//     dob: '',
//     address: ''
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setForm(prev => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('details submitted');
//     setForm({
//       name: '',
//       number: '',
//       email: '',
//       dob: '',
//       address: ''
//     });
//   };

//   return (
//     <div className="container">
//       <form onSubmit={handleSubmit} className="form">
//         <input name="name" value={form.name} onChange={handleChange} placeholder="enter name" required />
//         <input name="number" value={form.number} onChange={handleChange} placeholder="enter mobile number" required />
//         <input name="email" value={form.email} onChange={handleChange} placeholder="enter email" required />
//         <input type="date" name="dob" value={form.dob} onChange={handleChange} required />
//         <input name="address" value={form.address} onChange={handleChange} placeholder="enter address" required />
//         <button type="submit">submit details</button>
//       </form>
//     </div>
//   );
// }

