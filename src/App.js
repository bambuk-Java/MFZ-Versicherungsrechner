import './App.css';
import LandingPage from './components/landing/landingpage.js';
import { HelmetProvider } from 'react-helmet-async';

function App() {
  return (
    <div className="App">
      <HelmetProvider>
        <LandingPage />
      </HelmetProvider>
    </div>
  );
}

export default App;
