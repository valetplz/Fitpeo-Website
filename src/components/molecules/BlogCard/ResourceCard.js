import React from "react";
import { Link } from "react-router-dom";
import "./BlogCard.css";
import FileSaver from "file-saver";

const ResourceCard = (props) => {
  const saveFile = () => {
    var file = props.fileLink;
    FileSaver.saveAs(file, "resource");
  };

  return (
    <div className="blgCard">
      <div className="blgImWrpr">
        <img
          className="blgImage"
          src={props.image !== undefined ? props.image : "/assets/noimage.png"}
          alt={props.title}
        />
      </div>
      <p className="blgDt">{props.category}</p>
      <h2 className="blgTtle">{props.title}</h2>
      <p className="blgDsck">{props.description}</p>
      {!props.patientTestimonial && props.fileLink && (
        <div className="InfoBtns d-flex align-items-center">
          <button className="btn dwnldBtn" onClick={() => saveFile(props.fileLink)}>
            Download
          </button>
        </div>
      )}
    </div>
  );
};

export default ResourceCard;
