import React from 'react'
import { useState, useEffect } from 'react'
import {Link} from 'react-router-dom';

function Read() {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  async function getData() {
    const response = await fetch("http://localhost:5000");

    const result = await response.json();
    if (!response.ok) {
      console.log(result.error);
      setError(result.error);
    }
    if (response.ok) {
      setData(result);
    }
  }
  useEffect(() => {
    getData();
  }, []);
   async function handleDelete(id){
    const response = await fetch("http://localhost:5000/${id}", {
      method:"DELETE"
    });

    const result = await response.json();
    if (!response.ok) {
      console.log(result.error);
      setError(result.error);
    }
    if (response.ok) {
      setError("Deleted Successfully");

      setTimeout(()=>{
        setError("");
        getData();

      },2000);

      
    }


  }
  return (
    <div class="container my-2">
      {error && <div class="alert alert-danger">
        {error}
      </div>}
      <h2 class="text-center">All Data</h2>
      <div className="row">
        {data?.map((e) => {
          <div className="col-3" key={e._id}>
            <div class="card" style="width: 18rem;">
              <div class="card-body">
                <h5 class="card-title">{e.name}</h5>
                <h6 class="card-subtitle mb-2 text-body-secondary">{e.email}</h6>
                <p class="card-text">{e.age}</p>
                <Link class="card-link" to={`/${e._id}`}>edit</Link>
                <a href="#" class="card-link" onclick={handleDelete}>delete</a>
              </div>
            </div>
          </div>
        })}

      </div>
    </div>
  )
}

export default Read