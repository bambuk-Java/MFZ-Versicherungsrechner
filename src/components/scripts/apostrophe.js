
export function formatNumberInput(input) {

    let value = input.replace(/[^\d']/g, '');
    
    value = value.replace(/'/g, '');

    let formattedInput = '';
    let count = 0;
    for (let i = value.length - 1; i >= 0; i--) {
        if (count === 3) {
            formattedInput = "'" + formattedInput;
            count = 0;
        }
        formattedInput = value[i] + formattedInput;
        count++;
    }
    return formattedInput;
}
