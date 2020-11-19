import React from "react"
import cn from "classnames"
import styles from "./title.module.scss"

export default function Title({ headingLevel, children, className }) {
  const validHeadingLevels = ["h1", "h2", "h3", "h4", "h5", "h6"]
  const safeHeading = headingLevel ? headingLevel.toLowerCase() : ""
  const Title = validHeadingLevels.includes(safeHeading) ? safeHeading : "p"

  return (
    <Title className={cn(styles.title, styles[headingLevel], className)}>
      {children}
    </Title>
  )
}
