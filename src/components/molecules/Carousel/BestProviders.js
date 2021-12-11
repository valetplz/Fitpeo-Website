import React from "react"
import "./Carousel.css"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import PrimaryButton from "../../atoms/Button"
import ArrowForwardIcon from "@material-ui/icons/ArrowForward"

const BestProviders = () => {
  const settings = {
    dots: false,
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
    <div className='hmCrslWrpr bstPrvdrsCrsl'>
      <Slider {...settings}>
        <div>
          <div className='crslCard'>
            <div className='imgWrapper'>
              <img src='/assets/providerlogo.png' alt="provider_logo"/>
            </div>
            <div className='rtCntnr'>
              <p>
                At UPMC, Medicare patients who have enrolled in the Fitpeo
                program are 76% less likely to be readmitted to the hospital
                than those who are not enrolled
              </p>
              <h3>76% of lower readmisson</h3>
            </div>
          </div>
        </div>
        <div>
          <div className='crslCard'>
            <div className='imgWrapper'>
              <img src='/assets/providerlogo.png' alt="provider_logo"/>
            </div>
            <div className='rtCntnr'>
              <p>
                At UPMC, Medicare patients who have enrolled in the Fitpeo
                program are 76% less likely to be readmitted to the hospital
                than those who are not enrolled
              </p>
              <h3>76% of lower readmisson</h3>
            </div>
          </div>
        </div>
        <div>
          <div className='crslCard'>
            <div className='imgWrapper'>
              <img src='/assets/providerlogo.png' alt="provider_logo"/>
            </div>
            <div className='rtCntnr'>
              <p>
                At UPMC, Medicare patients who have enrolled in the Fitpeo
                program are 76% less likely to be readmitted to the hospital
                than those who are not enrolled
              </p>
              <h3>76% of lower readmisson</h3>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  )
}

export default BestProviders
