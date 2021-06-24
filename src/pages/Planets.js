import React from "react";
import Card from "../components/Card";
import { useContext } from "react";
import { Context } from "../store/appContext";
import Loader from "../components/Loader";

function Planets() {
  const { store, actions } = useContext(Context);
  const { planets } = store;

  console.log(planets);

  return (
    <>
      <div className="background">
        <h1 className="text-center py-4">Planets</h1>
        <div className="container my-5">
          <div className="row my-3 d-flex justify-content-center">
            {!!planets && planets.length > 0 ? (
              planets.map((el) => (
                <>
                  <Card
                    key={el.id}
                    name={el.name}
                    src={`/img/planets/${el.id}.jpg`}
                    target={el.id}
                  />

                  <div
                    className="modal fade"
                    id={"exampleModal" + el.id}
                    tabindex="-1"
                    aria-labelledby={"exampleModalLabel" + el.id}
                    aria-hidden="true"
                  >
                    <div className="modal-dialog">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5
                            className="modal-title"
                            id={"exampleModalLabel" + el.id}
                          >
                            {el.name}
                          </h5>
                          <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          ></button>
                        </div>
                        <div className="modal-body">
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">Name: {el.name}</li>
                            <li className="list-group-item">Population: {el.pop}</li>
                            <li className="list-group-item">Terrain: {el.terrain}</li>
                            <li className="list-group-item">Climate: {el.climate}</li>
                          
                          </ul>
                        </div>
                        <div className="modal-footer">
                          <button
                            type="button"
                            className="btn btn-secondary"
                            data-bs-dismiss="modal"
                          >
                            Close
                          </button>
                          <button type="button" className="btn btn-primary">
                            Save changes
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              ))
            ) : (
              <Loader />
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Planets;
