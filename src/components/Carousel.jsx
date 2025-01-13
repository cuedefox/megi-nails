import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

export const Carousel = () => {
    return <div id="carousel" className="carousel slide" data-bs-ride="carousel">
    <div className="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img src="https://dummyimage.com/1280x400/000/aaa" className="d-block w-100" alt="..." />
        <div className="carousel-caption d-none d-md-block">
          <h5>KAPIN</h5>
          <p>UN MILLON DE DOLARES</p>
        </div>
      </div>
      <div className="carousel-item">
        <img src="https://dummyimage.com/1280x400/000/aaa" className="d-block w-100" alt="..." />
        <div className="carousel-caption d-none d-md-block">
          <h5>GEL</h5>
          <p>ZARAKATUNGA DOLARES</p>
        </div>
      </div>
      <div className="carousel-item">
        <img src="https://dummyimage.com/1280x400/000/aaa" className="d-block w-100" alt="..." />
        <div className="carousel-caption d-none d-md-block">
          <h5>LIFTING</h5>
          <p>NO</p>
        </div>
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>
}