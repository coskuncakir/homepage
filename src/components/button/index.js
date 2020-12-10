import React from "react"
import cn from "classnames"
import { Link } from "gatsby"
import styles from "./button.module.scss"

export default function Button({ children, className, ...props }) {
  let Button
  if (props.to) {
    Button = Link
  } else {
    Button = "button"
  }
  return (
    <Button className={cn(styles.button, className)} {...props}>
      {children}
    </Button>
  )
}
