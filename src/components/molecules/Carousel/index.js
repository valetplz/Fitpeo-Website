import React from "react"
import "./Carousel.css"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import PrimaryButton from "../../atoms/Button"
import ArrowForwardIcon from "@material-ui/icons/ArrowForward"

const HomeCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 6000,
    cssEase: "linear",
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          adaptiveHeight: true,
        },
      },
    ],
  }
  return (
    <div className='hmCrslWrpr'>
      <Slider {...settings}>
        <div>
          <div className='carouselWrapper text-left'>
            <h5>Fitpeo helps you in</h5>
            <h1>
              Remote Patient <br /> Monitoring
            </h1>
            <p className='frstSldTxt'>
              Different health organizations have different needs. Fitpeo
              Health’s platform for Remote Patient Monitoring empowers care
              where it is needed the most, while delivering advanced program
              management to set you apart.
            </p>
            <div className='btnWrpr d-flex align-items-center'>
              <PrimaryButton
                onClick={() => (window.location.href = "#contactus")}
                label={
                  <>
                    Contact Us
                    <ArrowForwardIcon
                      className='ml-2'
                      style={{ fontSize: 18 }}
                    />
                  </>
                }
                us
                class='mr-5'
              />
              <PrimaryButton
                label={
                  <>
                    Schedule a demo
                    <ArrowForwardIcon
                      className='ml-2'
                      style={{ fontSize: 18 }}
                    />
                  </>
                }
              />
            </div>
            <img className='carImg' src='/assets/carimage1.svg' alt="carousel_image"/>
          </div>
        </div>
        <div>
          <div className='carouselWrapper carouselTwo text-left'>
            <h5>Fitpeo helps you</h5>
            <h1>
              We share a passion for <br /> helping people recover.
            </h1>
            <p className='frstSldTxt'>
              Different health organizations have different needs. Fitpeo
              Health’s platform for Remote Patient Monitoring empowers care
              where it is needed the most, while delivering advanced program
              management to set you apart..
            </p>
            <div className='d-flex align-items-center'>
              <PrimaryButton
                onClick={() => (window.location.href = "#contactus")}
                label={
                  <>
                    Contact Us
                    <ArrowForwardIcon
                      className='ml-2'
                      style={{ fontSize: 18 }}
                    />
                  </>
                }
                us
                class='mr-5'
              />
            </div>
            <img className='carImg' src='/assets/carimage2.png' alt="carousel_image"/>
          </div>
        </div>
        <div>
          <div className='carouselWrapper carouselThree text-left'>
            <h5>Fitpeo helps you to</h5>
            <h1>
              Get Safe <br /> Get Screened <br /> Get Back
            </h1>
            <p className='frstSldTxt'>
              Protect your patients, employees and communities while getting
              back to work safely
            </p>
            <div className='d-flex align-items-center'>
              <PrimaryButton
                onClick={() => (window.location.href = "#contactus")}
                label={
                  <>
                    Contact Us
                    <ArrowForwardIcon
                      className='ml-2'
                      style={{ fontSize: 18 }}
                    />
                  </>
                }
                us
                class='mr-5'
              />
            </div>
            <img className='carImg' src='/assets/carimage3.png' alt="carousel_image"/>
          </div>
        </div>
      </Slider>
    </div>
  )
}

export default HomeCarousel
