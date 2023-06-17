import { Carousel } from "react-bootstrap";
function AppHome() {
  return (
    <>
      <div className="row justify-content-center">
        <div className="col-sm-12 col-md-10">
          <MyAppCarousel />
        </div>
      </div>

      {/* flash card */}
      <div className="row justify-content-center">
        <div className="col-sm-12 col-md-10">
          <div className="alert alert-secondary fs-4 p-5">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam
            dignissimos eaque reprehenderit natus atque aut magnam commodi,
            repudiandae molestiae, quaerat laboriosam, vel illum officiis
            incidunt doloribus architecto a. Fugiat, corporis.
          </div>
        </div>
      </div>

      <AppCard />
    </>
  );
}

function AppCard() {
  let list = [{}, {}, {}, {}, {},{},{},{}];
  return (
    <>
      <div className="row">
        {list.map((item, index) => (
          <div className="col-sm-12 col-md-3">
            <div>
              <img
                src={`https://picsum.photos/300`}
                style={{ width: "100%", height: "300px", objectFit: "cover" }}
              />
              <p className="fs-3">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel
                neque magnam enim illum animi facilis?
              </p>
              <input
                type="button"
                value="Add to cart"
                className="btn btn-secondary"
              />
              <input
                type="button"
                value="continue"
                className="btn btn-primary"
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

function MyAppCarousel() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=First slide&bg=373940"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=Second slide&bg=282c34"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=Third slide&bg=#dc3545"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default AppHome;
