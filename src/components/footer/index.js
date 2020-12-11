import React from "react"
import Container from "../container"
import { Github, Linkedin, Twitter } from "../icons"
import Link from "../link"
import styles from "./footer.module.scss"

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Container className={styles.container}>
        <ul className={styles.menu}>
          <li>
            <Link to="/projects" defaultLink={false}>
              Projects
            </Link>
          </li>
          <li>
            <Link to="/reading" defaultLink={false}>
              Reading
            </Link>
          </li>
          <li>
            <Link to="/about" defaultLink={false}>
              About
            </Link>
          </li>
        </ul>
        <ul className={styles.socialLinks}>
          <li>
            <a
              href="https://twitter.com/coscakir"
              target="_blank"
              rel="noopener noreferrer"
              title="Twitter"
            >
              <Twitter />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/coscakir"
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub"
            >
              <Github />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/coskuncakir"
              target="_blank"
              rel="noopener noreferrer"
              title="Linkedin"
            >
              <Linkedin />
            </a>
          </li>
        </ul>
        <p className={styles.copyright}>
          © {new Date().getFullYear()} Coskun Cakir.
        </p>
      </Container>
    </footer>
  )
}
