import React from "react";
import NumberFormat from "react-number-format";

import "./Input.css";

const TextInput = (props) => {
  return (
    <>
      <div className="inptWrpr custmInput">
        <label>{props.label}</label>
        <div className="inptLyr">
          {props.icon && <div className="icnWrpr">{props.icon}</div>}
          {props.name === "phoneNumber" ? (
            <NumberFormat
              className={`${props.icon && "prefixIcon"}`}
              placeholder={props.placeholder}
              format="+1 (###) ###-####"
              mask="_"
              name="phoneNumber"
              onValueChange={({ formattedValue, value }) =>
                props.formik({ target: { name: "phoneNumber", value: value } })
              }
              value={props.value}
              type="text"
            />
          ) : (
            <input
              onChange={props.formik}
              name={props.name}
              type={props.type}
              min={props.min}
              className={`${props.icon && "prefixIcon"}`}
              placeholder={props.placeholder}
              value={props.value}
            />
          )}
        </div>
      </div>
      {props.error && props.error.errors[props.name] && props.error.touched[props.name] ? (
        <p className="text-danger text-left my-0">
          {props.error.errors[props.name]}
        </p>
      ) : null}
    </>
  );
};

export default TextInput;
