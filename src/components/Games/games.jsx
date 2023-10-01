import React from "react";
import DATA from "../../data/mySpecialData.json";
import ShowGames from "./ShowGames";
import Search from "../Search";
function Games() {
  const gameItem = DATA.games.map((item) => (
    <div key={item.id} className="col-lg-6">
      <ShowGames
        title={item.title}
        type={item.type}
        img={item.img}
        description={item.description}
      />
    </div>
  ));
  return (
    <div>
      <h1 className="text-light">Games</h1>
      <Search />
      <div className="row">{gameItem}</div>
    </div>
  );
}

export default Games;
