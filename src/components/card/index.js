import React from "react"
import { RightArrow } from "../icons"
import styles from "./card.module.scss"

export default function Card({
  title,
  url,
  target = "_blank",
  author,
  tag,
  img,
  children,
  ...props
}) {
  return (
    <div className={styles.card} {...props}>
      <a href={url} target={target} rel="noreferrer">
        {img && (
          <div>
            <img src={img} alt={title} />
          </div>
        )}
        <ul>
          <li>
            <h3>{title}</h3>
            <p>
              by {author} - <span>{tag}</span>
            </p>
            <p>{truncate(children, 200)}</p>
          </li>
          <li>
            <p>Check it out</p>
            <RightArrow />
          </li>
        </ul>
      </a>
    </div>
  )
}

function truncate(str, n) {
  return str.length > n
    ? str.substr(0, n - 1).replace(/(<([^>]+)>)/gi, " ") + "..."
    : str
}
