import React from "react";
import "./Input.css";

const TextArea = (props) => {
  return (
    <>
      <div className="inptWrpr custmInput">
        <label>{props.label}</label>
        <div className="inptLyr">
          {props.icon && <div className="icnWrpr">{props.icon}</div>}
          <textarea
            className={`${props.icon && "prefixIcon"}`}
            type={props.type}
            placeholder={props.placeholder}
            onChange={props.formik}
            name={props.name}
            value={props.value}
          />
        </div>
      </div>
      {props.error &&
      props.error.errors[props.name] &&
      props.error.touched[props.name] ? (
        <p className="text-danger text-left m-0">
          {props.error.errors[props.name]}
        </p>
      ) : null}
    </>
  );
};

export default TextArea;
