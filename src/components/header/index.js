import React from "react"
import Container from "../container"
import Logo from "../logo"
import styles from "./header.module.scss"

export default function Header() {
  return (
    <header className={styles.header}>
      <Container>
        <nav>
          <Logo />
        </nav>
      </Container>
    </header>
  )
}
