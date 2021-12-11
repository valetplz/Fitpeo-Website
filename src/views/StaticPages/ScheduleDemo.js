import React, { useEffect, useState } from "react";
import "./Static.css";
import { Link } from "react-router-dom";
import Layout from "../../components/templates/Layout";
import TextInput from "../../components/atoms/Inputs/TextInput";
import PrimaryButton from "../../components/atoms/Button";
import moment from "moment";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { scheduleDemo } from "../../actions";
import {
  enqueueSnackbar as enqueueSnackbarAction,
  closeSnackbar as closeSnackbarAction,
} from "../../actions";
import { Button, IconButton } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import Notifier from "../../components/atoms/Alert";
import Loader from "../../components/atoms/Loader";

const ScheduleDemo = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const enqueueSnackbar = (...args) => dispatch(enqueueSnackbarAction(...args));
  const closeSnackbar = (...args) => dispatch(closeSnackbarAction(...args));
  const [loading, setLoading] = useState(false);

  const validationArray = Yup.object({
    // userName: Yup.string().required("Required"),
    first_name: Yup.string().min(2, "Too Short!").required("Required"),
    last_name: Yup.string().required("Required"),
    phoneNumber: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    demoDate: Yup.string().required("Required"),
  });

  const formik = useFormik({
    initialValues: {
      userName: "",
      first_name: "",
      last_name: "",
      phoneNumber: "",
      email: "",
      demoDate: "1630379396",
    },
    validationSchema: validationArray,
    onSubmit: (values) => {
      console.log(values);
      values.userName = values.first_name + values.last_name;
      values.demoDate = Date.parse(values.demoDate) / 1000;
      console.log("formik.unix", values);
      dispatch(scheduleDemo(values));
      setLoading(true);
    },
  });

  useEffect(() => {
    console.log("formikvalues", formik.values);
  }, [formik.values]);

  useEffect(() => {
    if (
      user.scheduleDemoResponse &&
      user.scheduleDemoResponse.success === true
    ) {
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
    }
    resetForm();
    setLoading(false);
  }, [user.scheduleDemoResponse]);

  const resetForm = () => {
    return (
      (formik.values.userName = ""),
      (formik.values.first_name = ""),
      (formik.values.last_name = ""),
      (formik.values.phoneNumber = ""),
      (formik.values.email = ""),
      (formik.values.demoDate = ""),
      formik.handleReset()
    );
  };

  return (
    <Layout>
      {loading ? (
        <Loader />
      ) : (
        <div className="scdlDmoWrpr pt-5 pl-5">
          <Notifier />
          <h2 className="text-left">
            <b>Schedule your personal demo</b>
          </h2>
          <p className="text-left">
            Please provide your some information to reach you
          </p>
          <div className="row">
            <div className="lftContainer col-md-7 col-xs-12">
              <form onSubmit={formik.handleSubmit} className="demoForm">
                <div className="row flex-wrap">
                  <div className="col-md-6 col-xs-12">
                    <TextInput
                      name="first_name"
                      value={formik.values.first_name}
                      formik={formik.handleChange}
                      error={formik}
                      placeholder="Eg. Jhon"
                      label="Enter Your First Name"
                      icon={<img src="/assets/profile.svg" alt="profile" />}
                    />
                  </div>
                  <div className="col-md-6 col-xs-12">
                    <TextInput
                      name="last_name"
                      value={formik.values.last_name}
                      formik={formik.handleChange}
                      error={formik}
                      placeholder="Eg. Smith"
                      label="Enter Your Last Name"
                      icon={<img src="/assets/profile.svg" alt="profile" />}
                    />
                  </div>
                  <div className="col-md-6 col-xs-12">
                    <TextInput
                      name="email"
                      value={formik.values.email}
                      formik={formik.handleChange}
                      error={formik}
                      placeholder="Eg. example@gmail.com"
                      label="Enter Your Email Address"
                      icon={<img src="/assets/mail.svg" alt="mail" />}
                    />
                  </div>
                  <div className="col-md-6 col-xs-12">
                    <TextInput
                      name="phoneNumber"
                      value={formik.values.phoneNumber}
                      formik={formik.handleChange}
                      error={formik}
                      placeholder="Eg. 9876543210"
                      label="Enter Your Phone Number"
                      icon={<img src="/assets/call.svg" alt="call" />}
                    />
                  </div>
                  <div className="col-md-6 col-xs-12">
                    {console.log("current date", moment().format("YYYY-MM-DD"))}
                    <TextInput
                      name="demoDate"
                      value={formik.values.demoDate}
                      formik={formik.handleChange}
                      error={formik}
                      type="datetime-local"
                      min={moment().format("YYYY-MM-DD")}
                      placeholder=""
                      label="Select Your Demo Date"
                      icon={<img src="/assets/dateicon.svg" alt="date" />}
                    />
                  </div>
                  <div className="col-12 col-xs-12">
                    <PrimaryButton label="Request a demo" type="submit" />
                  </div>
                </div>
              </form>
            </div>
            <div className="imgContainer col-md-5 col-xs-12 mt-5">
              <img className="" src="/assets/demo.svg" alt="demo image" />
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default ScheduleDemo;
