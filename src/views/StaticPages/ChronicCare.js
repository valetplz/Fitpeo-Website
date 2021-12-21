import React from "react"
import "./Static.css"
import { Link } from "react-router-dom"
import Layout from "../../components/templates/Layout"
import { useHistory } from "react-router-dom";

const ChronicCare = () => {
  const history = useHistory();

  return (
    <Layout>
      <div className='staticWrapper chronicPgWrpr'>
        <h2 className='text-left'>
          <b>Chronic care management</b>
        </h2>
        <h4>
          <b>What is chronic care managment?</b>
        </h4>
        <p>
          Chronic care management (CCM) services are generally non-face-to-face
          services provided to Medicare beneficiaries who have multiple (two or
          more) chronic conditions expected to last at least 12 months, or until
          the death of the patient.
        </p>
        <p>
          The Centers for Medicare & Medicaid Services (CMS) recognizes that CCM
          services are critical components of primary care that promote better
          health and reduce overall health care costs.
        </p>
        <div className='chartWrapper'>
          <img src='/assets/chart.svg' alt='chart' />
        </div>
        <h3 className='text-left mt-5 mb-4'>
          <b>Remote Patient Monitoring for Chronic Conditions</b>
        </h3>
        <p>
          One of the most effective treatments for chronic conditions is using
          Remote Patient Monitoring with Fitpeo RPM connected devices. These
          connected Remote Patient Monitoring devices can be used to monitor
          chronic conditions like Diabetes, Hypertension, and even acute
          conditions like COVID-19. By using Remote Patient Monitoring for
          Diabetes, Remote Patient Monitoring for Hypertension and Remote
          Patient Monitoring for COVID-19, those who suffer from chronic
          conditions will know early when possible problems begin.
        </p>
        <div className='adTxtWrpr mt-5'>
          <div className='row  flex-wrap-reverse'>
            <div className='col-md-8 col-12'>
              <h2 className='mb-3 text-left'>Identify Chronic Conditions</h2>
              <p>
                If any patient is identified as having two chronic conditions by
                your EMR or an AWV, we would automatically register that person
                as eligible for CCM. We help you in guiding you through setting
                up patient profiles manually, with simple and stepwise process
                created for ease of use
              </p>
            </div>
            <div className='col-md-4 col-12'>
              <h1 className='dvNmbr'>1</h1>
            </div>
          </div>
          <div className='row scndWrpr my-5'>
            <div className='col-md-4 col-12'>
              <h1 className='dvNmbr'>2</h1>
            </div>
            <div className='col-md-8 col-12 txtCnt'>
              <h2 className='mb-3'>Ensure Compliance</h2>
              <p>
                If any patient is identified as having two chronic conditions by
                your EMR or an AWV, we would automatically register that person
                as eligible for CCM. We help you in guiding you through setting
                up patient profiles manually, with simple and stepwise process
                created for ease of use
              </p>
            </div>
          </div>
          <div className='row  flex-wrap-reverse'>
            <div className='col-md-8 col-12'>
              <h2 className='mb-3 text-left'>
                Creating a Customised Care Plan
              </h2>
              <p>
                Crafting a detailed care plan requires time. Fitpeo does it
                quickly, replacing with catch-all documents with templates that
                can be edited as per the requirement with organised quick
                check-boxes, helping practitioners to choose the right items for
                each patient quickly.
              </p>
            </div>
            <div className='col-md-4 col-12'>
              <h1 className='dvNmbr'>3</h1>
            </div>
          </div>
        </div>
        <div className='row stprContainer mt-5'>
          <div className='col-md-4 col-12 pr-0'>
            <div className='ttlPrt text-center'>Build</div>
            <p className='text-center px-4'>
              Choose the conditions (one or more) and use our pre-designed
              template builder to select the best for your patient’s condition.
            </p>
          </div>
          <div className='col-md-4 col-12 px-0 mdlCntnr'>
            <div className='ttlPrt text-center'>Customize</div>
            <p className='text-center px-4'>
              Edit your pre-designed plan more, adding custom entries, changing
              or deleting items.
            </p>
          </div>
          <div className='col-md-4 col-12 pl-0 lstCntnr'>
            <div className='ttlPrt text-center'>Review</div>
            <p className='text-center px-4'>
              Check through the easy to read overview before finalizing and
              closing out your plan.
            </p>
          </div>
        </div>
        <div className='row scndWrpr my-5'>
          <div className='col-md-4 col-12'>
            <h1 className='dvNmbr'>4</h1>
          </div>
          <div className='col-md-8 col-12 txtCnt'>
            <h2 className='mb-3'>Get Credit for Your 20 Minutes a Month</h2>
            <p>
              Fitpeo’s systematics process helps you in taking care of all your
              chronic care management programs. We make it simple for your
              program to be CMS compliant and make sure that you get paid for
              time spent.
            </p>
          </div>
        </div>
        <div className='ptsWrpr mt-5'>
          <h2 className='text-left mb-3'>A Pick your Patients</h2>
          <p>
            With the Fitpeo solution you can simply identify patients which
            require follow up. You can also check how much time you’ve logged
            per patient and plan your schedule accordingly.
          </p>
        </div>
        <div className='ptsWrpr mt-5'>
          <h2 className='text-left mb-3'>Interact Electronically</h2>
          <p>
            Communicate effectively with patients, re-fill prescriptions, review
            diagnostics and make referrals, then log time spent via the Fitpeo’s
            solution platform to keep an accurate record of billable effort.
          </p>
        </div>
        <div className='ptsWrpr mt-5'>
          <h2 className='text-left mb-3'>Clock Time Spent</h2>
          <p>
            Fitpeo makes it easy to log time spent on monthly communication with
            patients. Simply click to start the timer, and click to stop.
          </p>
        </div>

        <div className='row  flex-wrap-reverse my-5'>
          <div className='col-md-8 col-12'>
            <h2 className='mb-3 text-left'>Bill (and Get Paid) Effectively</h2>
            <p>
              The most frustrating part of CCM is trying to get reimbursed.
              You’ve done the work, now get the reward. The Fitpeo CCM Platform
              collects records of calls and other interaction, connects them to
              the appropriate patients, and then generates a single billing
              report. Simply review and send to your biller. It’s how providers
              like you make money with CCM. Check out how much an average office
              can earn with the right process in place:
            </p>
          </div>
          <div className='col-md-4 col-12'>
            <h1 className='dvNmbr'>5</h1>
          </div>
        </div>

        <h2 className='ml-auto gradTxt d-flex align-items-center flex-wrap'>
          <span>Est. Monthly Generated Revenue</span> $ 6,500
        </h2>

        <div className='row sIaCntnr'>
          <div className='col-md-8 col-12'>
            <h2>See How Fitpeo can Affects Your Bottom Line!</h2>
            <p>
              Compliance. Credit for chronic care services. Reimbursement. Easy
              eligibility. Streamlined. Simple remote patient monitoring. Fitpeo
              makes it possible. Schedule a live demo and let us show you how.
            </p>
          </div>
          <div className='col-md-4 col-12 d-flex btnContainer'>
            <button className='btn gradButton' onClick={() => history.push("/schedule_demo")}>See it in Action</button>
          </div>
        </div>

        <div className='row mt-5'>
          <div className='col-md-5 col-12'>
            <img
              className='chronicImg1'
              src='/assets/chronic1.png'
              alt='carousel image'
            />
          </div>
          <div className='col-md-7 col-12'>
            <h4>
              <b>Chronic Patient Monitoring for Diabetes</b>
            </h4>
            <p>
              A key aspect of controlling a patient’s issues with diabetes is to
              ensure the patient’s blood sugar remains at an acceptable level.
              Using Fitpeo RPM’s Remote Patient Monitoring for Diabetes, a
              physician can quickly tell if a blood sugar level is of concern.
              By using Fitpeo RPM’s Remote Patient Monitoring for Diabetes,
              patients receive an easy-to-use connected glucose meter monitored
              by Fitpeo RPMs team of care specialists. Treating diabetes is not
              easy but staying connected through Fitpeo RPM’s Remote Patient
              Monitoring for Diabetes makes it a bit easier.
            </p>
          </div>
        </div>
        <h4 className='mt-5'>
          Benefits of Fitpeo Remote Diabetes Patient Monitoring
        </h4>
        <p>
          Using Fitpeo RPM’s Remote Patient Monitoring for Diabetes is a great
          benefit for physicians and patients alike. Its simplicity is seen
          because it is no different for the user than a standard glucose meter.
          Behind the scenes, Fitpeo RPM’s Diabetes Remote Patient Monitoring
          connects automatically to the Fitpeo RPM’s software and alerts our
          team of medical professionals if there is an issue. Plus, if readings
          are not being taken by patients, our team will work to ensure the
          proper care is being taken for diabetes patients.
        </p>
        <hr className='my-5' />
        <div className='row mt-5'>
          <div className='col-md-5 col-12'>
            <img
              className='chronicImg1'
              src='/assets/chronic2.jpg'
              alt='hypertension image'
            />
          </div>
          <div className='col-md-7 col-12'>
            <h4>
              <b>Chronic Patient Monitoring for Hypertension</b>
            </h4>
            <p>
              Everyone knows that hypertension can be fatal. If a patient’s
              blood pressure becomes too high, the risk is great for a heart
              attack or a stroke. By utilizing Fitpeo RPM’s Remote Patient
              Monitoring for Hypertension, it is easy to monitor your patients’
              blood pressure and be alerted if a fatal event may be starting.
              Every patient who uses Fitpeo RPM’s Hypertension Remote Patient
              Monitoring receives an easy-to-use connected blood pressure cuff,
              monitored by Fitpeo RPM’s team of care specialists. Fitpeo RPM’s
              Remote Patient Monitoring for Hypertension helps save lives
              through today’s technology.
            </p>
          </div>
        </div>
        <h4 className='mt-5'>
          <b>Benefits of Fitpeo Remote Hypertension Patient Monitoring</b>
        </h4>
        <p>
          When managing the chronic condition of hypertension, Fitpeo RPM’s
          Remote Patient Monitoring for Hypertension is simple, cost-effective,
          and high tech. First, Fitpeo RPM uses a team of medical specialists to
          monitor any readings provided by our connected blood pressure cuffs.
          That team keeps in touch with hypertension patients using Remote
          Patient Monitoring to ensure that blood pressure cuff readings are
          taken as required by a physician. Finally, the Fitpeo RPM connected
          blood pressure cuff is simple to use and does not require any extra
          steps by the patient. Using Fitpeo RPM’s hypertension Remote Patient
          Monitoring provides a great way to keep patient healthier.
        </p>
        <hr className='my-5' />
        <div className='row mt-5'>
          <div className='col-md-5 col-12'>
            <img
              className='chronicImg1'
              src='/assets/chronic3.png'
              alt='cpm image'
            />
          </div>
          <div className='col-md-7 col-12'>
            <h4>
              <b>Chronic Patient Monitoring for COVID-19</b>
            </h4>
            <p>
              With COVID-19 treatments, it has been shown to be critical to know
              your health care statistics, especially with oxygen. While not a
              chronic condition, Fitpeo RPM’s Remote Patient Monitoring for
              COVID-19 allows patients to receive much needed health care
              monitoring without leaving the comfort of their home. Fitpeo RPM’s
              COVID-19 Remote Patient Monitoring can provide an easy-to-use
              connected oximeter. Monitoring COVID-19 conditions is a critical
              step in treatment of this deadly disease and Fitpeo RPM’s team of
              health care practitioners can ensure COVID-19 patients received
              that critical care.
            </p>
          </div>
        </div>
        <h4 className='mt-5'>
          <b>Benefits of Fitpeo Remote COVID-19 Patient Monitoring</b>
        </h4>
        <p>
          One thing learned over the past year in working with COVID-19 patients
          is the best course of action is treatment at home. Only in emergency
          situations, should a patient go to the hospital. The best way to
          ensure a patient is treated at home is using Fitpeo RPMs Remote
          Patient Monitoring for COVID-19 patients. Using this system, it’s easy
          for a patient to test their oxygen levels and have those results sent
          directly to the Fitpeo RPM care professionals team. This eliminates
          the need for the COVID-19 patient to leave the house, reducing
          infections of others and bringing greater results to the health of
          people suffering from COVID-19.
        </p>
        <div className='blgCntnr mt-5'>
          <h2 className='text-center mb-3'>Our Blogs</h2>
          <p className='text-center mt-1'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget
            aliquet egestas quis tristique ornare velit. ing elit. Eget aliquet
            egestas quis tristique ornare velit.
          </p>
          <div className='blgGrdWrpr'>
            <div className='blgCard'>
              <div className='blgImg'>
                <img src='/assets/blogImg.png' alt='blog image' />
                <p>May 28,2021</p>
              </div>
              <div className='blgDtls'>
                <p>
                  New technologies like support apps and wearables offer an
                  opportunity to accelerate case management and patient
                  monitoring for behavioral health treatment.
                </p>
                <Link rel="preload"   to='/'>
                  <u>Read more</u>
                </Link>
              </div>
            </div>
            <div className='blgCard'>
              <div className='blgImg'>
                <img src='/assets/blogImg.png' alt='blog image' />
                <p>May 28,2021</p>
              </div>
              <div className='blgDtls'>
                <p>
                  New technologies like support apps and wearables offer an
                  opportunity to accelerate case management and patient
                  monitoring for behavioral health treatment.
                </p>
                <Link rel="preload"   to='/'>
                  <u>Read more</u>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default ChronicCare
