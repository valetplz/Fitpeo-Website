import React, { useEffect } from "react";
import "./Resource.css";
import Layout from "../../components/templates/Layout";
import ResourceCard from "../../components/molecules/BlogCard/ResourceCard";
import { useSelector, useDispatch } from "react-redux";
import { getResources } from "../../actions";

const Resources = () => {
  const dispatch = useDispatch();

  const resourceDetails = useSelector((state) => state.user.resourceDetails);

  useEffect(() => {
    dispatch(getResources());
  }, []);

  const resourceData = [
    {
      image: "/assets/blogImg.png",
      category: "Medicine",
      title: "Fitpeo Health celebrates National Nurses Week 2021",
      description:
        "2021 is a year to reflect on the unmatched sacrifice made by nurses on the frontlines in the battle against COVID-19.",
    },
    {
      image: "/assets/blogImg.png",
      category: "Medicine",
      title: "Fitpeo Health celebrates National Nurses Week 2021",
      description:
        "2021 is a year to reflect on the unmatched sacrifice made by nurses on the frontlines in the battle against COVID-19.",
    },
    {
      image: "/assets/blogImg.png",
      category: "Medicine",
      title: "Fitpeo Health celebrates National Nurses Week 2021",
      description:
        "2021 is a year to reflect on the unmatched sacrifice made by nurses on the frontlines in the battle against COVID-19.",
    },
    {
      image: "/assets/blogImg.png",
      category: "Medicine",
      title: "Fitpeo Health celebrates National Nurses Week 2021",
      description:
        "2021 is a year to reflect on the unmatched sacrifice made by nurses on the frontlines in the battle against COVID-19.",
    },
    {
      image: "/assets/blogImg.png",
      category: "Medicine",
      title: "Fitpeo Health celebrates National Nurses Week 2021",
      description:
        "2021 is a year to reflect on the unmatched sacrifice made by nurses on the frontlines in the battle against COVID-19.",
    },
  ];

  return (
    <Layout>
      <div className="rsrcPgWrpr px-5">
        <h4>Find your right Resources for you</h4>
        <div className="rsrDtlLt d-flex align-items-start">
          <div className="lftLyt w-100">
            <div className="rsrcGrid">
              {console.log("resource details", resourceDetails)}
              {resourceDetails.length !== 0 &&
                resourceDetails.map((data) => (
                  <ResourceCard
                    key={data.resourceId}
                    image={data.image}
                    category={data.topic}
                    title={data.title}
                    description={data.description}
                    fileLink={data.fileLink}
                  />
                ))}
            </div>
            <h5 className="inrHdr">Patient Testimonials</h5>
            <div className="rsrcGrid">
              {/* {resourceData.map((data) => (
                <ResourceCard
                  patientTestimonial
                  image={data.image}
                  category={data.category}
                  title={data.title}
                  description={data.description}
                />
              ))} */}
            </div>
            <h5 className="inrHdr">Brochures</h5>
            <div className="rsrcGrid">
              {/* {resourceData.map((data) => (
                <ResourceCard
                  image={data.image}
                  category={data.category}
                  title={data.title}
                  description={data.description}
                />
              ))} */}
            </div>
            <h5 className="inrHdr mb-5">Press Release</h5>
            <div className="prsRlsContainer d-flex align-items-start mb-4">
              <div className="lftImg">
                <img src="/assets/pressrelease.svg" alt="press release" />
              </div>
              <div className="rtTxtCtr text-left pl-5">
                <h6>
                  Fitpeo Health Recognized for Remote Patient Care Innovation in
                  2021 MedTech Breakthrough Awards Program
                </h6>
                <p>Released May 6, 2021</p>
              </div>
            </div>
            <div className="prsRlsContainer d-flex align-items-start mb-4">
              <div className="lftImg">
                <img src="/assets/pressrelease.svg" alt="press release" />
              </div>
              <div className="rtTxtCtr text-left pl-5">
                <h6>
                  Fitpeo Health Recognized for Remote Patient Care Innovation in
                  2021 MedTech Breakthrough Awards Program
                </h6>
                <p>Released May 6, 2021</p>
              </div>
            </div>
          </div>
          <div className="rtLyt">
            <div className="fltrCtr">
              <h6>Filter By Category</h6>
              <ul>
                <li>Patient Testimonial</li>
                <li>Brochures</li>
                <li>Press Release</li>
              </ul>
            </div>
            <div className="tgsCntnr">
              <h5>Tags</h5>
              <ul className="jobList">
                <li>
                  <h6>All Topics</h6>
                </li>
                <li>
                  <h6>Brochures</h6>
                </li>
                <li>
                  <h6>Doctors</h6>
                </li>
                <li>
                  <h6>Medicine</h6>
                </li>
                <li>
                  <h6>Case Study</h6>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Resources;
