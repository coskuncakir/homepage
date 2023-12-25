import React from "react"
import { Link } from "gatsby"
import cn from "classnames"
import styles from "./logo.module.scss"

export default function Logo({ className }) {
  return (
    <Link to="/" className={cn(styles.logo, className)}>
      <div className={styles.title}>
        <strong>Coskun Cakir</strong>
        <span>Front-End Developer</span>
      </div>
    </Link>
  )
}
