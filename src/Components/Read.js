import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

export const Read = () => {

    const [data,setData]=useState([]);
    function getData(){
        axios.get("https://64a025b0ed3c41bdd7a70bbc.mockapi.io/my-crud")
        .then((res)=>{
        
           setData(res.data);
        });
    }
    function handleDelete(id){
        axios.delete(`https://64a025b0ed3c41bdd7a70bbc.mockapi.io/my-crud/${id}`)
        .then(()=>{
        getData()
    })
    ;}

const setToLocalStorage=(id,name,email)=>{
     localStorage.setItem('id',id)
     localStorage.setItem('name',name);
     localStorage.setItem('email',email);}

    useEffect(()=>{
        getData();
    },[]);

  return (
    <div className='container my-3'>
        <div className='h3'>Read operation</div><br/>
        <Link to={'/'}>
        <button  className="btn btn-secondary my-4 float-lg-end">Add data</button></Link>
    <table className="table">
        <thead className='table-dark'>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col"></th>
            <th scope="col"></th>

          </tr>
        </thead>
        
        {
            data.map((eachData)=>{
                return(
                    <><tbody>
                    <tr>
                      <th scope="row">{eachData.id}</th>
                      <td>{eachData.name}</td>
                      <td>{eachData.email}</td>
                      <td>
                        <Link to="/update">
                        <button  className="btn btn-success" 
                        onClick={()=>setToLocalStorage(eachData.id,eachData.name,eachData.email)}>Edit</button>
                        </Link>
                      </td>
                      <td>
                        <button  className="btn btn-danger" onClick={()=>handleDelete(eachData.id)}>Delete</button>
                      </td>
                    </tr>
                   
                  </tbody></>
                )
            })
          }
      </table></div>
);}
export default Read;