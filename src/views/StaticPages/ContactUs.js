import React, { useEffect, useState } from "react";
import "./Static.css";
import { Link } from "react-router-dom";
import Layout from "../../components/templates/Layout";
import TextInput from "../../components/atoms/Inputs/TextInput";
import PrimaryButton from "../../components/atoms/Button";
import TextArea from "../../components/atoms/Inputs/TextArea";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useSelector, useDispatch } from "react-redux";
import { postContactInfo } from "../../actions";
import { Button, IconButton } from "@material-ui/core";
import CloseIcon from '@material-ui/icons/Close';
import Notifier from "../../components/atoms/Alert";
import {
  enqueueSnackbar as enqueueSnackbarAction,
  closeSnackbar as closeSnackbarAction,
} from '../../actions';
import Loader from "../../components/atoms/Loader";

const ContactUs = () => {

  const user = useSelector((state) => state.user);
  const enqueueSnackbar = (...args) => dispatch(enqueueSnackbarAction(...args));
  const closeSnackbar = (...args) => dispatch(closeSnackbarAction(...args))
  const [loading, setLoading] = useState(false)

  const validationArray = Yup.object({
    first_name: Yup.string().min(2, "Too Short!").required("Required"),
    last_name: Yup.string().min(2, "Too Short!").required("Required"),
    phoneNumber: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    message: Yup.string().required("Required"),
  });

  const dispatch = useDispatch()

  const formik = useFormik({
    initialValues: {
      first_name: "",
      last_name: "",
      userName: '',
      phoneNumber: "",
      email: "",
      message: "",
    },
    validationSchema: validationArray,
    onSubmit: (values) => {
      values.userName = values.first_name + values.last_name
      dispatch(postContactInfo(values))
      setLoading(true)
    },
  });

  useEffect(() => {
    if (user.contactInfoResponse && user.contactInfoResponse.success === true) {
      console.log('entered if condition')
      enqueueSnackbar({
        message: 'Form Submitted succesfully!',
        options: {
          key: new Date().getTime() + Math.random(),
          variant: 'success',
          action: key => (
            <IconButton onClick={() => closeSnackbar(key)}><CloseIcon /></IconButton>
          ),
        },
      });
    }
    resetForm()
    setLoading(false)
  }, [user.contactInfoResponse]);

  const resetForm = () => {
    return (
      formik.values.userName = '',
      formik.values.first_name = '',
      formik.values.last_name = '',
      formik.values.phoneNumber = '',
      formik.values.email = '',
      formik.values.message = '',
      formik.handleReset()
    )
  }

  return (
    <Layout>
      {loading ?
        <Loader /> :
        <div className="scdlDmoWrpr cntctFrmWrpr pt-5 pl-5">
          <Notifier />
          <h2 className="text-left">
            <b>Contact Information</b>
          </h2>
          <p className="text-left"></p>
          <div className="d-flex cntctInfoWrpr mt-5 flex-wrap">
            <div className="grdBox ">
              <img src="/assets/call.svg" alt="call" />
              <br />
              <a href='tel:+18779045227'>+1 (877) 904-5227</a>
            </div>

            <div className="grdBox ">
              <img src="/assets/mail.svg" alt="mail" />
              <br />
              <a href="mailto:support@Fitpeo.com">support@Fitpeo.com</a>
            </div>

            <div className="grdBox ">
              <img src="/assets/addressbook.svg" alt="location" />
              <p className="mt-0">
                6428 Beach Boulevard, Jacksonville, <br />
                Florida 32216, United States
              </p>
            </div>
          </div>
          <div className="row">
            <div className="lftContainer col-md-7 col-xs-12">
              <form onSubmit={formik.handleSubmit} className="demoForm">
                <div className="row flex-wrap">
                  <div className="col-md-6 col-xs-12">
                    <TextInput
                      formik={formik.handleChange}
                      error={formik}
                      name="first_name"
                      value={formik.values.first_name}
                      placeholder="Eg. Jhon"
                      label="Enter Your First Name"
                      icon={<img src="/assets/profile.svg" alt="profile" />}
                    />
                  </div>
                  <div className="col-md-6 col-xs-12">
                    <TextInput
                      formik={formik.handleChange}
                      error={formik}
                      value={formik.values.last_name}
                      name="last_name"
                      placeholder="Eg. Smith"
                      label="Enter Your Last Name"
                      icon={<img src="/assets/profile.svg" alt="profile" />}
                    />
                  </div>
                  <div className="col-md-6 col-xs-12">
                    <TextInput
                      formik={formik.handleChange}
                      error={formik}
                      name="email"
                      value={formik.values.email}
                      placeholder="Eg. example@gmail.com"
                      label="Enter Your Email Address"
                      icon={<img src="/assets/mail.svg" alt="mail" />}
                    />
                  </div>
                  <div className="col-md-6 col-xs-12">
                    <TextInput
                      formik={formik.handleChange}
                      error={formik}
                      name="phoneNumber"
                      value={formik.values.phoneNumber}
                      placeholder="Eg. 9876543210"
                      label="Enter Your Phone Number"
                      icon={<img src="/assets/call.svg" alt="call" />}
                    />
                  </div>
                  <div className="col-md-12 col-xs-12">
                    <TextArea
                      formik={formik.handleChange}
                      error={formik}
                      name="message"
                      value={formik.values.message}
                      label="Enter Your Message"
                      placeholder="Enter message here"
                    />
                  </div>
                  <div className="col-12 col-xs-12">
                    <PrimaryButton label="Submit" />
                  </div>
                </div>
              </form>
            </div>
            <div className="imgContainer col-md-5 col-xs-12 mt-5">
              <img
                className=""
                src="/assets/contactpage.svg"
                alt="contact image"
              />
            </div>
          </div>
        </div>
      }
    </Layout>
  );
};

export default ContactUs;
