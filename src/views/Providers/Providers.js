import React, { useEffect, useState } from "react";
import "../Home/Home.css";
import { useHistory } from "react-router-dom";
import HomeCarousel from "../../components/molecules/Carousel";
import Layout from "../../components/templates/Layout";
import ReactPlayer from "react-player";
import MobileCarousel from "../../components/molecules/Carousel/MobileCarousel";
import ChooseCarousel from "../../components/molecules/Carousel/ChooseCarousel";
import Testimonial from "../../components/molecules/Carousel/Testimonial";
import TextInput from "../../components/atoms/Inputs/TextInput";
import TextArea from "../../components/atoms/Inputs/TextArea";
import PrimaryButton from "../../components/atoms/Button";
import ProviderCarousel from "../../components/molecules/Carousel/ProviderCarousel";
import BestProviders from "../../components/molecules/Carousel/BestProviders";
import EnrolledProviders from "../../components/molecules/Carousel/EnrolledProviders";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Button, IconButton } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import Notifier from "../../components/atoms/Alert";
import {
  enqueueSnackbar as enqueueSnackbarAction,
  closeSnackbar as closeSnackbarAction,
  postContactInfo,
} from "../../actions";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../../components/atoms/Loader";

const Providers = () => {
  const history = useHistory();

  const user = useSelector((state) => state.user);
  const enqueueSnackbar = (...args) => dispatch(enqueueSnackbarAction(...args));
  const closeSnackbar = (...args) => dispatch(closeSnackbarAction(...args));

  const [loading, setLoading] = useState(false);

  const validationArray = Yup.object({
    userName: Yup.string().min(2, "Too Short!").required("Required"),
    phoneNumber: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    message: Yup.string().required("Required"),
  });

  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      userName: "",
      phoneNumber: "",
      email: "",
      message: "",
    },
    validationSchema: validationArray,
    onSubmit: (values) => {
      dispatch(postContactInfo(values));
      setLoading(true);
    },
  });

  useEffect(() => {
    if (user.contactInfoResponse && user.contactInfoResponse.success === true) {
      console.log("entered if condition");
      enqueueSnackbar({
        message: "Form Submitted succesfully!",
        options: {
          key: new Date().getTime() + Math.random(),
          variant: "success",
          action: (key) => (
            <IconButton onClick={() => closeSnackbar(key)}>
              <CloseIcon />
            </IconButton>
          ),
        },
      });
      resetForm();
      setLoading(false);
    }
  }, [user.contactInfoResponse]);

  const resetForm = () => {
    return (
      (formik.values.userName = ""),
      (formik.values.email = ""),
      (formik.values.phoneNumber = ""),
      (formik.values.message = ""),
      formik.handleReset()
    );
  };

  return (
    <div className="hmPgWrpr prvdrsWrapper">
      {loading ? <Loader /> : ""}
      <Layout>
        {/* <ProviderCarousel /> */}
        <div className="hmCrslWrpr prvdrCarsl">
          <Notifier />
          <div>
            <div className="carouselWrapper text-left">
              <h1>
                Keep patients <br /> Healthy at <br /> Home
              </h1>
              <p className="frstSldTxt">
                Do you provide patient care? Fitpeo Health helps keep high-risk
                and chronically ill patients out of the ER and hospital… while
                improving collaboration across care settings to manage
                population health
              </p>
              <div className="d-flex align-items-center">
                <PrimaryButton
                  onClick={() => history.push("/schedule_demo")}
                  label={
                    <>
                      Request a demo
                      <ArrowForwardIcon
                        className="ml-2"
                        style={{ fontSize: 18 }}
                      />
                    </>
                  }
                />
              </div>
              <img
                className="carImg"
                src="/assets/prcarimage1.svg"
                alt="carouselimage"
              />
            </div>
          </div>
        </div>
        <div className="contentWrapper">
          <div className="vdoWrprBack">
            <div id="bestresult" className="pt-4">
              <h2 className="text-left cstmHdr mb-3">
                Best result from our providers
              </h2>
              <p className="vdoDscrptn">
                Better, drawn in patients mean better quality consideration with
                lower costs. Utilizing Fitpeo to give constant remote care
                management to the patients across the healthcare platforms
                expands patient commitment and adherence in illness and disease
                management programs. This implies that more patients are
                effectively partaking in their consideration program, accepting
                suggested preventive and persistent consideration medicines.
                Fitpeo Programs permit healthcare providers to screen and
                intercede when important with high-risk patients, improving
                coordination of care, giving better results.
              </p>
              <BestProviders />
            </div>
            <div className="enrlPrvdrsCntnr pt-3" id="enrolled">
              <h2 className="text-left cstmHdr mb-4">
                Who are all enrolled in our plateform
              </h2>
              <EnrolledProviders />
            </div>
            <div className="hwDswrkPrvdr pt-3" id="workforprovider">
              <h2 className="text-left cstmHdr">
                How Does It Work for Providers
              </h2>
              <p>
                The Fitpeo Pathways™ platform makes disease management and
                post-acute-care programs more efficient and effective.
              </p>
              <p>
                We do this by leveraging a virtual platform for payer and
                provider collaboration that assesses patient status and provides
                a consistent program for monitoring patient care. Fitpeo
                Pathways pulls data from patients wherever they are through
                their mobile digital devices or at-home remote monitoring kits.
                This provides actionable insights to clinical staff for timely
                care interventions. Fitpeo addresses the health needs of
                healthy, rising-risk, and high-risk patients, driving stronger
                adherence rates that improve population health and lower costs
                per capita.
              </p>
              <div className="workCardsWrapper">
                <div className="lftWrpr">
                  <div className="workCard">
                    <div className="ttleContainer">
                      <h3>MONITOR & ENGAGE</h3>
                      <img src="/assets/cardtitle.svg" alt="cardBack" />
                    </div>
                    <div className="crdcntns">
                      <p>
                        FITPEO offers constant monitoring and engagement of
                        patients by levaraging a toolset that is convenient to
                        use. This helps in driving a postive patient response
                        allowing for timely medical intervention useful in
                        chronic & acute diseease management.
                      </p>
                    </div>
                  </div>
                  <div className="workCard mt-5">
                    <div className="ttleContainer">
                      <h3>PERSONALIZED CARE</h3>
                      <img src="/assets/cardtitle.svg" alt="cardBack" />
                    </div>
                    <div className="crdcntns">
                      <p>
                        With a huge number of patients , as healthcare providers
                        you should include various disease conditions in your
                        patient care programs. FITPEO healthcare programs
                        include more than 90 disease specific clinical
                        approaches that can be personalized for every patient.
                        These incorporate, however are not restricted to: <br />{" "}
                        ● Congestive Heart Failure (CHF) <br />● Persistent
                        Obstructive Pulmonary Disease (COPD) <br />● Malignant
                        growth/Cancer <br />● Hypertension <br />● Weight
                        Management/Obesity
                        <br />● Asthma <br />● Diabetes
                        <br /> ● Torment Management
                      </p>
                    </div>
                  </div>
                  <div className="workCard mt-5">
                    <div className="ttleContainer">
                      <h3>CONSISTENT EDUCATION</h3>
                      <img src="/assets/cardtitle.svg" alt="cardBack" />
                    </div>
                    <div className="crdcntns">
                      <p>
                        Healthcare starts with an engaged audience and an
                        engaged audience is a well educated one. Our extensive,
                        and easy to utilize content library educates and engages
                        patients while improving wellbeing proficiency. Content
                        creation and conveyance is intuitive and simple in our
                        solutions.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="lftWrpr">
                  <div className="workCard">
                    <div className="ttleContainer">
                      <h3>CONSTANT STRUCTURING</h3>
                      <img src="/assets/cardtitle.svg" alt="cardBack" />
                    </div>
                    <div className="crdcntns">
                      <p>
                        Technology that points the way to go. Population
                        analytics and intelligent algorithms, which can be
                        integrated with health plan back-end systems, allow
                        healthcare providers to assess at risk populations and
                        decide where to focus their efforts. The technology can
                        even identify trends in a patient’s care management that
                        allow for the FITPEO program to be altered or further
                        customized, often helping to prevent costly escalations
                        in care. Monitor patients smartly with Fitpeo
                      </p>
                    </div>
                  </div>
                  <div className="workCard mt-5">
                    <div className="ttleContainer">
                      <h3>INFORMATION COLLECTION</h3>
                      <img src="/assets/cardtitle.svg" alt="cardBack" />
                    </div>
                    <div className="crdcntns">
                      <p>
                        Information recovery starts with high commitment levels.
                        FITPEO has the best history of commitment in medical
                        services. For instance, power your packaged
                        consideration programs with preoperative evaluations,
                        post-release observing, arrangement updates and
                        consistent documentation. Feed this information back
                        into your databases for quality feedback.
                      </p>
                    </div>
                  </div>
                  <div className="workCard mt-5">
                    <div className="ttleContainer">
                      <h3>VIRTUAL VISITS</h3>
                      <img src="/assets/cardtitle.svg" alt="cardBack" />
                    </div>
                    <div className="crdcntns">
                      <p>
                        The whole concept of Remote patient monitoring is based
                        upon but not limited to virtual visits of a doctor.
                        Being able to see a patient during a virtual
                        consultation by virtue of a video call using modern
                        devices like mobiles, tablets,etc cannot be
                        overemphasized in assesment of a telehealth care.Membwrs
                        can get top notch healthcare at their fingertips.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="cntctWrpr" id="contactus">
              <h2 className="text-left cstmHdr">Get in touch with us</h2>
              <p>
                Ready to start remote care or do you still have some questions
                about how Fitpeo is your perfect assistant in remote patient
                monitoring? Get in touch with us and have all your queries
                answered !
              </p>
              <div className="d-flex align-items-center">
                <div className="lftWrpr w-100">
                  <img
                    className="cntctPgImg"
                    src="/assets/contact.svg"
                    alt="contactimage"
                  />
                </div>
                <div className="rtWrpr w-100">
                  <form onSubmit={formik.handleSubmit} className="cntctFrm">
                    <TextInput
                      formik={formik.handleChange}
                      value={formik.values.userName}
                      name="userName"
                      placeholder="Eg. Jhon"
                      label="Enter your name"
                      icon={<img src="/assets/profile.svg" alt="profile" />}
                    />
                    {formik.touched.name && formik.errors.name ? (
                      <p className="text-danger text-left m-0">
                        {formik.errors.name}
                      </p>
                    ) : null}
                    <TextInput
                      formik={formik.handleChange}
                      name="phoneNumber"
                      value={formik.values.phoneNumber}
                      placeholder="Eg. 9876543210"
                      label="Enter your phone number"
                      icon={<img src="/assets/call.svg" alt="call" />}
                    />
                    {formik.errors.phone && formik.touched.phone ? (
                      <p className="text-danger text-left m-0">
                        {formik.errors.phone}
                      </p>
                    ) : null}
                    <TextInput
                      formik={formik.handleChange}
                      name="email"
                      value={formik.values.email}
                      placeholder="Eg. example@gmail.com"
                      label="Enter your email address"
                      icon={<img src="/assets/mail.svg" alt="mail" />}
                    />
                    {formik.errors.email && formik.touched.email ? (
                      <p className="text-danger text-left m-0">
                        {formik.errors.email}
                      </p>
                    ) : null}
                    <TextArea
                      formik={formik.handleChange}
                      name="message"
                      value={formik.values.message}
                      placeholder="Message..."
                      label="Leave your comment"
                    />
                    {formik.errors.message && formik.touched.message ? (
                      <p className="text-danger text-left m-0">
                        {formik.errors.message}
                      </p>
                    ) : null}
                    <PrimaryButton label="Submit" type="submit" />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Providers;
