import React from "react"
import "./Carousel.css"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 4000,
    pauseOnHover: false,
    pauseOnFocus: false,
    lazyLoad: true,
    // nextArrow: <img src='/assets/arrowright.png' />,
    // prevArrow: <img src='/assets/arrowleft.png' />,
  }
  return (
    <div className='hmCrslWrpr tstMlCrsl'>
      <Slider {...settings}>
        <div>
          <div className='tstMlCard'>
            <div className='imgWrpr'>
              <img className='usrImg' src='/assets/user.png' alt="review_user"/>
            </div>
            <h3>Sophia</h3>
            <p className='lctn'>West Los Angeles, Miami</p>
            <div className='rtngWrpr d-flex align-items-center justify-content-center'>
              <img className='strImg' src='/assets/star_active.svg' alt="rating"/>
              <img className='strImg' src='/assets/star_active.svg' alt="rating"/>
              <img className='strImg' src='/assets/star_active.svg' alt="rating"/>
              <img className='strImg' src='/assets/star_active.svg' alt="rating"/>
              <img className='strImg' src='/assets/star.svg' alt="rating"/>
            </div>
            <p className='tstMnlCntnt'>
              It's always a pleasure to work with Will and his team. They are
              personable, responsive, and results-oriented!.
            </p>
          </div>
        </div>
        <div>
          <div className='tstMlCard'>
            <div className='imgWrpr'>
              <img className='usrImg' src='/assets/user.png' alt="review_user"/>
            </div>
            <h3>Olivia</h3>
            <p className='lctn'>Washington DC, America</p>
            <div className='rtngWrpr d-flex align-items-center justify-content-center'>
              <img className='strImg' src='/assets/star_active.svg' alt="rating"/>
              <img className='strImg' src='/assets/star_active.svg' alt="rating"/>
              <img className='strImg' src='/assets/star_active.svg' alt="rating"/>
              <img className='strImg' src='/assets/star_active.svg' alt="rating"/>
              <img className='strImg' src='/assets/star.svg' alt="rating"/>
            </div>
            <p className='tstMnlCntnt'>
              The Pacific Grove Chamber of Commerce would like to thank Fitpeo
              and Mr. Will Elkadi for all the efforts and suggestions that
              assisted us in better positioning ourselves in the area.
            </p>
          </div>
        </div>
      </Slider>
    </div>
  )
}

export default Testimonial
