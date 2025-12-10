# Happy Thoughts


main.jsx
Startar hela React-appen, kopplar den till HTML-filen och renderar <App />. Laddar även global CSS.
Som husets ytterdörr och elcentral.

App.jsx
Huvudkomponenten där all övergripande state finns. Bestämmer vilka komponenter som ska visas och skickar data med props.
Som själva huset där alla möbler placeras.

ThoughtForm.jsx
Komponent som hanterar formuläret. Innehåller validering, felmeddelanden och karaktärräknare.
Som ett bord du skriver vid.

ThoughtCard.jsx
Komponent som visar varje tanke och håller likes-state.
Som en poster på väggen.

constants.js
Fil som innehåller återanvändbara värden som längdgränser och felmeddelanden.
Som ett förråd med mått och material.

index.css
Global styling som gäller för hela appen.
Som husets väggfärg och grundstil.

🔄 Dataflöde

Användaren skriver i formuläret → setThought() uppdaterar texten i App.jsx

ThoughtForm validerar texten

App.jsx lägger till en ny tanke i listan

Listan renderas genom .map()

Varje tanke skickas till en <ThoughtCard />

ThoughtCard visar text och har eget likes-state
