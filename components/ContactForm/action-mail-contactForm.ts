"use server"

import { Resend } from "resend"

import EmailTemplate from "@/components/ContactForm/email-Template-contact"
import { render } from "@react-email/render"

import { State } from "@/lib/types"


export const sendEmail = async (prevState: State, formData: FormData) => {


  const name = formData.get("name") as string
  const email = formData.get("email") as string
  const phone = formData.get("phone") as string
  const message = formData.get("message") as string
  const checkbox1 = formData.getAll("checkbox1") as string[]
  const checkbox2 = formData.getAll("checkbox2") as string[]
  const checkbox3 = formData.getAll("checkbox3") as string[]
  const lastName = formData.get("lastName") as string

  try {

    // API KEY überprüfen und akktualisieren in .env.local
    const resend = new Resend(process.env.RESEND_API_KEY)

    await resend.emails.send({
      // Mail welche bei Resend hinterlegt ist als Admin Mail wird hier verwendet
      from: "Acme <onboarding@resend.dev>",
      // Mailadressen an welche die Mail gesendet werden soll
      to: 'delivered@resend.dev',
      // Betreff der Mail
      subject: "Neue Nachricht von deiner Webseite",

      // Jedes Feld wird an das React-Mail Template wie folgt übergeben:
      html: render(EmailTemplate({ 
        name,
        email,
        phone,
        message,
        checkbox1 : checkbox1.includes("on"),
        checkbox2 : checkbox2.includes("on"),
        checkbox3 : checkbox3.includes("on"),
        lastName}))
    })
    

 
    return {
      // Bei Erfolg wird ein Objekt zurückgegeben mit success true und error null
      // Das Object wird in der useFormState Funktion verwendet und gibt den Sonner Toast aus
      // *SonnerToast von https://ui.shadcn.com/docs/components/sonner
     error: null,
     success: true

    }
  } catch (error) {
    console.log(error)
    return {
      // Bei einem Fehler wird ein Objekt zurückgegeben mit success false und error als Fehlermeldung
      error: (error as Error).message,
      success: false
    }
  }
}