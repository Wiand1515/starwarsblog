import React from "react";
import Card from "../components/Card";
import { useContext } from "react";
import { Context } from "../store/appContext";
import Loader from "../components/Loader";

function Starships() {
  const { store, actions } = useContext(Context);
  const { starships } = store;
  return (
    <>
      <div className="background">
        <h1 className="text-center py-5">Starships</h1>
        <div className="container">
          <div className="row my-3 d-flex justify-content-center">
            {!!starships && starships.length > 0 ? (
              starships.map((el) => (
                <>
                <Card
                  key={el.id}
                  name={el.name}
                  src={`/img/starships/${el.id}.jpg`}
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
                          <h5 className="modal-title" id={"exampleModalLabel" + el.id}>
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
                            <li className="list-group-item">Passangers: {el.passangers}</li>
                            <li className="list-group-item">Made by: {el.company}</li>
                            <li className="list-group-item">Max-Speed: {el.speed}</li>
                          
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

export default Starships;
