import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const urlActors = "https://lanciweb.github.io/demo/api/actors/";

  axios.get(urlActors).then(console.log(urlActors));


const [] =useState([])
useEffect(() => (),[])

  return (
    <>
      <div className="container">
        <h1>Cast Fetching</h1>
        <div className="row">
          <div className="col-1-4">
            <div className="card">
              <div className="card-title">title</div>
              <div className="card-body">body</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
