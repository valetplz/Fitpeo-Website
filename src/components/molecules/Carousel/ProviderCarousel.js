import React from "react"
import "./Carousel.css"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import PrimaryButton from "../../atoms/Button"
import ArrowForwardIcon from "@material-ui/icons/ArrowForward"

const ProviderCarousel = () => {
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
  }
  return (
    <div className='hmCrslWrpr prvdrCarsl'>
      <Slider {...settings}>
        <div>
          <div className='carouselWrapper text-left'>
            <h1>
              Keep patients <br /> Healthy at <br /> Home
            </h1>
            <p className='frstSldTxt'>
              Do you provide patient care? Fitpeo Health helps keep high-risk
              and chronically ill patients out of the ER and hospital… while
              improving collaboration across care settings to manage population
              health
            </p>
            <div className='d-flex align-items-center'>
              <PrimaryButton
                label={
                  <>
                    Request a demo
                    <ArrowForwardIcon
                      className='ml-2'
                      style={{ fontSize: 18 }}
                    />
                  </>
                }
              />
            </div>
            <img className='carImg' src='/assets/prcarimage1.png' alt="carousel_image"/>
          </div>
        </div>
        <div>
          <div className='carouselWrapper text-left'>
            <h1>
              Keep patients <br /> Healthy at <br /> Home
            </h1>
            <p className='frstSldTxt'>
              Do you provide patient care? Fitpeo Health helps keep high-risk
              and chronically ill patients out of the ER and hospital… while
              improving collaboration across care settings to manage population
              health
            </p>
            <div className='d-flex align-items-center'>
              <PrimaryButton
                label={
                  <>
                    Request a demo
                    <ArrowForwardIcon
                      className='ml-2'
                      style={{ fontSize: 18 }}
                    />
                  </>
                }
              />
            </div>
            <img className='carImg' src='/assets/prcarimage1.png' alt="carousel_image"/>
          </div>
        </div>
        <div>
          <div className='carouselWrapper text-left'>
            <h1>
              Keep patients <br /> Healthy at <br /> Home
            </h1>
            <p className='frstSldTxt'>
              Do you provide patient care? Fitpeo Health helps keep high-risk
              and chronically ill patients out of the ER and hospital… while
              improving collaboration across care settings to manage population
              health
            </p>
            <div className='d-flex align-items-center'>
              <PrimaryButton
                label={
                  <>
                    Request a demo
                    <ArrowForwardIcon
                      className='ml-2'
                      style={{ fontSize: 18 }}
                    />
                  </>
                }
              />
            </div>
            <img className='carImg' src='/assets/prcarimage1.png' alt="carousel_image"/>
          </div>
        </div>
      </Slider>
    </div>
  )
}

export default ProviderCarousel
