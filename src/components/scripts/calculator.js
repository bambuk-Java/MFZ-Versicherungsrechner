export const calculateFinalValue = () => {
  // Car information
  const brand = localStorage.getItem('brand') || '';
  const value = parseFloat(localStorage.getItem('value').replace(/'|,/g, '')) || 0;
  const extraVal = parseFloat(localStorage.getItem('extraVal').replace(/'|,/g, '')) || 0;
  const placingDate = localStorage.getItem('placing') || '';
  const date = localStorage.getItem('date') || '';
  const garage = localStorage.getItem('garage') || 'keine';
  const leased = localStorage.getItem('leased') === 'true';
  
  // Insurance information
  const deductible = parseFloat(localStorage.getItem('deductibleValue')) || 0;
  const kilometers = parseFloat(localStorage.getItem('kilometersValue')) || 0;
  const insuranceLevel = localStorage.getItem('insuranceLevel') || '';

  // Person information
  const gender = localStorage.getItem('gender') || '';
  const birthday = localStorage.getItem('birthday') || '';
  const license = localStorage.getItem('license') || '';
  const postalCode = localStorage.getItem('postalCode') || '';
  const nationality = localStorage.getItem('nationality') || '';
  const age = parseInt(localStorage.getItem('age'), 10) || 0;

  // Custom calculation logic
  let finalValue = 500;

  // Base calculation
  finalValue += finalValue * 0.5;
  finalValue += finalValue * 0.1;
  finalValue += finalValue * 0.2;
  finalValue += finalValue * 0.4;
  finalValue += insuranceLevel === 'vollkasko' ? 50 : insuranceLevel === 'teilkasko' ? 30 : 10;

  // Additional conditions
  if (age < 25) finalValue += 100;
  if (gender === 'male') finalValue += 50;
  if (postalCode !== '8008') finalValue += 50;
  if (leased) finalValue *= 1.2;
  if (garage === 'zuhause' || garage === 'arbeitsplatz') finalValue -= 20;
  if (new Date().getFullYear() - new Date(placingDate).getFullYear() > 12) finalValue += 50 * (deductible / 100);
  if (kilometers > 20000) finalValue += 50 * Math.floor((kilometers - 20000) / 10000);
  if (new Date().getFullYear() - new Date(license).getFullYear() < 2) finalValue += 10;
  if (nationality !== 'Schweiz') finalValue += 20;

  finalValue -= deductible * 0.3;

  return finalValue;
};
