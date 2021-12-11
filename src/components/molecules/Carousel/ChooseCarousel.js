import React from "react"
import "./Carousel.css"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import PrimaryButton from "../../atoms/Button"
import ArrowForwardIcon from "@material-ui/icons/ArrowForward"

const ChooseCarousel = () => {
  const settings = {
    dots: false,
    infinite: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 6000,
    cssEase: "linear",
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          // adaptiveHeight: true,
        },
      },
    ],
  }
  return (
    <div className='hmCrslWrpr pplChsCrsl'>
      <Slider {...settings}>
        <div>
          <div className='crslCard'>
            <h3>Ongoing, real time insights</h3>
            <p>
              Fitpeo includes Remote Patient Monitoring and it is a tech -
              equipped future of medical care. We offer a platform to both the
              healthcare providers and the patients to connect with each other
              and monitor healthcare via video calls
            </p>
          </div>
        </div>
        {/* <div>
          <div className='crslCard'>
            <h3>Ongoing, real time insights</h3>
            <p>
              Critical vitals, sleep quality, exercise, mood, relapse risks,
              engagement level & more. Critical vitals, sleep quality, exercise,
              mood, relapse risks, engagement level & more.
            </p>
          </div>
        </div>
        <div>
          <div className='crslCard'>
            <h3>Ongoing, real time insights</h3>
            <p>
              Critical vitals, sleep quality, exercise, mood, relapse risks,
              engagement level & more.
            </p>
          </div>
        </div> */}
      </Slider>
    </div>
  )
}

export default ChooseCarousel
