import React from "react"
import "./Checkbox.css"

const CustomCheckBox = (props) => {
  return (
    <div className={`cstmChkBox ${props.size}`}>
      <label class='container'>
        {props.label}
        <input
          type='checkbox'
          name={props.name}
          checked={props.checked}
          onChange={props.onChange}
        />
        <span class='checkmark'></span>
      </label>
    </div>
  )
}

export default CustomCheckBox
