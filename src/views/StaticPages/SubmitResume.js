import React from "react"
import "./Static.css"
import { Link } from "react-router-dom"
import Layout from "../../components/templates/Layout"
import TextInput from "../../components/atoms/Inputs/TextInput"
import PrimaryButton from "../../components/atoms/Button"
import SecondaryButton from "../../components/atoms/Button/SecondaryButton"
import TextArea from "../../components/atoms/Inputs/TextArea"
import { useFormik } from "formik"
import * as Yup from "yup"

const SubmitResume = () => {
  return (
    <div className='scdlDmoWrpr sbRsmWrpr pt-5'>
      <h4 className='text-left'>Send Us Your Resume</h4>
      <div className='row'>
        <div className='lftContainer col-md-7 col-xs-12'>
          <form className='demoForm'>
            <div className='row flex-wrap'>
              <div className='col-md-12 col-xs-12'>
                <TextInput
                  name='first_name'
                  placeholder='Eg. Jhon'
                  label='Enter Your Name'
                  icon={<img src='/assets/profile.svg' alt='profile' />}
                />
              </div>
              <div className='col-md-12 col-xs-12'>
                <TextInput
                  name='email'
                  placeholder='Eg. example@gmail.com'
                  label='Enter Your Email Address'
                  icon={<img src='/assets/mail.svg' alt='mail' />}
                />
              </div>
              <div className='col-md-12 col-xs-12'>
                <TextInput
                  name='phone'
                  placeholder='Eg. 9876543210'
                  label='Enter Your Phone Number'
                  icon={<img src='/assets/call.svg' alt='call' />}
                />
              </div>
              <div className='col-md-12 mt-5 text-left'>
                <SecondaryButton label='Upload Your Resume' />
              </div>
              <div className='col-12 col-xs-12 mt-2'>
                <PrimaryButton label='Apply' />
                {/* <SecondaryButton label='Apply' /> */}
              </div>
            </div>
          </form>
        </div>
        <div className='imgContainer col-md-5 col-xs-12 mt-5 pr-0'>
          <img className='' src='/assets/resume.svg' alt='contact image' />
        </div>
      </div>
    </div>
  )
}

export default SubmitResume
