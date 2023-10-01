import React from "react";
import { Link } from "react-router-dom";
function Home(props) {
  return (
    <>
      <div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <h1 className="text=center text-light">
          Welcome, This site provides information about game tours.
        </h1>
      </div>

      <div>
        <br />
        <br />
        <br />
        <br />
        <Link to="/games">
          <button className="btn btn-danger">Let's Begin...</button>
        </Link>
      </div>
    </>
  );
}

export default Home;
