import React from "react";
import "./Loader.css";

function Card(props) {
  return (
    <>
      <div key={props.id} className="col-12 col-sm-6 col-md-3 my-3 carta">
        <div className="card">
          <img
            src={props.src}
            alt="https://picsum.photos/200/200"
            className="card-img-top"
          />
          <div className="card-body">
            <h5 className="card-title text-center">{props.name}</h5>

            <div className="d-grid gap-2">
              <button
                type="button"
                className="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target={"#exampleModal" + props.target}
              >
                More info
              </button>
              <button onClick={props.favorite} className="btn btn-warning">Add to favorites</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
