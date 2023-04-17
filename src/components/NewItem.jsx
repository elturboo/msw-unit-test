import React from "react";

const NewItem = ({onLoad}) => {
    const load = () => {
        onLoad();
    }
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-sm-4">
          <div data-testid = "threeBtns" className="card p-3">
            <h5>title 1</h5>
            <p>Desctibe 1</p>
            <button data-testid = "btn-load" className="btn btn-primary" onClick={load}>load</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewItem;
