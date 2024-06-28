# MFZ-Versicherungsrechner Webapplikation

VersicherungsrechnerRichtiger ist eine auf React basierende Anwendung, die entwickelt wurde, um Versicherungspolicen effizient zu berechnen. Dieses Projekt nutzt moderne Webtechnologien, um ein nahtloses Benutzererlebnis zu bieten.

## Features

- **Benutzerfreundliche Oberfläche**: Einfache Navigation und intuitives Design.
- **Echtzeitberechnungen**: Sofortige Updates und Ergebnisse bei Änderungen der Eingaben.

## Verzeichnisstruktur

```plaintext
VersicherungsrechnerRichtiger/
├── node_modules/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── components/
│   │   ├── Calculator.js
│   │   └── ...
│   ├── App.css
│   ├── App.js
│   ├── index.css
│   ├── index.js
│   └── ...
├── .gitignore
├── package.json
├── README.md
└── ...
```

## Voraussetzungen

- npm (Node.js): [Node.js herunterladen](https://nodejs.org/en)

## Installation

Um eine lokale Kopie zum Laufen zu bringen, befolge diese Schritte:

1. Repository klonen:
    ```sh
    git clone https://github.com/bambuk-Java/VersicherungsrechnerRichtiger.git
    ```
2. In das Projektverzeichnis wechseln:
    ```sh
    cd VersicherungsrechnerRichtiger
    ```
3. Abhängigkeiten installieren:
    ```sh
    npm install
    ```
4. React Router installieren:
    ```sh
    npm install react-router-dom
    ```
5. Entwicklungsserver starten:
    ```sh
    npm start
    ```

## Nutzung

Öffne `http://localhost:3000` in deinem Browser, um die Anwendung zu verwenden.

Um Tests durchzuführen, verwende:

```sh
npm test
```

Um die App für die Produktion zu bauen, führe aus:

```sh
npm run build
```

## Code-Beispiele

Hier sind einige Beispiele, wie der Code in diesem Projekt funktioniert:

### Local-Storage Usecase

```javascript
import React from 'react';
import UserData from './components/UserData';
import './App.css';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>MFZ Versicherungsrechner</h1>
                <UserData />
            </header>
        </div>
    );
}

export default App;
```

### Router (`src/index.js`):

```javascript
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HelmetProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/landing" element={<LandingPage />} />
            <Route path="/aboutcar" element={<AbtCar />} />
            <Route path="/aboutperson" element={<AbtPerson />} />
            <Route path="/aboutinsurance" element={<AbtInsurance />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/ergebnis" element={<InsuranceResultPage />} />
          </Routes>
        </Layout>
      </Router>
    </HelmetProvider>
  </React.StrictMode>
);
reportWebVitals();
```

## Persönliche Auswertung

Die Programmierung dieser Webapplikation hat meine Kenntnisse in React.js und Tailwind CSS erheblich erweitert. Besonders der Umgang mit LocalStorage und dem React Router war für mich neu und stellte eine interessante Herausforderung dar. Durch die praktische Anwendung konnte ich diese Technologien besser verstehen und effektiv einsetzen. Trotz der speziellen Ordnerstruktur bin ich der Meinung, dass ich die Anforderungen des Projekts erfolgreich umgesetzt habe. Mein Endergebnis gefällt mir sehr gut, und ich bin zufrieden mit der erreichten Funktionalität und Benutzerfreundlichkeit der Anwendung.

## Projekt-Dokumentation

1. Wireframe (Figma):
    ```
    https://www.figma.com/design/CTOW0ifg66D2nN2zikK2OG/Untitled?t=mN5wQJvkDbKvc9vn-1&classId=1ce70a8d-fce2-4bf4-939f-51785f23fd94&assignmentId=8cddfb0a-666f-4c0a-88df-a8d20065dcd2&submissionId=7b7f18fe-cad6-d8f3-91d5-7499064848dc
    ```
2. MiroBoard:
    ```
    https://www.figma.com/design/CTOW0ifg66D2nN2zikK2OG/Untitled?t=mN5wQJvkDbKvc9vn-1&classId=1ce70a8d-fce2-4bf4-939f-51785f23fd94&assignmentId=8cddfb0a-666f-4c0a-88df-a8d20065dcd2&submissionId=7b7f18fe-cad6-d8f3-91d5-7499064848dc
    ```
3. Infos:
    ```
    Informationssammlung ist im Github vorhanden
    ```

## Autor

Laurin Hubschmid - laurin.hubschmid@lernende.bbw.ch

## Schule

BBW Informatik

## Zeitraum

4. Semester IMS 2024