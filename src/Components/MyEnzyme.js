import React from "react";
// import { useState } from "react";
const MyEnzyme=()=>{
    // const h = '';
    const [name,setName] = React.useState("yogya");
    return(
        <div className="mytempclass">
            <h1>MyEnzyme</h1>
            <form>
        <div className="row">
          <div className="col-md-6">
            <input
              type="text"
              placeholder="Enter your name"
              className="input"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <button
              type="submit"
              className="btn btn-primary"
            >
              Add Name
            </button>
          </div>
        </div>
      </form>
        </div>
        
    )
}
export default MyEnzyme