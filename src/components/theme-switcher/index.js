import React from "react"
import { ColorMode } from "../icons"
import styles from "./theme-switcher.module.scss"

export default function ThemeSwitcher() {
  return (
    <button className={styles.button}>
      <ColorMode />
    </button>
  )
}
