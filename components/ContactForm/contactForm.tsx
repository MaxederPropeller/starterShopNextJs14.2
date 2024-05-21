"use client"
import { sendEmail } from "@/components/ContactForm/action-mail-contactForm"
import { useEffect, useRef } from "react"
import { useFormState } from "react-dom"
import { toast } from "sonner"
import { Card, CardContent, CardHeader } from "../ui/card"
import { Input } from "../ui/input"
import { Textarea } from "../ui/textarea"
import { Label } from "../ui/label"
import { Button } from "../ui/button"
import H2No from "../styledComponents/h2No"
import PNo from "../styledComponents/pNo"


export default function ContactForm() {

  // Formular State für das Kontaktformular und die Server Action
  const [sendEmailState, sendEmailAction] = useFormState(sendEmail, {
    error: null,
    success: false
  })
  // Referenz für das Formular
  const formRef = useRef<HTMLFormElement>(null)

// Das passiert nachdem die Mail verschickt wurde und die Server Action ausgeführt wurde
  useEffect(() => {
    
    if (sendEmailState.success) {
      // SonnerToast von https://ui.shadcn.com/docs/components/sonner
        toast("Ihre Anfrage wurde verschickt.", {
            description: "Wir werden uns in Kürze bei Ihnen melden.",
            icon: "✅",})
          // Formular zurücksetzen
          if (formRef.current) {
            formRef.current.reset()
          }
    }
    if (sendEmailState.error) {
      // SonnerToast von https://ui.shadcn.com/docs/components/sonner
        toast("Ihre Anfrage konnte nicht verschickt werden.", {
            description: "Bitte versuchen Sie es erneut.",
            icon: "❌",})
        

          
    }
  }, [sendEmailState])



  // Textlicher Inhalt für das Kontaktformular
  const contentValue = {
    title: "KontaktFormular",
    description: "Füllen Sie das Formular aus und wir werden uns in Kürze bei Ihnen melden.",

    checkBox1: "Auftrag anfragen",
    checkBox2: "Beratung anfragen",
    checkBox3: "Kostenloses Angebot anfragen",


  }



  return (
    <Card className="w-full max-w-7xl mx-4 lg:mx-0">

        <form action={sendEmailAction} ref={formRef}>
      
      
        <CardHeader>
            <H2No content={contentValue.title} />
            <PNo content={contentValue.description} />
        </CardHeader>
      

        <CardContent>
        <div className="flex flex-col gap-4">


              <Label htmlFor="name">Name</Label>
              <Input type="text" id="name" name="name" />

              <Label htmlFor="nachName">Nachname</Label>
              <Input type="text" id="nachName" name="lastName" />

              <Label htmlFor="email">Email</Label>
              <Input type="email" id="email" name="email" />

              <Label htmlFor="phone">Phone</Label>
              <Input type="text" id="phone" name="phone" />

                <div className="flex w-full justify-between flex-col lg:flex-row gap-2 my-4 "> 

                    <div className="flex justify-center items-center gap-2">
                        <Label className="cursor-pointer w-full" htmlFor="checkbox">
                            {contentValue.checkBox1}
                        </Label>
                        <Input className="w-6 h-6" type="checkbox" id="checkbox" name="checkbox1" />
                    </div>

                    <div className="flex justify-center items-center gap-2">
                        <Label className="cursor-pointer w-full" htmlFor="checkbox">
                            {contentValue.checkBox2}
                        </Label>
                        <Input className="w-6 h-6" type="checkbox" id="checkbox" name="checkbox2" />
                    </div>

                    <div className="flex justify-center items-center gap-2">
                        <Label className="cursor-pointer w-full" htmlFor="checkbox">
                            {contentValue.checkBox3}
                        </Label>
                        <Input className="w-6 h-6" type="checkbox" id="checkbox" name="checkbox3" />
                    </div>
                   
                    
                </div>


              <Label htmlFor="message">Message</Label>
              <Textarea name="message" id="message" /> 


              <Button type="submit">Send</Button>
        </div>
        </CardContent> 
 
            </form>
    </Card>
 
)
}