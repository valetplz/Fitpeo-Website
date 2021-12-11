import React, {useEffect} from "react"
import "./Static.css"
import { Link } from "react-router-dom"
import Layout from "../../components/templates/Layout"
import { useDispatch } from "react-redux";
import { getBillingDetails } from "../../actions"

const CPTCodes = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getBillingDetails())
  }, [])

  return (
    <Layout>
      <div className='staticWrapper chronicPgWrpr cptCodesWrpr'>
        <h2 className='text-left'>Medicare CPT Codes</h2>
        <h4>
          <b>What is CPT Codes?</b>
        </h4>
        <p>
          Current Procedural Terminology or CPT codes are developed by the
          American Medical Association (AMA) to describe a wide range of health
          care services provided by physicians, hospitals and other health care
          professionals. These codes are utilized to communicate with: other
          physicians, hospitals, and insurers for claims processing.
        </p>
        <p>
          By providing Remote Patient Monitoring, also known as Remote
          Physiologic Monitoring, a practice not only provides better healthcare
          but also improves healthcare practice revenues. Using connected
          devices, physicians can monitor patients with diabetes, hypertension,
          COPD and more remotely and receive reimbursement through CMS’s CPT
          codes for Remote Patient Monitoring.
        </p>
        <h3 className='gdHdTxt mt-5 mb-4'>CPT Code 99453</h3>
        <p className='mb-0'>
          CPT Code 99453 is the setup code for Remote Patient Monitoring and
          reimburses physicians for the time it takes to help patients set up
          and learn how to use their devices.
        </p>
        <h4 className='text-left mt-4 mb-3'>
          What Devices Are Used for CPT Code 99453?
        </h4>
        <p>
          There are two major categories of devices used for remote patient
          monitoring.
        </p>
        <p>
          The first category includes the devices that directly measure patient
          physiologic data. These devices must be FDA-recognized medical devices
          and could include:
        </p>
        <ul>
          <li>Blood Pressure Cuff</li>
          <li>Pulse Oximeter</li>
          <li>Heart Rate Monitor</li>
          <li>Glucometer</li>
          <li>Thermometer</li>
          <li>Weight Scale</li>
          <li>Respiratory Flow Rate Monitor</li>
        </ul>
        <h4 className='mt-5'>How Much Does Medicare Reimburse?</h4>
        <p>
          As of 2021, the average reimbursement for CPT Code 99453 (non-facility
          RPM setup){" "}
        </p>
        <h3 className='sdGrdTxt'>Once Setup cost : $19.90</h3>
        <hr className='my-5' />

        <h3 className='gdHdTxt mt-5 mb-4'>CPT Code 99457</h3>
        <h4 className='text-left mt-4 mb-3'>
          Device supply with daily recording and programmed alerts
        </h4>
        <p>
          Under CMS’ CPT Code 99454, physicians are reimbursed for the daily
          monitoring of patients using Remote Patient Monitoring, also known as
          Remote Physiologic Monitoring. Every day patients use the connected
          devices – such as scales and blood pressure cuffs for hypertension,
          oximeters for COPD and glucose meters for diabetes – and healthcare
          data transfers to care professionals, showing the physician critical
          changes in a patient’s illness and allowing for new treatments to
          start before it becomes critical.
        </p>
        <h4 className='mt-5'>How Much Does Medicare Reimburse?</h4>
        <p>
          As of 2021, the average reimbursement for CPT Code 99457 (non-facility
          RPM setup)
        </p>
        <h3 className='sdGrdTxt'>Every 30 days : $61.30 </h3>
        <hr className='my-5' />

        <h3 className='gdHdTxt mt-5 mb-4'>CPT Code 99458</h3>
        <h4 className='text-left mt-4 mb-3'>
          The collection & interpretation of patient data by QHCP; minimum 30
          min/month
        </h4>
        <p>
          The first CMS CPT code used for Remote Patient Monitoring or Remote
          Physiologic Monitoring was CPT Code 99091 and it differs slightly from
          CPT Code 99457 and CPT Code 99458. In fact, physicians can not bill
          for CPT Code 99457/99458 in conjunction with CPT Code 99091. CPT Code
          99091 is for 30 minutes of time from a qualified healthcare provider
          or physician, but it does not require direct patient interaction.
          Finally, there are a wider range of connected devices allowed under
          CPT Code 99091 than other codes.
        </p>
        <h4 className='mt-5'>How Much Does Medicare Reimburse?</h4>
        <p>
          As of 2021, the average reimbursement for CPT Code 99458 (non-facility
          RPM setup)
        </p>
        <h3 className='sdGrdTxt'>Every 30 days : $77.78 </h3>
        <hr className='my-5' />

        <h3 className='gdHdTxt mt-5 mb-4'>CPT Code 99091</h3>
        <h4 className='text-left mt-4 mb-3'>
          The collection & interpretation of patient data by QHCP; minimum 30
          min/month
        </h4>
        <p>
          The first CMS CPT code used for Remote Patient Monitoring or Remote
          Physiologic Monitoring was CPT Code 99091 and it differs slightly from
          CPT Code 99457 and CPT Code 99458. In fact, physicians can not bill
          for CPT Code 99457/99458 in conjunction with CPT Code 99091. CPT Code
          99091 is for 30 minutes of time from a qualified healthcare provider
          or physician, but it does not require direct patient interaction.
          Finally, there are a wider range of connected devices allowed under
          CPT Code 99091 than other codes.
        </p>
        <h4 className='mt-5'>How Much Does Medicare Reimburse?</h4>
        <p>
          As of 2021, the average reimbursement for CPT Code 99091 (non-facility
          RPM setup)
        </p>
        <h3 className='sdGrdTxt'>Every 30 days : $53.78 </h3>
      </div>
    </Layout>
  )
}

export default CPTCodes
