import React from "react"
import styles from "./textarea.module.scss"

export default function Textarea({ ...props }) {
  return <textarea className={styles.textarea} {...props}></textarea>
}
