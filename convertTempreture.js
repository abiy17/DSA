function convertTemperature(celsius) {
    const kelvin = celsius + 273.15;
    const fahrenheit = celsius * 1.8 + 32;

    // Round the values to five decimal places
    const roundedKelvin = Math.round(kelvin * 1e5) / 1e5;
    const roundedFahrenheit = Math.round(fahrenheit * 1e5) / 1e5;

    return [roundedKelvin, roundedFahrenheit];
}

// Example usage
const celsius1 = 36.50;
console.log(convertTemperature(celsius1));  // Output: [309.65, 97.7]

const celsius2 = 122.11;
console.log(convertTemperature(celsius2));  // Output: [395.26, 251.798]
