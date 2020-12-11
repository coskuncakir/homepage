import React from "react"
import Card from "../card"
import usePosts from "../../hooks/use-posts"

export default function Posts() {
  const posts = usePosts()

  return posts.length > 0 ? (
    posts.map(post => (
      <Card key={post.id} title={post.title} link={post.slug}>
        {post.excerpt}
      </Card>
    ))
  ) : (
    <p style={{ color: "var(--c-text-muted)" }}>
      No notes scheduled for takeoff
    </p>
  )
}
