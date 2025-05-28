import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const urlActors = "https://lanciweb.github.io/demo/api/actors/";
  const urlActresses = "https://lanciweb.github.io/demo/api/actresses/;";

  const [actors, setActors] = useState([]);
  const [actress, setActress] = useState([]);

  useEffect(() => {
    axios.get(urlActors).then((response) => {
      console.log(response.data);
      setActors(response.data);
    });
  }, []);

  // useEffect(() => {
  //   axios.get(urlActresses).then((response) => {
  //     console.log(response.data);
  //     setActress(response.data);
  //   });
  // }, []);

  return (
    <>
      <div className="container">
        <h1>Cast Fetching</h1>
        <div className="section-btn">
          <button>
            <h2>Section of Actors</h2>
          </button>
          <button>
            <h2>Section of Actress</h2>
          </button>
        </div>

        <div className="row">
          {actors.map((actor, index) => {
            return (
              <div key={actor.id} className="col-1-4">
                <div className="card">
                  <img
                    className="img-actors"
                    src={actor.image}
                    alt={actor.name}
                  />
                  <div className="card-title">
                    <h2>{actor.name}</h2>
                    <hr />

                    <hr />
                  </div>
                  <div className="card-body">
                    <ul>
                      <li>{`Birth Year: ${actor.birth_year}`}</li>
                      <li>{`Death Year: ${actor.death_year}`}</li>
                      <li>{`Nationality: ${actor.nationality}`}</li>
                      <li>{`Known for: ${actor.known_for}`}</li>
                      <li>{`Actor awards: ${actor.awards}`}</li>
                      <li>
                        Biography:
                        <p>{actor.biography}</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        {/* <div className="row">
          {actors.map((actress, index) => {
            return (
              <div key={actress.id} className="col-1-4">
                <div className="card">
                  <img
                    className="img-actors"
                    src={actress.image}
                    alt={actress.name}
                  />
                  <div className="card-title">
                    <h2>{actress.name}</h2>
                    <hr />

                    <hr />
                  </div>
                  <div className="card-body">
                    <ul>
                      <li>{`Birth Year: ${actress.birth_year}`}</li>
                      <li>{`Death Year: ${actress.death_year}`}</li>
                      <li>{`Nationality: ${actress.nationality}`}</li>
                      <li>{`Known for: ${actress.known_for}`}</li>
                      <li>{`Actor awards: ${actress.awards}`}</li>
                      <li>
                        Biography:
                        <p>{actress.biography}</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div> */}
      </div>
    </>
  );
}

export default App;
