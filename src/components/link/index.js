import React from "react"
import { Link as GatsbyLink } from "gatsby"
import cn from "classnames"
import styles from "./link.module.scss"

export default function Link({ className, children, ...props }) {
  let CustomLink
  if (props.href || props.target) {
    CustomLink = `a`
  } else {
    CustomLink = GatsbyLink
  }

  return (
    <CustomLink
      className={cn(
        (props.href || props.target) && !className ? styles.a : styles.link,
        className
      )}
      {...props}
    >
      {children}
    </CustomLink>
  )
}
