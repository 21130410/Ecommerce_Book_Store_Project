import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import "./Banner.css";

function Banner() {
    return (
        <div className='bannerContainer'>
            <Carousel data-bs-theme="dark">
                <Carousel.Item interval={6000}>
                    <img
                        className="d-block w-100"
                        src={require("../../assets/images/banner1.jfif")}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item interval={6000}>
                    <img
                        className="d-block w-100"
                        src={require("../../assets/images/banner2.jfif")}
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item interval={6000}>
                    <img
                        className="d-block w-100"
                        src={require("../../assets/images/banner3.jfif")}
                        alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item interval={6000}>
                    <img
                        className="d-block w-100"
                        src={require("../../assets/images/banner4.jfif")}
                        alt="Fourth slide"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default Banner;
