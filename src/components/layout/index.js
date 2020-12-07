import React from "react"
import Header from "../header"
import Footer from "../footer"
import styles from "./layout.module.scss"

const Layout = ({ children }) => (
  <>
    <Header />
    <main className={styles.main}>{children}</main>
    <Footer />
  </>
)

export default Layout
