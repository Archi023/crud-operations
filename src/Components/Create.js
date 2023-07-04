import React, { useState } from 'react';
import axios from 'axios';
import '../index.css';
import { useNavigate } from 'react-router-dom';

export const Create = () => {
   const[name,setName] =useState('');
   const [email, setEmail] = useState('');
   const history= useNavigate();
  
   const header = {"Access-Control-Allow-Origin": "*"};

    const handlesubmit = (event) =>{
        event.preventDefault();
        axios.post('https://64a025b0ed3c41bdd7a70bbc.mockapi.io/my-crud',{
            name:name,
            email:email,
            header,
    })

    .then(()=>{
    history('/read');
    });
};
  return (
    <>
    <div className="container d-flex justify-content-center mt-5">
        <div className="col-md-6 border p-4">
          <center>
            <h2>Create</h2>
          </center>
          <form>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input 
              type="text" 
              className="form-control"
              onChange={(event)=>setName(event.target.value)}
               />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input 
              type="email" 
              className="form-control"
              onChange={(event)=>setEmail(event.target.value)} 
              />
            </div>
           
            <div className="text-center my-2">
              <button 
              type="submit" 
              className="btn btn-dark"
               onClick={handlesubmit}>
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
};
export default Create;
