import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Update = () => {
 
    const[id,setId]=useState(0);
    const[name,setName]=useState('');
    const[email,setEmail]=useState('');

    const navigate =useNavigate();

    useEffect(()=>{
       setId(localStorage.getItem("id"));
       setName(localStorage.getItem("name"));
       setEmail(localStorage.getItem("email"));
    },[]);

 const handleUpdate=(e)=>{
    e.preventDefault();
    axios.put(`https://64a025b0ed3c41bdd7a70bbc.mockapi.io/my-crud/${id}`,
    {
            name:name,
            email:email,
            
    }).then(()=>{
          navigate("/read");
    });
}

  return (
    <>
     <>
    <div className="container d-flex justify-content-center mt-5">
        <div className="col-md-6 border p-4">
          <center>
            <h2>Update</h2>
          </center>
          <form>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input 
              type="text" 
              className="form-control"
              value={name}
              onChange={(event)=>setName(event.target.value)}
               />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input 
              type="email" 
              className="form-control"
              value={email}
              onChange={(event)=>setEmail(event.target.value)}
             
              />
            </div>
           
            <div className="text-center my-2">
              <button 
              type="submit" 
              className="btn btn-success"
              onClick={handleUpdate}>
                Update
              </button>
              <Link to={'/read'}>
              <button className="btn btn-info mx-3">Back</button></Link>
            </div>
          </form>
        </div>
      </div>
    </>
    </>
  )
}
export default Update;
