import React from "react"
import Card from "../card"
import useProjects from "../../hooks/use-projects"

export default function Projects() {
  const projects = useProjects()

  return projects.length > 0 ? (
    projects.map(project => (
      <Card
        key={project.id}
        title={project.title}
        link={project.repository}
        target="_blank"
        rel="noopener noreferrer"
      >
        {project.excerpt}
      </Card>
    ))
  ) : (
    <p style={{ color: "var(--c-text-muted)" }}>Wow, such empty</p>
  )
}
