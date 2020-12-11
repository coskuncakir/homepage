import React from "react"
import Card from "../card"
import useNotes from "../../hooks/use-notes"

export default function Notes() {
  const notes = useNotes()
  return notes.length > 0 ? (
    notes.map(note => (
      <Card key={note.id} title={note.title} link={note.slug}>
        {note.excerpt}
      </Card>
    ))
  ) : (
    <p style={{ color: "var(--c-text-muted)" }}>Add a note and being loved!</p>
  )
}
