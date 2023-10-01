import React, { useRef, useState, useEffect } from "react";
import { useLocation, useHistory, Link } from "react-router-dom";
import Games from "../data/mySpecialData.json";

function Search(props) {
  const location = useLocation();
  const history = useHistory();
  const params = new URLSearchParams(location.search);
  const query = params.get("query");
  const inputValue = useRef();
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    if (query) {
      inputValue.current.value = query;

      const gameTypes = Games.games
        .filter((item) =>
          item.title.toLowerCase().includes(query.toLowerCase())
        )
        .map((item) => (
          <li key={item.id} class="list-group-item">
            <Link to={`/games/${item.id}`}>{item.title}</Link>
          </li>
        ));

      setSearchResult(gameTypes);
    }
  }, [query]);

  function handleForm(event) {
    event.preventDefault();
    history.push(`/search?query=${inputValue.current.value}`);
  }
  return (
    <>
      <form onSubmit={handleForm}>
        <div className="form-group">
          <label htmlFor="search" className="text-light">
            {" "}
            Search games{" "}
          </label>{" "}
          <div>
            <input
              name="q"
              type="text"
              className="form-control"
              id="search"
              placeholder="Find games"
              ref={inputValue}
            />
          </div>
          <button
            type="submit"
            className="btn btn-danger mt-2"
            onClick={handleForm}
          >
            Search
          </button>
        </div>
      </form>
      <hr />
      <ul class="list-group mt-3">{searchResult}</ul>
    </>
  );
}

export default Search;
