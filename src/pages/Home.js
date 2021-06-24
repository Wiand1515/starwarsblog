import React from "react";
import Card from "../components/Card";
import { useContext, useState } from "react";
import { Context } from "../store/appContext";
import Pagination from "react-js-pagination";
import Loader from "../components/Loader";

function Home() {
  const { store, actions } = useContext(Context);
  const { characters, people } = store;
  const [page, setPage] = useState(1);

  const handleChangePage = (pageNumber) => {
    setPage(pageNumber);
    actions.getCharacters(
      `https://www.swapi.tech/api/people/?page=${pageNumber}&limit=10`
    );
  };

 

  return (
    <>
      <div className="background col-12">
        <h1 className="text-center py-4">CHARACTERS</h1>

        <div className="container my-5">
          <div className="row my-3 d-flex justify-content-center">
            {!!characters && characters.length > 0 ? (
              characters.map((el) => (
                <>
                  <Card
                    key={el.id}
                    name={el.name}
                    src={`/img/characters/${el.id}.jpg`}
                    target={el.id}
                    favorite={() => {actions.getFav(el.name)}}
                  />

                  <div
                    className="modal fade"
                    id={"exampleModal" + el.id}
                    tabindex="-1"
                    aria-labelledby={"exampleModalLabel" + el.id}
                    aria-hidden="true"
                  >
                    <div className="modal-dialog modal-dialog-centered ">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5
                            className="modal-title text-center char"
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
                            <li className="list-group-item">Birth: {el.birth}</li>
                            <li className="list-group-item">Eyes color: {el.eyes}</li>
                            <li className="list-group-item">Gender: {el.gender}</li>
                            <li className="list-group-item">Height: {el.height}</li>
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
          <div className="row">
            <div className="col-md-12 d-flex justify-content-center">
              {!!people && (
                <Pagination
                  activePage={page}
                  itemsCountPerPage={10}
                  totalItemsCount={people.total_records}
                  onChange={handleChangePage}
                  itemClass="page-item"
                  linkClass="page-link"
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
