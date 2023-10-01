import React from "react";
import { Link } from "react-router-dom";

function NotFound(props) {
  const imgSource = `https://picsum.photos/id/289/400/300`;
  return (
    <div className="mt-3 text-light">
      <img src={imgSource} className="" alt="" />
      <br />
      <br />
      <p className="fs-2"> Opps, Something Wrong!!</p>
      <br />
      <br />
      <br />
      <br />
      <Link to="/">
        <button className="btn btn-danger">Go Home</button>
      </Link>
    </div>
  );
}

export default NotFound;
