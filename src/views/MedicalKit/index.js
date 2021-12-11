import React from "react"
import "./MedicalKit.css"
import { useHistory } from "react-router-dom"
import PrimaryButton from "../../components/atoms/Button"
import { Icon, InlineIcon } from "@iconify/react"
import arrowLeft from "@iconify/icons-feather/arrow-left"
import ReactPlayer from "react-player"
import playIcon from "@iconify/icons-fa-solid/play"
import DiseaseCovered from "../../components/molecules/Carousel/DiseaseCovered"
import Layout from "../../components/templates/Layout"

const MedicalKit = () => {
  const history = useHistory()

  return (
    <Layout>
      <div className='mdKitWrpr p-5'>
        {/* <div className='bckBtn text-left'>
          <PrimaryButton
            label={<Icon icon={arrowLeft} />}
            onClick={() => history.push("/")}
          />
        </div> */}
        <h3 className='text-center cstmHdr'>
          <b>Unlock health insights</b>
        </h3>
        <p className='text-center mt-5 pgInfoTxt'>
          Fitpeo tracks multiple vital signs to see the whole patient and
          optimize the care of one or more chronic diseases
        </p>
        <div className='multiImgContainer d-flex align-items-center justify-content-center'>
          <div className='lftImgContainer text-right pr-5'>
            <div className='infoIconContnr d-flex align-items-center justify-content-end'>
              <p className='m-0'>Fipeo Oximeter</p>
              <img src='/assets/oximeter.svg' alt="oximeter"/>
            </div>
            <div className='infoIconContnr d-flex align-items-center justify-content-end mr-5 my-5'>
              <p className='m-0'>Fipeo Pulse Rate</p>
              <img src='/assets/pulserate.svg' alt="pulse rate"/>
            </div>
            <div className='infoIconContnr d-flex align-items-center justify-content-end'>
              <p className='m-0'>Fipeo Blood Pressure</p>
              <img src='/assets/bloodpressure.svg' alt="blood pressure"/>
            </div>
          </div>
          <div className='mnImgContainer'>
            <img src='/assets/medikitwomen.svg' alt="medikit women"/>
          </div>
          <div className='rtImgContainer pl-5'>
            <div className='infoIconContnr d-flex align-items-center'>
              <img src='/assets/ecg.svg' alt="ecg"/>
              <p className='m-0'>Fipeo ECG</p>
            </div>
            <div className='infoIconContnr d-flex align-items-center ml-5 my-5'>
              <img src='/assets/weightmachine.svg' alt="weight machine"/>
              <p className='m-0'>Fipeo Weight Machine</p>
            </div>
            <div className='infoIconContnr d-flex align-items-center'>
              <img src='/assets/activity.svg' alt="activity"/>
              <p className='m-0'>Fipeo Activityc</p>
            </div>
          </div>
        </div>
        <div className='hwHlthKitWrpr mt-5 pt-4'>
          <h2 className='inrHdr'>How to use health kit</h2>
          <p className='mx-auto mt-4'>
            Eliminating the worry, confusion, and frustration of long waits and
            endless automated phone systems. Now your whole family can go back
            to sleep knowing you got top-level care without ever having to
            worry..
          </p>
        </div>
        <div className='medivdoWrpr d-flex align-items-start'>
          <div className='vdoContainer'>
            <ReactPlayer
              width='100%'
              height='520px'
              url='https://res.cloudinary.com/dkdlhh3ni/video/upload/v1623341691/MedicalKit_Video_syuboy.mp4 '
              // light
              muted
              playsinline
              playing
              loop
              playIcon={
                <div className='plIcnWrp'>
                  <Icon
                    icon={playIcon}
                    style={{ color: "#31456a", fontSize: "30px" }}
                  />
                </div>
              }
            />
          </div>
          <div className='rttxtContainer'>
            <h4>
              <b>Finger Pulse Oximeter</b>
            </h4>
            <p>
              Knowing pulse rate and oxygen levels is a key step in any medical
              diagnosis. With the easy-to-use Finger Pulse Oximeter, you just
              place it on your finger to accurately measure heart rate and
              oxygen levels, quickly giving you and your doctor valuable
              information about your health. The readings of the pulse oximeter
              is recorded in the FITPEO app which helps you maintain a medical
              history.
            </p>
          </div>
        </div>
        <div className='medivdoWrpr rvrsWrp d-flex align-items-start'>
          <div className='rttxtContainer pr-5 pl-0'>
            <h4>
              <b>Weight machine</b>
            </h4>
            <p>
              Accurate measurement of weight is important for medical diagnosis.
              With a user-friendly weighing machine , you can measure the exact
              body weight of your family members. This would give your doctor
              valuable information to proceed further with the diagnosis.
            </p>
          </div>
          <div className='vdoContainer'>
            <ReactPlayer
              width='100%'
              height='520px'
              url='https://res.cloudinary.com/dkdlhh3ni/video/upload/v1623342023/WeightMachine_lykbfl.mp4'
              // light
              muted
              playsinline
              playing
              muted
              loop
              playIcon={
                <div className='plIcnWrp'>
                  <Icon
                    icon={playIcon}
                    style={{ color: "#31456a", fontSize: "30px" }}
                  />
                </div>
              }
            />
          </div>
        </div>
        <div className='medivdoWrpr d-flex align-items-start'>
          <div className='vdoContainer'>
            <ReactPlayer
              width='100%'
              height='520px'
              url='https://res.cloudinary.com/dkdlhh3ni/video/upload/v1623342112/BloodPressure_dlq1zq.mp4'
              // light
              muted
              playsinline
              playing
              muted
              loop
              playIcon={
                <div className='plIcnWrp'>
                  <Icon
                    icon={playIcon}
                    style={{ color: "#31456a", fontSize: "30px" }}
                  />
                </div>
              }
            />
          </div>
          <div className='rttxtContainer'>
            <h4>
              <b> Blood pressure monitor</b>
            </h4>
            <p>
              Fast , accurate and reliable checking of blood pressures is a key
              step in all sorts of diagnostics. Blood pressure is intimately
              related to underlying health issues and measuring it using
              automated devices gives your medical practitioner just the
              information required for further diagnosis.
            </p>
            <p>
              This is indexed and maintained in the FITPEO app and makes
              collectiob of data collection for treatment.
            </p>
          </div>
        </div>
        <div className='crslHdr mt-5 pt-4 text-left'>
          <h2 className='inrHdr'>Diseases covered</h2>
          <p className='mt-2'>
            Fitpeo begins with over 90 disease-specific clinical protocols that
            can be easily modified for each member’s conditions and
            comorbidities. These include, but are not limited to:
          </p>
          <DiseaseCovered />
        </div>
      </div>
    </Layout>
  )
}

export default MedicalKit
