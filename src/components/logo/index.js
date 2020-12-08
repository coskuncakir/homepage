import React from "react"
import { Link } from "gatsby"
import { OvalBorder } from "../icons"
import Avatar from "../avatar"
import cn from "classnames"
import styles from "./logo.module.scss"

export default function Logo({ className }) {
  return (
    <Link to="/" className={cn(styles.logo, className)}>
      <div className={styles.avatar}>
        <div className={styles.oval}>
          <OvalBorder />
        </div>
        <div className={styles.image}>
          <Avatar />
        </div>
      </div>
      <div className={styles.title}>
        <strong>Coskun Cakir</strong>
        <span>Front-End Developer</span>
      </div>
    </Link>
  )
}
