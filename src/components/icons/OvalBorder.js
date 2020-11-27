import * as React from "react"

function SvgOvalBorder(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 57 57" {...props}>
      <path
        fillRule="evenodd"
        fill="currentColor"
        clipRule="evenodd"
        d="M28.5 1.2A27.45 27.45 0 004.06 15.82L3 15.27A28.65 28.65 0 0128.5 0C39.64 0 49.29 6.2 54 15.27l-1.06.55A27.45 27.45 0 0028.5 1.2zM4.06 41.18A27.45 27.45 0 0028.5 55.8a27.45 27.45 0 0024.44-14.62l1.06.55A28.65 28.65 0 0128.5 57 28.65 28.65 0 013 41.73l1.06-.55z"
      />
    </svg>
  )
}

export default SvgOvalBorder
