import { useRef, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const usePersonInfo = () => {
    const [isFormValid, setIsFormValid] = useState(false);
    const [message, setMessage] = useState('');
    const [personInfo, setPersonInfo] = useState({
        gender: '',
        birthday: '',
        license: '',
        postalCode: '',
        nationality: '',
        age: 0,
        usage: []
    });

    const birthdayInputRef = useRef(null);
    const licenseInputRef = useRef(null);
    const genderMaleRef = useRef(null);
    const genderFemaleRef = useRef(null);
    const plzInputRef = useRef(null);
    const nationalityInputRef = useRef(null);
    const privatRef = useRef(null);
    const arbeitswegRef = useRef(null);
    const geschaeftlichRef = useRef(null);

    const navigate = useNavigate();

    const handleInputChange = () => {
        const gender = genderMaleRef.current?.checked ? 'Male' : genderFemaleRef.current?.checked ? 'Female' : '';
        const birthday = birthdayInputRef.current?.value || '';
        const license = licenseInputRef.current?.value || '';
        const postalCode = plzInputRef.current?.value || '';
        const nationality = nationalityInputRef.current?.value || '';
        const usage = [
            privatRef.current?.checked ? 'privat' : '',
            arbeitswegRef.current?.checked ? 'arbeitsweg' : '',
            geschaeftlichRef.current?.checked ? 'geschaeftlich' : ''
        ].filter(Boolean);

        setPersonInfo({
            gender,
            birthday,
            license,
            postalCode,
            nationality,
            age: calculateAge(birthday),
            usage
        });

        localStorage.setItem('gender', gender);
        localStorage.setItem('birthday', birthday);
        localStorage.setItem('license', license);
        localStorage.setItem('postalCode', postalCode);
        localStorage.setItem('nationality', nationality);
        saveCheckboxes();

        validateInputs();
    };

    const calculateAge = (birthday) => {
        const [day, month, year] = birthday.split('.');
        const birthDate = new Date(year, month - 1, day);
        const ageDifMs = Date.now() - birthDate.getTime();
        const ageDate = new Date(ageDifMs);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isFormValid) {
            navigate('/aboutinsurance');
        }
    };

    const validateInputs = () => {
        const gender = genderMaleRef.current?.checked ? 'Male' : genderFemaleRef.current?.checked ? 'Female' : '';
        const birthday = birthdayInputRef.current?.value || '';
        const license = licenseInputRef.current?.value || '';
        const postalCode = plzInputRef.current?.value || '';
        const nationality = nationalityInputRef.current?.value || '';
        const usage = [
            privatRef.current?.checked ? 'privat' : '',
            arbeitswegRef.current?.checked ? 'arbeitsweg' : '',
            geschaeftlichRef.current?.checked ? 'geschaeftlich' : ''
        ].filter(Boolean);

        const birthdayRegex = /^\d{2}\.\d{2}\.\d{4}$/;
        const isBirthdayValid = birthdayRegex.test(birthday);

        const birthDateParts = birthday.split('.');
        const birthYear = parseInt(birthDateParts[2], 10);
        const currentYear = new Date().getFullYear();
        const isBirthdayInLast80Years = birthYear >= (currentYear - 80);

        const licenseRegex = /^\d{2}\.\d{4}$/;
        const isLicenseValid = licenseRegex.test(license);

        const plzRegex = /^[1-9]\d{3}$/;
        const isPlzValid = plzRegex.test(postalCode);

    
        const isNationalityValid = nationality.trim().length > 0;
       
        const isGenderValid = gender !== '';

        const licenseDateParts = license.split('.');
        const licenseMonth = parseInt(licenseDateParts[0], 10);
        const licenseYear = parseInt(licenseDateParts[1], 10);
        const ageAtLicense = (licenseYear - birthYear) - (licenseMonth < parseInt(birthDateParts[1], 10) ? 1 : 0);
        const isAgeValid = ageAtLicense >= 18;

        setIsFormValid(
            isBirthdayValid && isBirthdayInLast80Years && isLicenseValid && isPlzValid && isNationalityValid && isGenderValid && isAgeValid
        );
    };

    const saveCheckboxes = () => {
        const checkboxes = document.querySelectorAll(`[type="checkbox"]`);
        checkboxes.forEach(el => {
            localStorage.setItem(el.id, el.checked);
        });
    };

    const loadCheckboxes = () => {
        const checkboxes = document.querySelectorAll(`[type="checkbox"]`);
        checkboxes.forEach(el => {
            el.checked = localStorage.getItem(el.id) === 'true';
        });
    };

    useEffect(() => {
        const savedGender = localStorage.getItem('gender');
        if (savedGender === 'Male' && genderMaleRef.current) {
            genderMaleRef.current.checked = true;
        } else if (savedGender === 'Female' && genderFemaleRef.current) {
            genderFemaleRef.current.checked = true;
        }

        if (birthdayInputRef.current) birthdayInputRef.current.value = localStorage.getItem('birthday') || '';
        if (licenseInputRef.current) licenseInputRef.current.value = localStorage.getItem('license') || '';
        if (plzInputRef.current) plzInputRef.current.value = localStorage.getItem('postalCode') || '';
        if (nationalityInputRef.current) nationalityInputRef.current.value = localStorage.getItem('nationality') || '';

        loadCheckboxes();
        validateInputs();
    }, []);

    useEffect(() => {
        const inputs = [
            birthdayInputRef.current,
            licenseInputRef.current,
            genderMaleRef.current,
            genderFemaleRef.current,
            plzInputRef.current,
            nationalityInputRef.current,
            privatRef.current,
            arbeitswegRef.current,
            geschaeftlichRef.current
        ];

        inputs.forEach(input => {
            if (input) {
                input.addEventListener('input', handleInputChange);
            }
        });

        return () => {
            inputs.forEach(input => {
                if (input) {
                    input.removeEventListener('input', handleInputChange);
                }
            });
        };
    }, []);

    useEffect(() => {
        const checkboxes = [
            privatRef.current,
            arbeitswegRef.current,
            geschaeftlichRef.current
        ];

        checkboxes.forEach(checkbox => {
            if (checkbox) {
                checkbox.addEventListener('change', handleInputChange);
            }
        });

        return () => {
            checkboxes.forEach(checkbox => {
                if (checkbox) {
                    checkbox.removeEventListener('change', handleInputChange);
                }
            });
        };
    }, []);

    return {
        birthdayInputRef,
        licenseInputRef,
        genderMaleRef,
        genderFemaleRef,
        handleSubmit,
        validateInputs,
        isFormValid,
        plzInputRef,
        nationalityInputRef,
        privatRef,
        arbeitswegRef,
        geschaeftlichRef,
        message,
        personInfo,
        handleInputChange
    };
};

export default usePersonInfo;
