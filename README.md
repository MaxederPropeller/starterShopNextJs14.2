# Blanco Shop - Next.js 14.2 E-Commerce Vorlage

[![Blanco Shop Demo](https://your-demo-screenshot-url.png)](https://your-live-demo-url)

Blanco Shop ist eine hochmoderne E-Commerce-Vorlage, die auf Next.js 14.2, TypeScript und einer Vielzahl von erstklassigen Technologien basiert. Sie bietet eine solide Grundlage für den schnellen Aufbau deines Online-Shops und liefert gleichzeitig ein außergewöhnliches Benutzererlebnis.

## Hauptmerkmale

* **Next.js 14.2:** Nutzt die neuesten Next.js-Funktionen für blitzschnelle Leistung, Server Components, Streaming und optimierte SEO.
* **TypeScript:**  Strikte Typisierung für verbesserte Codequalität, Wartbarkeit und weniger Fehler.
* **Stripe Integration:** Sichere und nahtlose Zahlungsabwicklung mit Stripe.
* **Firebase:** Leistungsstarke Backend-Dienste für Authentifizierung, Datenbank (Firestore) und mehr.
* **Framer Motion:** Erstelle ansprechende Animationen und Übergänge für ein dynamisches Einkaufserlebnis.
* **Shadcn/UI:** Ein flexibles und stilvolles Komponentenbibliothek für schnelles UI-Design.
* **Server Actions:** Führe sicher serverseitige Logik aus, um sensible Daten zu schützen und die Leistung zu optimieren.

## Erste Schritte

1. **Klone das Repository:**
   ```bash
   git clone [ungültige URL entfernt]
   cd blanco-shop

2. **Installiere Abhängigkeiten:**

    ```bash
    npm install
    # oder
    yarn install

3. **Konfiguriere Umgebungsvariablen:**
Erstelle eine .env.local Datei und füge deine Stripe API-Schlüssel, Firebase-Konfiguration und andere geheime Schlüssel hinzu (siehe .env.example als Vorlage).

4. **Installation der Dienste:**
- Firebase
    ```bash
    npm i firebase 
    npm init firebase 
    ...weiter

- Stripe
    ```bash
    npm install @stripe/react-stripe-js 
    npm install stripe @stripe/stripe-js

- Resend und Mail
    ```bash
    npm install resend
    npm install react-email @react-email/components @react-email/render

- Kinde Auth
    ```bash
    npm i @kinde-oss/kinde-auth-nextjs

- ShadCN/Ui
    ```bash
    npx shadcn-ui@latest init         
    npx shadcn-ui@latest add card   
    npx shadcn-ui@latest add carousel   
    npm install embla-carousel-autoplay --save
    npx shadcn-ui@latest add checkbox   
    npx shadcn-ui@latest add drawer   
    npm install @radix-ui/react-dialog
    npx shadcn-ui@latest add input   
    npx shadcn-ui@latest add label   
    npx shadcn-ui@latest add sheet   
    npm install sonner next-themes   
    npx shadcn-ui@latest add sonner   
    npx shadcn-ui@latest add textarea  
    npm install vaul 
   
- Framer Motion 
    ```bash
    npm install framer-motion   

5. **Starte den Entwicklungsserver:**
    ```bash
    npm run dev
    # oder
    yarn dev

## Anpassung
Blanco Shop ist darauf ausgelegt, hochgradig anpassbar zu sein. Hier sind einige Bereiche, die du anpassen kannst: