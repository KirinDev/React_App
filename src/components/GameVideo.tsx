interface Props {
    game: string;
    video: string;
  }

const GameVideo = ({ game, video }: Props) => {
  return (
    <div className="video-container">
        <div className="col">
            <img className="grid_img" src={game}></img>
        </div>
        <video width="800" controls>
            <source src={video} type="video/mp4"></source>
                Your browser does not support HTML video
        </video>
    </div>
  )
}

export default GameVideo