import React, { useState, useEffect, useRef } from "react";
import "./Careers.css";
import Layout from "../../components/templates/Layout";
import SecondaryButton from "../../components/atoms/Button/SecondaryButton";
import CareerCard from "../../components/molecules/BlogCard/CareerCard";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import SubmitResume from "../StaticPages/SubmitResume";
import { useDispatch, useSelector } from "react-redux";
import { getJobDetails } from "../../actions";

const CareersView = (props) => {
  const jobView = useSelector((state) => state.user.jobDetails);
  const jobValue = props.match.params.id;
  const dispatch = useDispatch();

  const applyRef = useRef(null);

  useEffect(() => {
    dispatch(getJobDetails());
  }, []);

  useEffect(() => {
    if (props.match.params.action === "apply")
      setTimeout(function () {
        applyRef && window.scrollTo(0, applyRef.current.offsetTop);
      }, 1000);
  }, [props.match.params.action]);

  const filtered =
    jobView.length &&
    jobValue &&
    jobView.filter(function (emp) {
      console.log("jobeview", jobView, jobValue);
      return emp.jobId === JSON.parse(jobValue);
    });

  return (
    <Layout>
      {jobView.length &&
        filtered.map((data) => (
          <div className="careerVwPrt p-5">
            {console.log("data", data)}
            <h1 className="text-left">Careers</h1>
            <div className="blgBgWrpr d-flex align-items-center">
              <div className="lftWrpr">
                <h2>
                  We are an independent, remote-friendly creative agency with
                  offices in America
                </h2>
                <p>Let's Work Together</p>
              </div>
              <div className="blgImgWrpr">
                <img src="/assets/careersimage.png" alt="" />
              </div>
            </div>
            <div className="crrVwDtls text-left">
              <h4>{data.jobTile}</h4>
              <div className="jbInfo d-flex align-items-center">
                <p className="mr-5">Location: {data.jobLocation}</p>
                <p>Job Type: {data.jobType}</p>
              </div>
              <SecondaryButton label="Apply Now" />
              <div className="jbDscContainer d-flex align-items-start">
                <div className="lftDescContainer">
                  <h5>About Fitpeo</h5>
                  <p>{data.about}</p>
                  <h5>Job Overview</h5>
                  <p>{data.jobOverview}</p>
                  <h5>Responsibilities</h5>
                  <p>{data.jobResponsibility}</p>
                  <h5>Qualifications</h5>
                  <p>{data.qualification}</p>
                </div>
                <div className="rtContainer">
                  <h4>Related Jobs</h4>
                  <ul className="jobList">
                    <li>
                      <h6>Business Analyst-I</h6>
                      <p>USA-Full Time</p>
                    </li>
                    <li>
                      <h6>Business Analyst-I</h6>
                      <p>USA-Full Time</p>
                    </li>
                    <li>
                      <h6>Business Analyst-I</h6>
                      <p>USA-Full Time</p>
                    </li>
                    <li>
                      <h6>Business Analyst-I</h6>
                      <p>USA-Full Time</p>
                    </li>
                  </ul>
                  <h4 className="mt-5">Share this job</h4>
                  <div className="shrIcons d-flex align-items-center">
                    <img
                      className="mr-4"
                      src="/assets/twitter_Dark.svg"
                      alt=""
                    />
                    <img
                      className="mr-4"
                      src="/assets/facebook_Dark.svg"
                      alt=""
                    />
                    <img src="/assets/insta_Dark.svg" alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div ref={applyRef}>
              <SubmitResume />
            </div>
          </div>
        ))}
    </Layout>
  );
};

export default CareersView;
