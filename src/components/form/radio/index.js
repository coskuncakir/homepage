import React from "react"
import styles from "./radio.module.scss"

export default function Radio({ ...props }) {
  const inputId = props.value.toLowerCase()
  return (
    <>
      <input type="radio" id={inputId} className={styles.radio} {...props} />
      <label htmlFor={inputId} className={styles.label}>
        {props.value}
      </label>
    </>
  )
}
