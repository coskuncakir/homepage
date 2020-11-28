import React from "react"
import Container from "../container"
import Logo from "../logo"
import { Spin as Hamburger } from "hamburger-react"
import ThemeSwitcher from "../theme-switcher"
import styles from "./header.module.scss"

export default function Header() {
  const [open, setOpen] = React.useState(false)

  return (
    <header className={styles.header}>
      <Container>
        <nav className={styles.nav}>
          <Logo />
          <div className={styles.buttons}>
            <ThemeSwitcher />
            <Hamburger
              rounded
              toggled={open}
              toggle={setOpen}
              label="Toggle menu"
              distance="sm"
              hideOutline={false}
            />
          </div>
        </nav>
      </Container>
    </header>
  )
}
