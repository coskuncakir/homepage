import React from "react"
import Header from "../header"
import styles from "./layout.module.scss"

const Layout = ({ children }) => (
  <>
    <Header />
    <main className={styles.main}>{children}</main>
  </>
)

export default Layout
