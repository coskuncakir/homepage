import React from "react"
import Link from "../link"
import Title from "../title"
import Img from "gatsby-image"
import { RightArrow } from "../icons"
import styles from "./card.module.scss"

export default function Card({
  title,
  subTitle,
  link,
  target,
  image,
  children,
  ...props
}) {
  return (
    <Link
      className={styles.card}
      href={target ? link : null}
      to={!target ? `${link}` : null}
      target={target}
      rel={target ? `noopener noreferrer` : null}
      aria-label={title}
      defaultLink={false}
      {...props}
    >
      {image && (
        <div className={styles.image}>
          {target && <img src={image} alt={title} />}
          {!target && <Img fluid={image} alt={title} />}
        </div>
      )}
      <div className={styles.content}>
        <header className={styles.header}>
          <Title headingLevel="h3">{title}</Title>
          {subTitle && <p>{subTitle}</p>}
        </header>
        <div className={styles.body}>{truncate(children, 200)}</div>
        <footer className={styles.footer}>
          <span>Check it out</span>
          <RightArrow />
        </footer>
      </div>
    </Link>
  )
}

function truncate(str, n) {
  return str.length > n
    ? str.substr(0, n - 1).replace(/(<([^>]+)>)/gi, " ") + "..."
    : str
}
