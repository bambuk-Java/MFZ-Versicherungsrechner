import { useState, useRef, useEffect } from 'react';

const useInsuranceInfo = () => {
    const deductibleInputRef = useRef(null);
    const kilometerInputRef = useRef(null);
    const [deductibleValue, setDeductibleValue] = useState(parseFloat(localStorage.getItem('deductibleValue')) || 0);
    const [kilometersValue, setKilometersValue] = useState(parseFloat(localStorage.getItem('kilometersValue')) || 0);
    const [message, setMessage] = useState('');
    const [isFormValid, setIsFormValid] = useState(false);
    const [level, setLevel] = useState(localStorage.getItem('insuranceLevel') || '');

    const handleRadioChange = (event) => {
        const value = event.target.value;
        setLevel(value);
        localStorage.setItem('insuranceLevel', value);
        validateInputs();
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isFormValid) {
            console.log('Formular abgeschickt');
        } else {
            setMessage('Bitte füllen Sie alle Felder korrekt aus.');
        }
    };

    const validateInputs = () => {
        const deductible = parseFloat(deductibleInputRef.current?.value);
        const kilometers = parseFloat(kilometerInputRef.current?.value);
        const isLevelValid = level !== '';

        const isValid = !isNaN(deductible) && !isNaN(kilometers) && isLevelValid;
        setIsFormValid(isValid);
    };

    useEffect(() => {
        localStorage.setItem('deductibleValue', deductibleValue);
        localStorage.setItem('kilometersValue', kilometersValue);
    }, [deductibleValue, kilometersValue]);

    useEffect(() => {
        validateInputs();
    }, [deductibleValue, kilometersValue, level]);

    useEffect(() => {
        if (deductibleInputRef.current) {
            deductibleInputRef.current.value = deductibleValue;
        }
        if (kilometerInputRef.current) {
            kilometerInputRef.current.value = kilometersValue;
        }
    }, [deductibleValue, kilometersValue]);

    return {
        deductibleInputRef,
        kilometerInputRef,
        handleSubmit,
        handleRadioChange,
        validateInputs,
        isFormValid,
        deductibleValue,
        setDeductibleValue,
        kilometersValue,
        setKilometersValue,
        message,
        level
    };
};

export default useInsuranceInfo;
