import React from "react"
import Input from "./input"
import Textarea from "./textarea"
import Button from "../button"
import styles from "./contact.module.scss"

export default function ContactForm() {
  const [submitText, setSubmitText] = React.useState("Send")

  return (
    <form
      className={styles.form}
      name="Contact"
      netlify-honeypot="bot-field"
      method="POST"
      action="/thank-you"
      data-netlify="true"
      onSubmit={e => setSubmitText("Sending...")}
    >
      <input type="hidden" name="bot-field" />
      <input type="hidden" name="form-name" value="Contact" />
      <Input type="text" name="name" placeholder="Your name *" required />
      <Input type="email" name="email" placeholder="Your email *" required />
      <Textarea
        placeholder="How can i help? *"
        rows="4"
        name="message"
        spellCheck="false"
        required
      ></Textarea>
      <span>
        <Button type="submit">{submitText}</Button>
      </span>
    </form>
  )
}
