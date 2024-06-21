import React from "react";
import { useNavigate } from "react-router-dom";

function Faq() {
  return (
    <div className="container flex flex-col justify-center p-4 mx-auto md:p-8 pb-32">
        <h2 className="mb-12 text-4xl font-bold text-center sm:text-5xl">Häufig Gestellte Fragen</h2>
        <div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 divide-white pb-32">
          <details id="automarke-modell">
            <summary className="py-2 outline-none cursor-pointer focus:underline">Automarke & Modell</summary>
            <div className="px-4 pb-4">
              <p>Bitte geben Sie die Automarke und das genaue Modell Ihres Fahrzeugs an, um die passende Versicherung zu berechnen. Dies hilft uns, das Risiko genau einzuschätzen und die passende Versicherung für Ihr Auto zu finden.</p>
            </div>
          </details>
          <details id="wert-des-autos">
            <summary className="py-2 outline-none cursor-pointer focus:underline">Wert des Autos</summary>
            <div className="px-4 pb-4">
              <p>Der Wert Ihres Autos ist entscheidend für die Bestimmung Ihrer Versicherungsprämie. Bitte geben Sie den aktuellen Marktwert an. Dies stellt sicher, dass die Versicherung im Schadensfall den richtigen Betrag abdeckt.</p>
            </div>
          </details>
          <details id="inverkehrssetzung">
            <summary className="py-2 outline-none cursor-pointer focus:underline">Inverkehrssetzung</summary>
            <div className="px-4 pb-4">
              <p>Das Datum der ersten Inverkehrssetzung Ihres Fahrzeugs wird benötigt, um den Versicherungsbeitrag korrekt zu berechnen. Dies hilft uns, das Alter und den Wertverlust Ihres Autos besser einzuschätzen.</p>
            </div>
          </details>
          <details id="kaufjahr">
            <summary className="py-2 outline-none cursor-pointer focus:underline">Kaufjahr</summary>
            <div className="px-4 pb-4">
              <p>Geben Sie das Jahr an, in dem Sie das Auto gekauft haben, um den Versicherungsbeitrag entsprechend anzupassen. Das Kaufjahr ist ein wichtiger Faktor für die Abschätzung des Fahrzeugwerts und der Versicherungsprämie.</p>
            </div>
          </details>
          <details id="geleast">
            <summary className="py-2 outline-none cursor-pointer focus:underline">Geleast?</summary>
            <div className="px-4 pb-4">
              <p>Bitte teilen Sie uns mit, ob Ihr Fahrzeug geleast ist, da dies die Versicherungsbedingungen beeinflussen kann. Leasingfahrzeuge haben oft spezielle Anforderungen und Konditionen, die wir berücksichtigen müssen.</p>
            </div>
          </details>
          <details id="wert-der-sonderausstattung">
            <summary className="py-2 outline-none cursor-pointer focus:underline">Wert der Sonderausstattung</summary>
            <div className="px-4 pb-4">
              <p>Falls Ihr Fahrzeug über Sonderausstattungen verfügt, geben Sie bitte deren Gesamtwert an. Sonderausstattungen können den Wert Ihrer Versicherung erhöhen, daher ist es wichtig, ihren Wert genau zu kennen.</p>
            </div>
          </details>
          <details id="nutzung-des-autos">
            <summary className="py-2 outline-none cursor-pointer focus:underline">Wie nutzen Sie Ihr Auto? (Privat, Arbeitsweg, Geschäftlich)</summary>
            <div className="px-4 pb-4">
              <p>Die Nutzung Ihres Fahrzeugs (privat, für den Arbeitsweg oder geschäftlich) beeinflusst die Versicherungsprämie. Wir benötigen diese Information, um die Risiken besser zu bewerten und die passende Deckung zu gewährleisten.</p>
            </div>
          </details>
          <details id="garage-vorhanden">
            <summary className="py-2 outline-none cursor-pointer focus:underline">Garage Vorhanden (Arbeitsplatz, Zuhause, beiden, keine)</summary>
            <div className="px-4 pb-4">
              <p>Teilen Sie uns mit, ob und wo Ihr Fahrzeug regelmäßig geparkt wird (Garage am Arbeitsplatz, Zuhause, beides oder keine). Fahrzeuge in einer Garage sind in der Regel besser geschützt und haben daher oft niedrigere Versicherungsprämien.</p>
            </div>
          </details>
          <details id="geschlecht">
            <summary className="py-2 outline-none cursor-pointer focus:underline">Geschlecht</summary>
            <div className="px-4 pb-4">
              <p>Zur Kalkulation der Versicherungsprämie benötigen wir Ihr Geschlecht. Studien zeigen, dass Männer und Frauen unterschiedlich gefahren werden, was die Versicherungsprämie beeinflusst.</p>
            </div>
          </details>
          <details id="geburtsdatum">
            <summary className="py-2 outline-none cursor-pointer focus:underline">Geburtsdatum</summary>
            <div className="px-4 pb-4">
              <p>Ihr Geburtsdatum wird für die Berechnung des Versicherungsbeitrags benötigt. Jüngere Fahrer zahlen oft höhere Prämien, da sie statistisch gesehen ein höheres Unfallrisiko haben.</p>
            </div>
          </details>
          <details id="datum-der-fahrpruefung">
            <summary className="py-2 outline-none cursor-pointer focus:underline">Datum der Fahrprüfung</summary>
            <div className="px-4 pb-4">
              <p>Bitte geben Sie das Datum an, an dem Sie Ihre Fahrprüfung bestanden haben. Dies hilft uns, Ihre Fahrerfahrung zu berücksichtigen, was sich auf Ihre Prämie auswirken kann.</p>
            </div>
          </details>
          <details id="plz">
            <summary className="py-2 outline-none cursor-pointer focus:underline">PLZ</summary>
            <div className="px-4 pb-4">
              <p>Die Postleitzahl Ihres Wohnortes ist erforderlich, um die Versicherungsprämie korrekt zu berechnen. Verschiedene Regionen haben unterschiedliche Unfallraten und Risiken.</p>
            </div>
          </details>
          <details id="nationalitaet">
            <summary className="py-2 outline-none cursor-pointer focus:underline">Nationalität</summary>
            <div className="px-4 pb-4">
              <p>Für die Berechnung des Versicherungsbeitrags benötigen wir Ihre Nationalität. In einigen Fällen können nationale Unterschiede in den Fahrgewohnheiten die Prämien beeinflussen.</p>
            </div>
          </details>
          <details id="versicherungsart">
            <summary className="py-2 outline-none cursor-pointer focus:underline">Haftpflicht, Haftpflicht+ Teilkasko, Haftpflicht + Vollkasko</summary>
            <div className="px-4 pb-4">
              <p>Wählen Sie die Art der Versicherung, die Sie abschließen möchten: Haftpflicht, Haftpflicht mit Teilkasko oder Haftpflicht mit Vollkasko. Jede Option bietet unterschiedliche Deckungen und Kosten.</p>
            </div>
          </details>
          <details id="selbstbehalt">
            <summary className="py-2 outline-none cursor-pointer focus:underline">Selbstbehalt</summary>
            <div className="px-4 pb-4">
              <p>Bitte geben Sie den gewünschten Selbstbehalt an, der bei einem Schadenfall von Ihnen selbst getragen wird. Ein höherer Selbstbehalt senkt in der Regel die Prämie, erhöht jedoch Ihre Kosten im Schadensfall.</p>
            </div>
          </details>
          <details id="kilometer-jaehrlich">
            <summary className="py-2 outline-none cursor-pointer focus:underline">Kilometer jährlich</summary>
            <div className="px-4 pb-4">
              <p>Geben Sie die geschätzte jährliche Fahrleistung Ihres Fahrzeugs an. Die jährliche Kilometerleistung beeinflusst die Prämie, da höhere Fahrleistungen mit einem höheren Risiko verbunden sind.</p>
            </div>
          </details>
        </div>
    </div>
  );
}

export default Faq;
