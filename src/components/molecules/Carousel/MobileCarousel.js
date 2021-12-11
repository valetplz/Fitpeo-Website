import React from "react"
import "./Carousel.css"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const MobileCarousel = () => {
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
    <div className='hmCrslWrpr hmMblCrsl'>
      <Slider {...settings}>
        <div>
          <img src='/assets/mobile1.png' alt="mobile_carousel_image"/>
        </div>
        <div>
          <img src='/assets/mobile2.png' alt="mobile_carousel_image"/>
        </div>
        <div>
          <img src='/assets/mobile3.png' alt="mobile_carousel_image"/>
        </div>
      </Slider>
    </div>
  )
}

export default MobileCarousel
