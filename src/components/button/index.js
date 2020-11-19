import React from "react"
import { Link } from "gatsby"
import cn from "classnames"
import styles from "./button.module.scss"

export default function Button({ type, children, className, ...props }) {
  let Button = "button"
  if (props.to) {
    Button = Link
  }

  return (
    <Button className={cn(styles.button, styles[type], className)} {...props}>
      {children}
    </Button>
  )
}
