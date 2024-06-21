
import React, { useEffect } from 'react';
import usePersonInfo from './usePersonInfo.js';

function AbtPerson() {
    const {
        birthdayInputRef,
        licenseInputRef,
        genderMaleRef,
        genderFemaleRef,
        handleSubmit,
        validateInputs,
        isFormValid,
        plzInputRef,
        nationalityInputRef,
        message,
    } = usePersonInfo();

    useEffect(() => {
        validateInputs();
    }, [validateInputs]);

    const handleFormattedPlzChange = (event) => {
        const value = event.target.value;
        const formattedValue = value.replace(/\D/g, '').slice(0, 4);
        event.target.value = formattedValue;
        validateInputs();
    };

    const handleFormattedBirthdayChange = (event) => {
        const value = event.target.value.replace(/\D/g, '');
        let formattedValue = '';
        if (value.length <= 2) {
            formattedValue = value;
        } else if (value.length <= 4) {
            formattedValue = `${value.slice(0, 2)}.${value.slice(2)}`;
        } else {
            formattedValue = `${value.slice(0, 2)}.${value.slice(2, 4)}.${value.slice(4, 8)}`;
        }
        event.target.value = formattedValue;
        validateInputs();
    };

    const handleFormattedLicenseChange = (event) => {
        const value = event.target.value.replace(/\D/g, '');
        let formattedValue = '';
        if (value.length <= 2) {
            formattedValue = value;
        } else {
            formattedValue = `${value.slice(0, 2)}.${value.slice(2, 6)}`;
        }
        event.target.value = formattedValue;
        validateInputs();
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <form onSubmit={handleSubmit} className="w-full max-w-lg mx-auto">
                <h1 className="text-center">Personendaten</h1>
                <br />
                <label>Geschlecht</label>
                <br />
                <div className="inline-flex items-center">
                    <label className="relative flex items-center p-3 rounded-full cursor-pointer" htmlFor="male" data-ripple-dark="true">
                        <input
                            name="gender"
                            type="radio"
                            id="male"
                            value="Male"
                            className="peer appearance-none h-5 w-5 rounded-full border border-blue-gray-200 text-gray-900 transition-all checked:border-gray-900 checked:bg-gradient-to-r checked:from-[#d53369] checked:to-[#daae51]"
                            ref={genderMaleRef}
                            onChange={validateInputs}
                        />
                        <span className="absolute top-2/4 left-2/4 h-12 w-12 -translate-y-2/4 -translate-x-2/4 rounded-full bg-blue-gray-500 opacity-0 transition-opacity peer-hover:opacity-10"></span>
                    </label>
                    <label className="mt-px font-light text-white cursor-pointer select-none" htmlFor="male">
                        Männlich
                    </label>
                </div>
                <div className="inline-flex items-center">
                    <label className="relative flex items-center p-3 rounded-full cursor-pointer" htmlFor="female" data-ripple-dark="true">
                        <input
                            name="gender"
                            type="radio"
                            id="female"
                            value="Female"
                            className="peer appearance-none h-5 w-5 rounded-full border border-blue-gray-200 text-gray-900 transition-all checked:border-gray-900 checked:bg-gradient-to-r checked:from-[#d53369] checked:to-[#daae51]"
                            ref={genderFemaleRef}
                            onChange={validateInputs}
                        />
                        <span className="absolute top-2/4 left-2/4 h-12 w-12 -translate-y-2/4 -translate-x-2/4 rounded-full bg-blue-gray-500 opacity-0 transition-opacity peer-hover:opacity-10"></span>
                    </label>
                    <label className="mt-px font-light text-white cursor-pointer select-none" htmlFor="female">
                        Weiblich
                    </label>
                </div>
                <br />
                <div className="w-72">
                    <div className="relative w-full min-w-[200px] h-10">
                        <input
                            ref={birthdayInputRef}
                            pattern="^(0[1-9]|[12][0-9]|3[01])\.(0[1-9]|1[0-2])\.(\d{4})$"
                            className="peer w-full h-full bg-transparent text-white-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-white disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-white placeholder-shown:border-t-white border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-white focus:border-white"
                            placeholder=" "
                            onChange={handleFormattedBirthdayChange}
                        />
                        <label
                            className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-white leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-white transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-white peer-focus:text-white before:border-white peer-focus:before:!border-white after:border-white peer-focus:after:!border-white"
                        >
                            Geburtsdatum (TT.MM.JJJJ)
                        </label>
                    </div>
                </div>
                <br />
                <div className="w-72">
                    <div className="relative w-full min-w-[200px] h-10">
                        <input
                            ref={licenseInputRef}
                            pattern="^(0[1-9]|1[0-2])\.(\d{4})$"
                            className="peer w-full h-full bg-transparent text-white-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-white disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-white placeholder-shown:border-t-white border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-white focus:border-white"
                            placeholder=" "
                            onChange={handleFormattedLicenseChange}
                        />
                        <label
                            className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-white leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-white transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-white peer-focus:text-white before:border-white peer-focus:before:!border-white after:border-white peer-focus:after:!border-white"
                        >
                            Datum der Fahrprüfung (MM.JJJJ)
                        </label>
                    </div>
                </div>
                <br />
                <div className="w-72">
                    <div className="relative w-full min-w-[200px] h-10">
                        <input
                            ref={plzInputRef}
                            pattern="^\d{4}$"
                            className="peer w-full h-full bg-transparent text-white-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-white disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-white placeholder-shown:border-t-white border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-white focus:border-white"
                            placeholder=" "
                            onChange={handleFormattedPlzChange}
                        />
                        <label
                            className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-white leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-white transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-white peer-focus:text-white before:border-white peer-focus:before:!border-white after:border-white peer-focus:after:!border-white"
                        >
                            PLZ
                        </label>
                    </div>
                </div>
                <br />
                <div className="w-72">
                    <div className="relative w-full min-w-[200px] h-10">
                        <input
                            ref={nationalityInputRef}
                            className="peer w-full h-full bg-transparent text-white-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-white disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-white placeholder-shown:border-t-white border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-white focus:border-white"
                            placeholder=" "
                            onChange={validateInputs}
                        />
                        <label
                            className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-white leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-white transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-white peer-focus:text-white before:border-white peer-focus:before:!border-white after:border-white peer-focus:after:!border-white"
                        >
                            Nationalität
                        </label>
                    </div>
                </div>
                <br />
                <p>{message}</p> {/* Nachricht anzeigen */}
                <br />
                <br />
                <button className={`pb-64 z-10 ${!isFormValid ? 'cursor-not-allowed opacity-50' : ''}`} 
                    type="submit"
                    disabled={!isFormValid}
                >
                    Weiter
                </button>
            </form>
        </div>
    );
}

export default AbtPerson;