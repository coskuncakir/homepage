import React from "react"
import { Link } from "gatsby"
import { OvalBorder } from "../icons"
import { Avatar, AvatarHover } from "../avatar"
import cn from "classnames"
import styles from "./logo.module.scss"

export default function Logo({ className }) {
  const [avatar, setAvatar] = React.useState(<Avatar />)
  return (
    <Link
      to="/"
      className={cn(styles.logo, className)}
      onMouseEnter={() => setAvatar(<AvatarHover />)}
      onMouseLeave={() => setAvatar(<Avatar />)}
    >
      <div className={styles.avatar}>
        <div className={styles.oval}>
          <OvalBorder />
        </div>
        <div className={styles.image}>{avatar}</div>
      </div>
      <div className={styles.title}>
        <strong>Coskun Cakir</strong>
        <span>Front-End Developer</span>
      </div>
    </Link>
  )
}
