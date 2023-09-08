import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import NavBar from "./components/NavBar";
import GamesGrid from "./components/GamesGrid";
import GamesGrid2 from "./components/GamesGrid2";
import GamesCarousel from "./components/GamesCarousel";

function App() {

  let games1 = ["Dark_Souls_1_capa.png", "dark-souls-2.jpg", "dark-souls-3.png", "elden-ring.jpg", "sekiro.png"];
  let games2 = ["the-witcher-3.png", "shadow-of-mordor.jpg", "skyrim.png", "fallout-new-vegas.jpg", "nier-automata.png"];
  let games3 = ["Dark_Souls_1_capa.png", "dark-souls-2.jpg", "dark-souls-3.png", "elden-ring.jpg", "sekiro.png"];

  return (
    <div>
      <NavBar />
      <GamesCarousel />
      <GamesGrid title="Souls RPG" games={games1} />
      <GamesGrid2 title="RPG" games={games2} />
    </div>
  );
}

/*
let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  let animes = ["Naruto", "Vinland Saga", "Bleach", "Evangelion", "Berserk"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  }

  return (
    <div>
      <ListGroup items={animes} heading="Anime" onSelectedItem={handleSelectItem}/>
    </div>
  );

  const [alertVisible, setAlertVisibility] = useState(false);

  return (
    <div>
      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>
          Quer mandar beijinhos para alguem? Olarilolei Olarilolei!
        </Alert>
      )}
      <Button color="danger" onClick={() => setAlertVisibility(true)}>
        Click Me!
      </Button>
    </div>
  );
  */

export default App;
