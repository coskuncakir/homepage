import React from "react"
import Container from "../container"
import { Github, Linkedin, Twitter } from "../icons"
import Link from "../link"
import styles from "./footer.module.scss"

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Container className={styles.container}>
        <p className={styles.copyright}>
          © {new Date().getFullYear()} Coskun Cakir.
          <br />I crafted this website with{" "}
          <Link
            href="https://www.gatsbyjs.com"
            target="_blank"
            rel="noopener noreferrer"
            title="Gatsby.js"
          >
            gatsby.js
          </Link>
          , deployed to {""}
          <Link
            href="https://www.netlify.com"
            target="_blank"
            rel="noopener noreferrer"
            title="Netlify"
          >
            netlify
          </Link>
          {""} and shared the {""}
          <Link
            href="https://github.com/coscakir/homepage"
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub"
          >
            source code on github.
          </Link>
        </p>
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
      </Container>
    </footer>
  )
}
