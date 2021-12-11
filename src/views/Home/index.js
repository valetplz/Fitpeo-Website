import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import "./Home.css";
import HomeCarousel from "../../components/molecules/Carousel";
import Layout from "../../components/templates/Layout";
import ReactPlayer from "react-player";
import MobileCarousel from "../../components/molecules/Carousel/MobileCarousel";
import ChooseCarousel from "../../components/molecules/Carousel/ChooseCarousel";
import Testimonial from "../../components/molecules/Carousel/Testimonial";
import TextInput from "../../components/atoms/Inputs/TextInput";
import TextArea from "../../components/atoms/Inputs/TextArea";
import PrimaryButton from "../../components/atoms/Button";
import { Icon, InlineIcon } from "@iconify/react";
import playIcon from "@iconify/icons-fa-solid/play";
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
import Loader from '../../components/atoms/Loader'

const Home = () => {
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
    <div className="hmPgWrpr">
      <Layout>
        {/* <HomeCarousel /> */}
        {loading ? <Loader /> : ""}
        <div className="carouselWrapper text-left">
          <Notifier />
          <h5>Fitpeo helps you to</h5>
          <h1>
            Remote Patient <br /> Monitoring
          </h1>
          <p className="frstSldTxt">
            Different health organizations have different needs. Fitpeo Health’s
            platform for Remote Patient Monitoring empowers care where it is
            needed the most, while delivering advanced program management to set
            you apart.
          </p>
          <div className="btnWrpr d-flex align-items-center">
            <PrimaryButton
              onClick={() => history.push("/contactus")}
              label={
                <>
                  Contact Us
                  <ArrowForwardIcon className="ml-2" style={{ fontSize: 18 }} />
                </>
              }
              us
              class="mr-5"
            />
            <PrimaryButton
              onClick={() => history.push("/schedule_demo")}
              label={
                <>
                  Schedule a demo
                  <ArrowForwardIcon className="ml-2" style={{ fontSize: 18 }} />
                </>
              }
            />
          </div>
          <img
            className="carImg hmImgCrsl"
            src="/assets/carimage1.svg"
            alt="carousel image"
          />
        </div>
        <div className="contentWrapper">
          <div className="vdoWrprBack">
            <div id="rpmworks" className="pt-5 ptsm">
              <h2 className="text-left cstmHdr">
                How patient monitoring works?
              </h2>
              <div className="vdoPlrWrpr">
                <ReactPlayer
                  width="100%"
                  height="520px"
                  url="https://res.cloudinary.com/dkdlhh3ni/video/upload/v1623342274/video1_wmkn9m.mp4"
                  // light
                  playsinline
                  playing
                  muted
                  loop
                  controls
                  playIcon={
                    <div className="plIcnWrp">
                      <Icon
                        icon={playIcon}
                        style={{ color: "#31456a", fontSize: "30px" }}
                      />
                    </div>
                  }
                />
              </div>
              <p className="vdoDscrptn">
                Fitpeo is transforming healthcare by replacing episodic
                approaches with the market’s most complete, patient-centered,
                and holistic connected care platform. Discover how we can help
                you launch and scale comprehensive, effective remote care
                programs that create exceptional clinical and financial ROI for
                chronic and post-acute care as well as wellness management.
              </p>
            </div>
            <div className="mblPhWrpr pt-5 ptsm" id="rpmprocess">
              <h2 className="text-left cstmHdr mt-5 mb-4">
                Patient monitoring process
              </h2>
              <div className="flxCntnr d-flex align-items-start">
                <div className="lftContainer pt-3">
                  <p>
                    Having a patient centric, holistically connected care
                    platform with the flexibility of monitoring patients
                    remotely is the need of the hour. The covid pandemic needs a
                    modified approach in transforming healthcare by replacing
                    episodic approaches with a platform that can set patients in
                    the right direction for a continued path towards a healthy
                    life. Understand how FITPEO helps you launch and scale
                    comprehensive, effective remote care programs that create
                    exceptional clinical and financial ROI for chronic and
                    post-acute care as well as wellness management.
                  </p>

                  <p>
                    From scheduling and automating patient encounters to
                    connecting, engaging, educating, guiding, monitoring and
                    intervening , Fitpeo is the future of healthcare.
                  </p>
                </div>
                <div className="rtContaienr">
                  <MobileCarousel />
                </div>
              </div>
            </div>
            <div className="pathWayContainer pt-5 ptsm" id="pathway">
              <h2 className="text-right cstmHdr mt-5 mb-4">Pathway process</h2>
              <div className="pthWyDtlCntnr">
                <img
                  className="crsLn"
                  src="/assets/crossline.png"
                  alt="designline"
                />
                <img
                  className="vctrImg"
                  src="/assets/pathwayProcess.svg"
                  alt="pathway image"
                />
                <div className="pWCBx fstBx">
                  <h3>1.Connect</h3>
                  <p>
                    Connect with patients using modern day technology like
                    mobiles & tablets.
                  </p>
                </div>
                <div className="pWCBx sdBx">
                  <h3>2.Engage</h3>
                  <p>
                    Engage using captivative programs and monitoring approaches
                  </p>
                </div>
                <div className="pWCBx thrdBx">
                  <h3>3.Educate</h3>
                  <p>
                    Educate patients with upto date , relevant & informative
                    content
                  </p>
                </div>
                <div className="pWCBx frtBx">
                  <h3>4.Guide</h3>
                  <p>
                    Guide patient behavior using result based clinical pathways
                  </p>
                </div>
                <div className="pWCBx fthBx">
                  <h3>5.Monitor</h3>
                  <p>
                    Monitor and alert patient using biometrics, activity and
                    progress along prescribed pathways.
                  </p>
                </div>
              </div>
            </div>
            <div className="chsUsContainer py-5 ptsm" id="whychoose">
              <h2 className="text-left cstmHdr mt-5 mb-4">
                Why people choose us
              </h2>
              <div className="hmCrslWrpr pplChsCrsl">
                <div>
                  <div className="crslCard">
                    <h3>Ongoing, real time insights</h3>
                    <p>
                      Fitpeo includes Remote Patient Monitoring and it is a tech
                      - equipped future of medical care. We offer a platform to
                      both the healthcare providers and the patients to connect
                      with each other and monitor healthcare via video calls
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="clntTstmnl">
              <h2 className="text-left cstmHdr mt-5">Client Testimonial</h2>
              <Testimonial />
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
                    alt="contact image"
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

export default Home;
