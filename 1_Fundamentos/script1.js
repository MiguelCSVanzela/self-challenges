// conversor de temperatura

const celsius = 30; 
const fahrenheit = 86; 


const celsiusToFarenheit = (celsius) => {
  return (celsius * 9) / 5 + 32; 
}

console.log(`${celsius} equivalem a ${celsiusToFarenheit(celsius)} graus fahrenheit`)

const fahrenheitToCelsius = (fahrenheit) => {
  return ((fahrenheit - 32 ) * 5) / 9;
}
console.log(`${fahrenheit} equivalem a ${fahrenheitToCelsius(fahrenheit)} graus celsius`)