import { Html, Heading, Text, Img, Body, Container, Section } from "@react-email/components"

const EmailTemplate = ({
  name,
  lastName,
  email,
  phone,
  message,
  checkbox1,
  checkbox2,
  checkbox3
}: {
  name: string
  lastName: string
  email: string
  phone: string
  message: string
  checkbox1: boolean
  checkbox2: boolean
  checkbox3: boolean
}) => {

    const checkboxValue1 = checkbox1 ? "Ja" : "Nein" // Aufgabe 1 ausgewählt oder nicht
    const checkboxValue2 = checkbox2 ? "Ja" : "Nein" // Aufgabe 2 ausgewählt oder nicht
    const checkboxValue3 = checkbox3 ? "Ja" : "Nein" // Aufgabe 3 ausgewählt oder nicht

    const FirmenName = "Acme"
    const Logo = "https://www.pexels.com/de-de/foto/holz-haus-vintage-tisch-22882440/"

  return (
    <Html lang="de">
      <Body style={{ backgroundColor: "#f7fafc", padding: "20px" }}>
        <Container style={{ maxWidth: "600px", margin: "0 auto", backgroundColor: "#ffffff", padding: "20px", borderRadius: "8px", boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)" }}>
          <Section>
            <Heading style={{ fontSize: "24px", fontWeight: "bold", color: "#2d3748" }}>Neue Anfrage erhalten</Heading>
            <Text style={{ fontSize: "16px", color: "#4a5568" }}>Sie haben eine neue Anfrage von Ihrer Webseite erhalten.</Text>
          </Section>
          <Section>
            <Heading style={{ fontSize: "20px", fontWeight: "bold", color: "#2d3748", marginTop: "20px" }}>Kontaktdetails:</Heading>
            <Text style={{ fontSize: "16px", color: "#4a5568" }}>
              Name: {name} {lastName}
            </Text>
            <Text style={{ fontSize: "16px", color: "#4a5568" }}>E-Mail: {email}</Text>
            <Text style={{ fontSize: "16px", color: "#4a5568" }}>Telefon: {phone}</Text>
          </Section>
          <Section>
            <Heading style={{ fontSize: "20px", fontWeight: "bold", color: "#2d3748", marginTop: "20px" }}>Nachricht:</Heading>
            <Text style={{ fontSize: "16px", color: "#4a5568" }}>{message}</Text>
          </Section>
          <Section>
            <Heading style={{ fontSize: "20px", fontWeight: "bold", color: "#2d3748", marginTop: "20px" }}>Checkboxen:</Heading>
            <Text style={{ fontSize: "16px", color: "#4a5568" }}>Checkbox 1 (Aufgabe 1): {checkboxValue1}</Text>
            <Text style={{ fontSize: "16px", color: "#4a5568" }}>Checkbox 2 (Aufgabe 2): {checkboxValue2}</Text>
            <Text style={{ fontSize: "16px", color: "#4a5568" }}>Checkbox 3 (Aufgabe 3): {checkboxValue3}</Text>
          </Section>
          <Section>
            <Heading style={{ fontSize: "20px", fontWeight: "bold", color: "#2d3748", marginTop: "20px" }}>Unternehmen:</Heading>
            <Text style={{ fontSize: "16px", color: "#4a5568" }}>{FirmenName}</Text>
            <Img src={Logo} alt="Logo" style={{ maxWidth: "100px", marginTop: "10px" }} />
          </Section>
          <Section style={{ marginTop: "20px", fontSize: "14px", color: "#a0aec0" }}>
            <Text>Diese Nachricht wurde von Ihrer Webseite gesendet. Bei Unklarheiten melden Sie sich gerne bei max.schweller@gmail.com.</Text>
          </Section>
        </Container>
      </Body>
    </Html>
  )
}
export default EmailTemplate
