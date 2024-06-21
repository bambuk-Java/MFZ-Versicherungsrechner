import fetchJsonp from 'fetch-jsonp';
import { useEffect, useRef, useState } from 'react';

export async function fetchModels(brand, setModels) {
  try {
    const response = await fetchJsonp(`https://www.carqueryapi.com/api/0.3/?callback=?&cmd=getModels&make=${brand}`);
    const jsonpData = await response.json();

    if (jsonpData.Models) {
      setModels(jsonpData.Models);
    } else {
      setModels([]);
    }
  } catch (error) {
    setModels([]);
  }
}

const formatNumberInput = (value) => {
  return value.replace(/[^0-9,]/g, '').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
};

const useCarInfo = () => {
  const brandInputRef = useRef(null);
  const valueInputRef = useRef(null);
  const placingInputRef = useRef(null);
  const dateInputRef = useRef(null);
  const extraValRef = useRef(null);
  const zuhauseRef = useRef(null);
  const arbeitsplatzRef = useRef(null);
  const beideRef = useRef(null);
  const keineRef = useRef(null);
  const privatRef = useRef(null);
  const arbeitswegRef = useRef(null);
  const geschaeftlichRef = useRef(null);
  const leasedRef = useRef(null);
  const notLeasedRef = useRef(null);

  const [models, setModels] = useState([]);
  const [value, setValue] = useState(localStorage.getItem('value') || '');
  const [extraVal, setExtraVal] = useState(localStorage.getItem('extraVal') || '');
  const [isFormValid, setIsFormValid] = useState(false);
  const [selectedModel, setSelectedModel] = useState(localStorage.getItem('selectedModel') || '');
  const [brand, setBrand] = useState(localStorage.getItem('brand') || '');

  useEffect(() => {
    localStorage.setItem('value', value);
  }, [value]);

  useEffect(() => {
    localStorage.setItem('extraVal', extraVal);
  }, [extraVal]);

  useEffect(() => {
    localStorage.setItem('selectedModel', selectedModel);
  }, [selectedModel]);

  useEffect(() => {
    localStorage.setItem('brand', brand);
  }, [brand]);

  useEffect(() => {
    const savedPlacing = localStorage.getItem('placing');
    const savedDate = localStorage.getItem('date');
    if (placingInputRef.current) {
      placingInputRef.current.value = savedPlacing || '';
    }
    if (dateInputRef.current) {
      dateInputRef.current.value = savedDate || '';
    }

    const savedGarage = localStorage.getItem('garage');
    if (savedGarage) {
      const radios = document.getElementsByName("garage");
      for (let i = 0; i < radios.length; i++) {
        if (radios[i].value === savedGarage) {
          radios[i].checked = true;
        }
      }
    }

    const savedLeased = localStorage.getItem('leased');
    if (savedLeased) {
      const radios = document.getElementsByName("leased");
      for (let i = 0; i < radios.length; i++) {
        if (radios[i].value === savedLeased) {
          radios[i].checked = true;
        }
      }
    }

    const savedUsage = localStorage.getItem('usage');
    if (savedUsage) {
      const usageArray = savedUsage.split(',');
      if (privatRef.current) privatRef.current.checked = usageArray.includes('privat');
      if (arbeitswegRef.current) arbeitswegRef.current.checked = usageArray.includes('arbeitsweg');
      if (geschaeftlichRef.current) geschaeftlichRef.current.checked = usageArray.includes('geschaeftlich');
    }
  }, []);

  useEffect(() => {
    const radios = document.getElementsByName("seconds");
    const val = localStorage.getItem('seconds');
    for (let i = 0; i < radios.length; i++) {
      if (radios[i].value === val) {
        radios[i].checked = true;
      }
    }
  }, []);

  const handleRadioChange = (event) => {
    localStorage.setItem(event.target.name, event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const value = valueInputRef.current?.value;
    const placing = placingInputRef.current?.value;
    const date = dateInputRef.current?.value;
    const extraVal = extraValRef.current?.value;
    const garage = zuhauseRef.current?.checked
      ? 'zuhause'
      : arbeitsplatzRef.current?.checked
      ? 'arbeitsplatz'
      : beideRef.current?.checked
      ? 'beide'
      : 'keine';
    const leased = leasedRef.current?.checked ? 'leased' : 'notleased';

    const usage = [
      privatRef.current?.checked ? 'privat' : '',
      arbeitswegRef.current?.checked ? 'arbeitsweg' : '',
      geschaeftlichRef.current?.checked ? 'geschaeftlich' : ''
    ].filter(Boolean).join(',');

    localStorage.setItem('brand', brand);
    localStorage.setItem('value', value);
    localStorage.setItem('placing', placing);
    localStorage.setItem('date', date);
    localStorage.setItem('extraVal', extraVal);
    localStorage.setItem('garage', garage);
    localStorage.setItem('leased', leased);
    localStorage.setItem('usage', usage);

    alert('Form submitted!');
  };

  const handleModelClick = (e) => {
    const modelName = e.target.innerText;
    const modelElement = document.getElementById('model');
    if (modelElement) {
      modelElement.innerText = modelName;
      setModels([]); // Clear models after selection
      setSelectedModel(modelName); // Save to state and localStorage
    }
  };

  const handleDateInput = (event) => {
    let value = event.target.value;
    if (value.length === 2 && !value.includes('.')) {
      event.target.value = value + '.';
    } else if (value.length > 3) {
      const [month, year] = value.split('.');
      if (year && !/^\d{4}$/.test(year)) {
        event.target.value = month + '.' + year.slice(0, 4);
      }
    }
    localStorage.setItem(event.target.name, event.target.value);
    checkFormValidity(); // Check validity on date input change
  };

  const handleKeyDown = (event) => {
    if (event.target.value.length === 3 && event.key === 'Backspace') {
      event.target.value = event.target.value.slice(0, 2);
    }
  };

  const handleSearchModels = async () => {
    const brand = brandInputRef.current?.value;
    setBrand(brand);
    await fetchModels(brand, setModels);
  };

  const handleValueChange = (event) => {
    const formattedValue = formatNumberInput(event.target.value);
    setValue(formattedValue);
    localStorage.setItem('value', formattedValue); // Save to localStorage
    checkFormValidity(); // Check validity on value change
  };

  const handleExtraValChange = (event) => {
    const formattedValue = formatNumberInput(event.target.value);
    setExtraVal(formattedValue);
    localStorage.setItem('extraVal', formattedValue); // Save to localStorage
    checkFormValidity(); // Check validity on extra value change
  };

  const checkFormValidity = () => {
    const brand = brandInputRef.current?.value || '';
    const value = parseFloat((valueInputRef.current?.value || '').replace(/'|,/g, ''));
    const placing = placingInputRef.current?.value || '';
    const date = dateInputRef.current?.value || '';
    const extraVal = parseFloat((extraValRef.current?.value || '').replace(/'|,/g, ''));
    const garage = zuhauseRef.current?.checked || arbeitsplatzRef.current?.checked || beideRef.current?.checked || keineRef.current?.checked;
    const leased = leasedRef.current?.checked || notLeasedRef.current?.checked;
    const selectedModel = document.getElementById('model')?.innerText || '';

    const isBrandValid = brand.length > 0;
    const isModelSelected = selectedModel.length > 0;
    const isValueValid = value >= 1000;
    const isDateValid = (date) => /^\d{2}\.\d{4}$/.test(date);
    const isDateDifferenceValid = () => {
      const [placingMonth, placingYear] = placing.split('.').map(Number);
      const [dateMonth, dateYear] = date.split('.').map(Number);
      const placingDate = new Date(placingYear, placingMonth - 1);
      const dateDate = new Date(dateYear, dateMonth - 1);
      const yearDifference = Math.abs(dateDate.getFullYear() - placingDate.getFullYear());
      return yearDifference <= 2;
    };
    const isYearValid = (year) => {
      const [month, yearNumber] = year.split('.').map(Number);
      return yearNumber >= 2010;
    };
    const isExtraValValid = !isNaN(extraVal);

    const isValid = isBrandValid && isModelSelected && isValueValid && isDateValid(placing) && isDateValid(date) && isDateDifferenceValid() && isYearValid(placing) && isYearValid(date) && isExtraValValid && garage && leased;
    setIsFormValid(isValid);
  };

  useEffect(() => {
    const dateInputs = [placingInputRef.current, dateInputRef.current];

    dateInputs.forEach(input => {
      if (input) {
        input.addEventListener('input', handleDateInput);
        input.addEventListener('keydown', handleKeyDown);
      }
    });

    return () => {
      dateInputs.forEach(input => {
        if (input) {
          input.removeEventListener('input', handleDateInput);
          input.removeEventListener('keydown', handleKeyDown);
        }
      });
    };
  }, []);

  useEffect(() => {
    const inputs = [
      brandInputRef.current,
      valueInputRef.current,
      placingInputRef.current,
      dateInputRef.current,
      extraValRef.current,
      zuhauseRef.current,
      arbeitsplatzRef.current,
      beideRef.current,
      keineRef.current,
      privatRef.current,
      arbeitswegRef.current,
      geschaeftlichRef.current,
      leasedRef.current,
      notLeasedRef.current,
    ];

    inputs.forEach(input => {
      if (input) {
        input.addEventListener('input', checkFormValidity);
        input.addEventListener('change', handleInputChange); // Add change event for checkboxes
      }
    });

    return () => {
      inputs.forEach(input => {
        if (input) {
          input.removeEventListener('input', checkFormValidity);
          input.removeEventListener('change', handleInputChange); // Remove change event for checkboxes
        }
      });
    };
  }, []);

  useEffect(() => {
    const carValue = parseFloat(value.replace(/'|,/g, ''));
    if (!isNaN(carValue)) {
      setExtraVal((carValue * 0.1).toFixed(0));
    }
  }, [value]);

  useEffect(() => {
    if (valueInputRef.current) {
      valueInputRef.current.value = value;
    }
    if (extraValRef.current) {
      extraValRef.current.value = extraVal;
    }
    if (brandInputRef.current) {
      brandInputRef.current.value = brand;
    }
  }, [value, extraVal, brand]);

  useEffect(() => {
    const fetchModelsEffect = async () => {
      const brand = brandInputRef.current?.value;
      await fetchModels(brand, setModels);
    };

    fetchModelsEffect();
  }, [brandInputRef.current?.value]);

  const handleInputChange = () => {
    const usage = [
      privatRef.current?.checked ? 'privat' : '',
      arbeitswegRef.current?.checked ? 'arbeitsweg' : '',
      geschaeftlichRef.current?.checked ? 'geschaeftlich' : ''
    ].filter(Boolean).join(',');

    localStorage.setItem('usage', usage);
    checkFormValidity();
  };

  return {
    brandInputRef,
    valueInputRef,
    placingInputRef,
    dateInputRef,
    extraValRef,
    zuhauseRef,
    arbeitsplatzRef,
    beideRef,
    keineRef,
    privatRef,
    arbeitswegRef,
    geschaeftlichRef,
    leasedRef,
    notLeasedRef,
    models,
    setModels,
    handleSubmit,
    handleModelClick,
    handleSearchModels,
    handleValueChange,
    handleExtraValChange,
    isFormValid,
    handleDateInput,
    handleKeyDown,
    handleRadioChange,
    selectedModel
  };
};

export default useCarInfo;
