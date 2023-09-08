import React from "react";

interface Props {
  title: string;
  games: string[];
}

const GamesGrid2 = ({ title, games }: Props) => {
  return (
    <div className="container2">
      <h3 className="section-title">{title}</h3>
      <div className="row row-cols-5">
        {games.map((item) => (
          <div className="col" key={item}>
            <img className="grid_img" src={item}></img>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GamesGrid2;
