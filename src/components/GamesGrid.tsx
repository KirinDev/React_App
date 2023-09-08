import React from "react";

interface Props {
  title: string;
  games: string[];
}

const GamesGrid = ({ title, games }: Props) => {
  return (
    <div className="container1">
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

export default GamesGrid;

/*
<div className="col">
          <img className="grid_img" src="public/Dark_Souls_1_capa.png"></img>
        </div>
        <div className="col">
          <img className="grid_img" src="public/dark-souls-2.jpg"></img>
        </div>
        <div className="col">
          <img className="grid_img" src="public/dark-souls-3.png"></img>
        </div>
        <div className="col">
          <img className="grid_img" src="public/elden-ring.jpg"></img>
        </div>
        <div className="col">
          <img className="grid_img" src="public/sekiro.png"></img>
        </div>
*/
