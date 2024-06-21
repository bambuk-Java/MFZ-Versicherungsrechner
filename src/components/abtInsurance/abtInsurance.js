import React, { useEffect } from 'react';
import useInsuranceInfo from './useInsuranceInfo';
import { useNavigate } from 'react-router-dom';
import useCarInfo from '../aboutcar/useCarInfo';
import usePersonInfo from '../abtperson/usePersonInfo';
import { calculateFinalValue } from '../scripts/calculator';

function AbtInsurance() {
    const carInfo = useCarInfo();
    const insuranceInfo = useInsuranceInfo();
    const personInfo = usePersonInfo();
    const navigate = useNavigate();
    const {
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
    } = useInsuranceInfo();

    const formatNumber = (value) => {
        if (value === undefined || value === null) {
            return '0';
        }
        return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "'");
    };

    useEffect(() => {
        validateInputs();
    }, [validateInputs, deductibleValue, kilometersValue]);

    const handleCalculate = () => {
        const finalValue = calculateFinalValue();
        localStorage.setItem('finalCalculatedValue', finalValue);
        navigate('/ergebnis'); 
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <form onSubmit={handleSubmit} className='pb-32 w-full max-w-lg mx-auto'>
                <br />
                <p>{message}</p> {/* Nachricht anzeigen */}
                <br />
                <h1 className="text-center">Versicherungsdetails</h1>
                <br />
                <label htmlFor='gb'>Welche Basisdeckung möchten Sie?</label>
                <div className="flex flex-col gap-4">
                    <div className="inline-flex items-center">
                        <label className="relative flex items-center p-3 rounded-full cursor-pointer" htmlFor="haftpflicht" data-ripple-dark="true">
                            <input
                                name="insuranceLevel"
                                type="radio"
                                id="haftpflicht"
                                value="haftpflicht"
                                className="peer appearance-none h-5 w-5 rounded-full border border-blue-gray-200 text-gray-900 transition-all checked:border-gray-900 checked:bg-gradient-to-r checked:from-[#d53369] checked:to-[#daae51]"
                                onChange={handleRadioChange}
                                checked={level === 'haftpflicht'}
                            />
                            <span className="absolute top-2/4 left-2/4 h-12 w-12 -translate-y-2/4 -translate-x-2/4 rounded-full bg-blue-gray-500 opacity-0 transition-opacity peer-hover:opacity-10"></span>
                        </label>
                        <label className="mt-px font-light text-white cursor-pointer select-none" htmlFor="haftpflicht">
                            Haftpflicht
                        </label>
                    </div>
                    <div className="inline-flex items-center">
                        <label className="relative flex items-center p-3 rounded-full cursor-pointer" htmlFor="teilkasko" data-ripple-dark="true">
                            <input
                                name="insuranceLevel"
                                type="radio"
                                id="teilkasko"
                                value="teilkasko"
                                className="peer appearance-none h-5 w-5 rounded-full border border-blue-gray-200 text-gray-900 transition-all checked:border-gray-900 checked:bg-gradient-to-r checked:from-[#d53369] checked:to-[#daae51]"
                                onChange={handleRadioChange}
                                checked={level === 'teilkasko'}
                            />
                            <span className="absolute top-2/4 left-2/4 h-12 w-12 -translate-y-2/4 -translate-x-2/4 rounded-full bg-blue-gray-500 opacity-0 transition-opacity peer-hover:opacity-10"></span>
                        </label>
                        <label className="mt-px font-light text-white cursor-pointer select-none" htmlFor="teilkasko">
                            Haftpflicht + Teilkasko
                        </label>
                    </div>
                    <div className="inline-flex items-center">
                        <label className="relative flex items-center p-3 rounded-full cursor-pointer" htmlFor="vollkasko" data-ripple-dark="true">
                            <input
                                name="insuranceLevel"
                                type="radio"
                                id="vollkasko"
                                value="vollkasko"
                                className="peer appearance-none h-5 w-5 rounded-full border border-blue-gray-200 text-gray-900 transition-all checked:border-gray-900 checked:bg-gradient-to-r checked:from-[#d53369] checked:to-[#daae51]"
                                onChange={handleRadioChange}
                                checked={level === 'vollkasko'}
                            />
                            <span className="absolute top-2/4 left-2/4 h-12 w-12 -translate-y-2/4 -translate-x-2/4 rounded-full bg-blue-gray-500 opacity-0 transition-opacity peer-hover:opacity-10"></span>
                        </label>
                        <label className="mt-px font-light text-white cursor-pointer select-none" htmlFor="vollkasko">
                            Haftpflicht + Vollkasko
                        </label>
                    </div>
                </div>

                <label htmlFor='deductible' className="text-white">Selbstbehalt</label>
                <div className="relative mb-6 w-1/2">
                    <input
                        ref={deductibleInputRef}
                        id="deductible"
                        type="range"
                        min="0"
                        max="1000"
                        step="100"
                        value={deductibleValue}
                        onChange={(e) => setDeductibleValue(Number(e.target.value))}
                        className="w-full h-2 bg-white rounded-lg appearance-none cursor-pointer"
                    />
                    <div className="flex justify-end mt-2">
                        <span className="text-sm text-white">{formatNumber(deductibleValue)}.-</span>
                    </div>
                </div>

                <label htmlFor='kilometers' className="text-white">Kilometer jährlich</label>
                <div className="relative mb-6 w-1/2">
                    <input
                        ref={kilometerInputRef}
                        id="kilometers"
                        type="range"
                        min="0"
                        max="50000"
                        step="1000"
                        value={kilometersValue}
                        onChange={(e) => setKilometersValue(Number(e.target.value))}
                        className="w-full h-2 bg-white rounded-lg appearance-none cursor-pointer"
                    />
                    <div className="flex justify-end mt-2">
                        <span className="text-sm text-white">{formatNumber(kilometersValue)}</span>
                    </div>
                </div>
                <button
                    type="submit"
                    className={`mt-4 px-4 py-2 bg-gradient-to-r from-[#d53369] to-[#daae51] text-white rounded-full ${!isFormValid ? 'cursor-not-allowed opacity-50' : ''}`}
                    disabled={!isFormValid}
                    onClick={handleCalculate}
                >
                    Berechnen
                </button>
            </form>
        </div>
    );
}

export default AbtInsurance;
