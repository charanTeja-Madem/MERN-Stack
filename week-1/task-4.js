// Assignment 1: Daily Temperature Analyzer
// ----------------------------------------
// Scenario : You are analyzing daily temperatures recorded by a weather app.

// Test data:
// const temperatures = [32, 35, 28, 40, 38, 30, 42];

// Tasks:
//     1. filter() temperatures above 35
//     2. map() to convert all temperatures from Celsius → Fahrenheit
//     3. reduce() to calculate average temperature
//     4. find() first temperature above 40
//     5. findIndex() of temperature 28

// Daily temperatures array in Celsius
const temperatures = [32, 35, 28, 40, 38, 30, 42];
// 1. Filter temperatures above 35
const above35 = temperatures.filter(temp => temp > 35);
console.log("Temperatures above 35°C:", above35);
// 2. Convert all temperatures from Celsius to Fahrenheit
const toFahrenheit = temperatures.map(temp => (temp * 9/5) + 32);
console.log("Temperatures in Fahrenheit:", toFahrenheit);
// 3. Calculate average temperature
const averageTemp = temperatures.reduce((acc, temp) => acc + temp, 0) / temperatures.length;
console.log("Average temperature:", averageTemp);
// 4. Find first temperature above 40
const firstAbove40 = temperatures.find(temp => temp > 40);
console.log("First temperature above 40°C:", firstAbove40);
// 5. Find index of temperature 28

const index28 = temperatures.findIndex(temp => temp === 28);
console.log("Index of temperature 28°C:", index28);