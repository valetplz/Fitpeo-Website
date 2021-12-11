import React from "react"
import "./Button.css"

const PrimaryButton = (props) => {
  return (
    <button
      aria-label={props.ariaLabel}
      onClick={props.onClick}
      className={`${props.class} btn primButton`}
      type={props.type}
    >
      {props.label}
    </button>
  )
}

export default PrimaryButton
