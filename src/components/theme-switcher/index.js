import React, { useEffect, useState } from "react"
import { ColorMode } from "../icons"
import styles from "./theme-switcher.module.scss"

export default function ThemeSwitcher() {
  let websiteTheme
  if (typeof window !== "undefined") {
    websiteTheme = window.__theme
  }

  const [theme, setTheme] = useState(websiteTheme)

  useEffect(() => {
    setTheme(window.__theme)
    window.__onThemeChange = () => {
      setTheme(window.__theme)
    }
  }, [])

  const themeToggle = preferredTheme => {
    window.__setPreferredTheme(preferredTheme)
  }

  return (
    <button
      className={styles.button}
      aria-label="Toggle theme"
      onClick={() => themeToggle(theme === "dark" ? "light" : "dark")}
    >
      <ColorMode />
    </button>
  )
}
