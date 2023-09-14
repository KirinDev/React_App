interface Props {
  label1: string;
  label2: string;
  label3: string;
  description1: string;
  description2: string;
  description3: string;
  image1: string;
  image2: string;
  image3: string;
}

const GamesCarousel = ({ label1, label2, label3, description1, description2, description3, image1, image2, image3 }: Props) => {
  return (
    <div
      id="gamesCarousel"
      className="carousel slide carousel-fade"
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#gamesCarousel"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#gamesCarousel"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#gamesCarousel"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active c-item " data-bs-interval="8000">
          <img
            src={image1}
            className="d-block w-100 c-img"
            alt="Game1"
          ></img>
          <div className="carousel-caption d-none d-md-block">
            <h5>{label1}</h5>
            <p>{description1}</p>
          </div>
        </div>
        <div className="carousel-item c-item" data-bs-interval="8000">
          <img
            src={image2}
            className="d-block w-100 c-img"
            alt="Game2"
          ></img>
          <div className="carousel-caption d-none d-md-block">
            <h5>{label2}</h5>
            <p>{description2}</p>
          </div>
        </div>
        <div className="carousel-item c-item" data-bs-interval="8000">
          <img
            src={image3}
            className="d-block w-100 c-img"
            alt="Game3"
          ></img>
          <div className="carousel-caption d-none d-md-block">
            <h5>{label3}</h5>
            <p>{description3}</p>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#gamesCarousel"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#gamesCarousel"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default GamesCarousel;
