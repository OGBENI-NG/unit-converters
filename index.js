/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const inputEl = document.getElementById("input")
const convertBtn = document.getElementById("convert-btn")
const lengthEl = document.getElementById("length-el")
const volumeEl = document.getElementById("volume-el")
const massEl = document.getElementById("mass-el")

const meterToFeet =  3.281
const literToGallon =  0.264
const kiloToPound =  2.204

convertBtn.addEventListener("click", function() {
    let meterValue = inputEl.value
    let literValue = inputEl.value
    let massValue = inputEl.value
    
    lengthEl.textContent = `${meterValue} meter = ${ meterValue * meterToFeet.toFixed(2) } feet |
     ${ massValue } feet = ${ (meterValue / meterToFeet).toFixed(2) } meter` 
     
    volumeEl.textContent = `${ literValue } liter = ${literValue * literToGallon} gallon | 
    ${ literValue } liter = ${ (literValue / literToGallon).toFixed(2) } gallons`
    
    massEl.textContent = `${massValue} kilogram = ${massValue * kiloToPound.toFixed(2)} pounds |
    ${massValue} pounds = ${(massValue / kiloToPound).toFixed(2)} kilogram`
})