import React from "react"

const BorderedSelect = (props) => {
  return (
    <div className='slctCntnr'>
      <label htmlFor=''>{props.label}</label>
      <div className='slctIptWrpr'>
        <select name={props.name}>
          {props.options.map((data) => (
            <option value={data.id}>{data.value}</option>
          ))}
        </select>
      </div>
    </div>
  )
}

export default BorderedSelect
