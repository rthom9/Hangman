import React from 'react'

export default function Btn( {handleOnClick, label} ) {
  return (
    <div className={"Btn" + label.split(" ").join("")} onClick={handleOnClick}>{label}</div>
  )
}

