import React from "react"
import "./Download.css"
import Layout from "../components/templates/Layout"

const Download = () => {
  return (
    <div className='hmPgWrpr dwnlodWrpr'>
      <Layout>
        <div className='carouselWrapper dsgnElmntWrp text-left d-flex align-items-start'>
          <div className='lftWrpr col-md-6 col-xs-12'>
            <h1>
              <b>Download Our Remote Patient Application Here</b>
            </h1>
            <img className='dsgnElemnt' src='/assets/designellipse.svg' alt="ellipse"/>
            <p>
            Download our remote patient monitoring mobile application.
            </p>
            <div className='d-flex align-items-center mt-5 pr-4 dwnldBtn'>
              <a
                href='https://apps.apple.com/us/app/fitpeo/id1569109993'
                target='blank'
              >
                <img src='/assets/app_store.svg' className='mr-5' alt="appstore logo"/>
              </a>
              <a
                href='https://play.google.com/store/apps/details?id=com.fitpeo.fitpeo&hl=en_US&gl=US'
                target='blank'
              >
                <img src='/assets/play_store.svg' with="auto" height="auto" alt="playstore logo"/>
              </a>
            </div>
          </div>
          <div className='imgWrapperr col-md-6 col-xs-12'>
            <img className='dwnlPdtImg' src='/assets/downloadad.png' alt="download_image"/>
          </div>
        </div>
      </Layout>
    </div>
  )
}

export default Download
