import React from "react"
import "./Carousel.css"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import StarIcon from "@material-ui/icons/Star"

const EnrolledProviders = () => {
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
    <div className='hmCrslWrpr bstPrvdrsCrsl enrldPrvdrsCrsl'>
      <Slider {...settings}>
        <div>
          <div className='prvdrsCard'>
            <div className='imgWrapper'>
              <img src='/assets/providerlogo.png' alt="provider_logo"/>
            </div>
            <div className='rtCntnr text-left pl-5'>
              <h2 className='mb-3'>Cleveland Clinic</h2>
              <p>
                Cleveland Clinic is a nonprofit American academic medical center
                based in Cleveland, Ohio. Owned and operated by the Cleveland
                Clinic Foundation, an Ohio nonprofit corporation established in
                1921
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className='prvdrsCard'>
            <div className='imgWrapper'>
              <img src='/assets/providerlogo.png' alt="provider_logo"/>
            </div>
            <div className='rtCntnr text-left pl-5'>
              <h2 className='mb-3'>Cleveland Clinic</h2>
              <p>
                Cleveland Clinic is a nonprofit American academic medical center
                based in Cleveland, Ohio. Owned and operated by the Cleveland
                Clinic Foundation, an Ohio nonprofit corporation established in
                1921
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className='prvdrsCard'>
            <div className='imgWrapper'>
              <img src='/assets/providerlogo.png' alt="provider_logo"/>
            </div>
            <div className='rtCntnr text-left pl-5'>
              <h2 className='mb-3'>Cleveland Clinic</h2>
              <p>
                Cleveland Clinic is a nonprofit American academic medical center
                based in Cleveland, Ohio. Owned and operated by the Cleveland
                Clinic Foundation, an Ohio nonprofit corporation established in
                1921
              </p>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  )
}

export default EnrolledProviders
