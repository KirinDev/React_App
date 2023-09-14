import Brand from "./components/Brand";
import GameVideo from "./components/GameVideo";
import NavBar from "./components/NavBar";

const DarkSouls = () => {
    return (
        <div>
          <Brand brand="BONFIRE"/>
          <NavBar />
          <GameVideo game="Dark-Souls_1_capa.png" video="dark-souls-video.mp4" />
        </div>
    );
}

export default DarkSouls