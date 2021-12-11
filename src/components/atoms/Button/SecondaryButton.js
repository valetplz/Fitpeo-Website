import React from "react"
import "./Button.css"

const SecondaryButton = (props) => {
  return (
    <button
      aria-label={props.ariaLabel}
      onClick={props.onClick}
      className={`${props.class} btn secButton`}
      type={props.type}
    >
      {props.label}
    </button>
  )
}

export default SecondaryButton
