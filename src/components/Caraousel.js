import Carousel from "react-bootstrap/Carousel";

function IndividualIntervalsExample() {
  return (
    <Carousel>
      <Carousel.Item interval={2500}>
        <img
          className="d-block w-100 carouselImage"
          src="https://www.unesco.org/sites/default/files/styles/best_image/public/2022-03/calendarofevents.jpg?itok=7L_T6mm3"
          alt="First slide"
        />
        <Carousel.Caption>{/* <h3>First slide</h3> */}</Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2500}>
        <img
          className="d-block w-100 carouselImage"
          src="https://upevents.nl/wp-content/blogs.dir/1/files/2017/12/191123-UP-Events-23.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>{/* <h3>Second slide</h3> */}</Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carouselImage"
          src="https://spotme.com/wp-content/uploads/2020/07/Hero-1.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>{/* <h3>Third slide</h3> */}</Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default IndividualIntervalsExample;
