import React from 'react'
import { useState } from 'react';
import {useNavigate} from 'react-router-dom';




function Create() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState(0);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const addUser = { name:name, email:email, age:age };
    const response = await fetch("http://localhost:5000", {
      method: "POST",
      body: JSON.stringify(addUser),
      headers: {
        "Content-Type": "application/json"
      },
  
  
    });
    const result = await response.json();
    if (result.success) {
      console.log("bc");
      console.log(result.error);
      setError(result.error);
    }
   else{
      console.log(result.message);
      setError("");
      setName("");
      setEmail("");
      setAge(0);
      navigate("./all");
    }
  
  }

  return (
    <div className="container my-2">
      {error && <div class="alert alert-danger">
        {error}
      </div>
      }

      <h2 className='text-center'>Enter the data</h2>
      <form onSubmit={handleSubmit}>
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

export default Create