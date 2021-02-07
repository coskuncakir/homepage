import React from "react"
import { Link } from "gatsby"
import { OvalBorder } from "../icons"
import Avatar from "../avatar"
import cn from "classnames"
import styles from "./logo.module.scss"

export default function Logo({ className }) {
  const [avatarHover, setAvatarHover] = React.useState(false)
  return (
    <Link
      to="/"
      className={cn(styles.logo, className)}
      onMouseEnter={() => setAvatarHover(true)}
      onMouseLeave={() => setAvatarHover(false)}
    >
      <div className={styles.avatar}>
        <div className={styles.oval}>
          <OvalBorder />
        </div>
        <div className={styles.image}>
          <Avatar hover={avatarHover} />
        </div>
      </div>
      <div className={styles.title}>
        <strong>Coskun Cakir</strong>
        <span>Front-End Developer</span>
      </div>
    </Link>
  )
}
