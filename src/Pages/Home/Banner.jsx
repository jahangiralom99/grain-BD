import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Banner = () => {
 
  return (
    <div>
      <Carousel showThumbs={false}	>
        <div>
          <img src="https://i.ibb.co/JxBn4JS/maktasteshop1.jpg" />
        </div>
        <div>
          <img src="https://i.ibb.co/JxBn4JS/maktasteshop1.jpg" />
        </div>
        <div>
          <img src="https://i.ibb.co/JxBn4JS/maktasteshop1.jpg" />
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
