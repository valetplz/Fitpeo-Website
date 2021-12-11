import React from "react"
import "./Carousel.css"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import StarIcon from "@material-ui/icons/Star"

const DiseaseCovered = () => {
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
    <div className='hmCrslWrpr bstPrvdrsCrsl dssCvrdPdtCrsl'>
      <Slider {...settings}>
        <div>
          <div className='dssCvrdCrd'>
            <div className='imgWrapper'>
              <img src='/assets/Heart.svg' alt='medicine' />
            </div>
            <div className='rtCntnr text-left pl-5 '>
              <h2 className='mb-3'>Congestive Heart Failure</h2>
              <p>
                Congestive heart failure is a progressive condition that affects
                the pumping of the heart. It refers to the stage where fluid
                collects in the heart and affects the pumping activity of the
                heart.
              </p>
              <p>
                It is a life threatening condition leading to inefficient blood
                flow to the organs of the body. Patients with CHF are at risk
                and are in need of constant monitoring and care which is where
                Fitpeo comes into the picture. With the help of our healthcare
                programs , monitor the patients using remote care.
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className='dssCvrdCrd'>
            <div className='imgWrapper'>
              <img src='/assets/Chronic.svg' alt='medicine' />
            </div>
            <div className='rtCntnr text-left pl-5 '>
              <h2 className='mb-3'>Chronic obstructive pulmonary disease</h2>
              <p>
                These are a group of diseases that block the air flow to the
                lungs making it difficult to breathe. The damage caused to the
                lungs by COPD is irreversible . The most common of these
                diseases are Emphysema and chronic bronchitis. Emphysema leads
                to slow degradation of the air sacs in the lungs and bronchitis
                leads to inflammation and narrowing of the tubes leading to
                mucus accumulation. It is a chronic disease and left untreated
                can lead to a lot of health complications. Certain cures for
                COPD include a change in lifestyle and the personally curated
                Fitpeo health care programs help in monitoring the status quo of
                the patients.
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className='dssCvrdCrd'>
            <div className='imgWrapper'>
              <img src='/assets/Diabetics.svg' alt='medicine' />
            </div>
            <div className='rtCntnr text-left pl-5 '>
              <h2 className='mb-3'>Diabetic</h2>
              <p>
                Diabetes also known as diabetes mellitus , is a metabolic
                disease causing blood sugar levels to rise . It is one of the
                most common health conditions worldwide. There are different
                complications of diabetes like heart diseases , neuropathy ,
                nephropathy , vision loss , hearing loss, ineffective wound
                healing etc.
              </p>
              <p>
                Patients suffering from diabetes are in constant need of care
                and with Fitpeo that is as easy as clicking a button.
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className='dssCvrdCrd'>
            <div className='imgWrapper'>
              <img src='/assets/Cancer.svg' alt='medicine' />
            </div>
            <div className='rtCntnr text-left pl-5 '>
              <h2 className='mb-3'>Cancer</h2>
              <p>
                Cancer is a broad term used to describe changes such as
                uncontrolled growth and at the cellular level and cellular
                division. Cancer is majorly classified depending on the organ it
                affects into sarcoma , leukemia, lymphoma , melanoma ,etc.
              </p>
              <p>
                A cancer patient needs constant care and monitoring and here is
                how Fitpeo fits in. We offer personalized healthcare to patients
                with the added benefit of remote patient monitoring. On the
                Fitpeo app , healthcare providers can indulge into real time
                monitoring , keeping track of the patients vitals , daily
                exercises , etc.
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className='dssCvrdCrd'>
            <div className='imgWrapper'>
              <img src='/assets/hypertension.svg' alt='medicine' />
            </div>
            <div className='rtCntnr text-left pl-5 '>
              <h2 className='mb-3'>Hypertension</h2>
              <p>
                Hypertension also referred as high blood pressure is a chronic
                cardiovascular condition that is caused due to the development
                of a high pressure on the walls of the arteries.
              </p>
              <p>
                The patients need to keep a regular check on their diet and
                should avoid higher intake of salts. High blood pressure leads
                to heart conditions like myocardial infarction, aneurysm , etc.
              </p>
              <p>
                Hypertension can be kept under control by regular exercise and
                Fitpeo can help the healthcare providers keep a track of the
                patients activities , diets , vitals like blood pressure , body
                weight, etc.
              </p>
            </div>
          </div>
        </div>
        {/* <div>
          <div className='dssCvrdCrd'>
            <div className='imgWrapper'>
              <img src='/assets/medicine.png' alt="medicine"/>
            </div>
            <div className='rtCntnr text-left pl-5 '>
              <h2 className='mb-3'>Weight management/obesity</h2>
              <p>
                Obesity is one of the leading cause of health conditions in the
                world. It is defined as having excessive body fat due to a lack
                of exercise and normal activities.
              </p>
              <p>
                Obesity goes hand in hand with hypertension and other chronic
                health conditions . It can be controlled by indulging in regular
                exercises. The health care providers can use the Fitpeo app to
                keep a track of their patients exercising activities , the
                number of calories burnt, etc. Keep a E medical record of your
                patients using an tech - integrated platform.
              </p>
            </div>
          </div>
        </div> */}
        <div>
          <div className='dssCvrdCrd'>
            <div className='imgWrapper'>
              <img src='/assets/Asthma.svg' alt='medicine' />
            </div>
            <div className='rtCntnr text-left pl-5 '>
              <h2 className='mb-3'>Asthma</h2>
              <p>
                Asthma is a condition in which airways narrow and swell and
                produce more amount mucus. It is a non curable disease but it
                can be controlled by making changes in the lifestyle. Fitpeo can
                help healthcare providers in helping patients by giving remote
                care
              </p>
              <p>
                Pain management <br /> Pain management is essential when dealing
                with diseases like cancer or if the patient has recently
                undergone surgery. Pain management includes different therapies
                and healthcare providers can monitor patients seamlessly using
                an integrated platform like Fitpeo.
              </p>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  )
}

export default DiseaseCovered
