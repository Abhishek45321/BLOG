import React, { useEffect } from 'react'
import { useState } from 'react';
import {useNavigate,useParams} from 'react-router-dom';


function Update() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState(0);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const {id}=useParams();
 
  const getSingleUser=async()=>{
    const response = await fetch(`http://localhost:5000/${id}`);
    const result= await response.json();

    if (!response.ok) {
      console.log(result.error);
      setError(result.error);
    }
    if (response.ok) {
      
      setError("");
      console.log("updated user", result);
      setName(result.name);
      setEmail(result.email);
      setAge(result.age);
      
    }
    
  }
  useEffect(()=>{
    getSingleUser()
  },[]);
  async function handleEdit(e){
    e.preventDefault();
    const updateUser = { name, email, age };
    const response = await fetch(`http://localhost:5000/${id}`, {
      method: "POST",
      body: JSON.stringify(updateUser),
      headers: {
        "Content-Type": "application/json"
      },
  
  
    });
    const result = await response.json();
    if (!response.ok) {
      console.log(result.error);
      setError(result.error);
    }
    if (response.ok) {
      console.log(result);
      setError("");
      navigate("./all");
    }

  }

  
  
  
  return (
    <div className="container my-2">
      {error && <div class="alert alert-danger">
        {error}
      </div>
      }

      <h2 className='text-center'>Edit the data</h2>
      <form onSubmit={handleEdit}>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Name</label>
          <input type="text" class="form-control" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Email address</label>
          <input type="email" class="form-control" value={email} onChange={(e) => setEmail(e.target.value)} />

        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Age</label>
          <input type="Number" class="form-control" value={age} onChange={(e) => setAge(e.target.value)} />
        </div>


        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}

export default Update