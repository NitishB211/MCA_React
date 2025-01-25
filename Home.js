function Home() {
  return (
    <>
      <div id="carouselExampleCaptions" className="carousel slide">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="https://images.pexels.com/photos/207636/pexels-photo-207636.jpeg?auto=compress&cs=tinysrgb&w=600" className="d-block w-100" alt="novels-set" height={650} />
            <div className="carousel-caption d-none d-md-block">
              <h5>Set of Books</h5>
              <p>Some interesting books to read</p>
            </div>
          </div>

          <div className="carousel-item">
            <img src="https://images.pexels.com/photos/205926/pexels-photo-205926.jpeg?auto=compress&cs=tinysrgb&w=600" className="d-block w-100" alt="headphone" height={650} />
            <div className="carousel-caption d-none d-md-block">
              <h5>High Quality headphone</h5>
              <p>Some interesting books to read</p>
            </div>
          </div>

          <div className="carousel-item">
            <img src="https://images.pexels.com/photos/1209776/pexels-photo-1209776.jpeg" className="d-block w-100" alt="wooden table" height={650} />
            <div className="carousel-caption d-none d-md-block">
              <h5>Wooden table</h5>
              <p>$ leg wooden table for placing items.</p>
            </div>
          </div>

          <div className="carousel-item">
            <img src="https://images.pexels.com/photos/257923/pexels-photo-257923.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="d-block w-100" alt="apple smartphone" height={650} />
            <div className="carousel-caption d-none d-md-block">
              <h5>Apple Smart Phone</h5>
              <p>High performance with latest Software Apple phone in working condition</p>
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
    </>
  );
}

export default Home;
