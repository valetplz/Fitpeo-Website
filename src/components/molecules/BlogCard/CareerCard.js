import React from "react";
import { Link, useHistory } from "react-router-dom";
import PrimaryButton from "../../atoms/Button";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import SecondaryButton from "../../atoms/Button/SecondaryButton";

const CareerCard = (props) => {
  const history = useHistory();
  console.log("data", props.data);
  return (
    <>
      {props.data.length !== 0 &&
        props.data.map((values) => (
          <div
            className="careerCard row text-left mt-4 py-4"
            key={values.jobId}
          >
            <div className="col-md-6 col-12">
              <h3>{values.jobTile}</h3>
              <p>{values.jobType}</p>
            </div>
            <div className="col-md-6">
              <p>{values.about}</p>
              <div className="btnStack d-flex align-items-center justify-content-between">
                <SecondaryButton
                  label="Apply Job"
                  onClick={() =>
                    history.push(`/careerview/${values.jobId}/apply`)
                  }
                />
                <Link
                  className="d-flex align-items-center"
                  to={`/careerview/${values.jobId}/view`}
                >
                  READ THE MORE <ArrowRightAltIcon className="ml-2" />
                </Link>
              </div>
            </div>
          </div>
        ))}
    </>
  );
};

export default CareerCard;
