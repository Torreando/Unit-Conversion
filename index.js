/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

let inputEl = document.getElementById("input")
const convertBtn = document.getElementById("btn")
const lengthEl = document.getElementById("length-el")
const volumeEl = document.getElementById("volume-el")
const massEl = document.getElementById("mass-el")

const metertoFeet = 3.281
const litertoGallon = 0.264
const kilotoPound = 2.204


convertBtn.addEventListener("click", function(){
    const baseValue = (inputEl.value * 1000)/1000
    
    lengthEl.innerHTML =  `${baseValue} meters = ${parseFloat(baseValue * metertoFeet).toFixed(3)} feet | ${baseValue} feet = ${(parseFloat(baseValue/metertoFeet).toFixed(3))} meters `
    
    volumeEl.innerHTML = `${baseValue} liters = ${parseFloat(baseValue * litertoGallon).toFixed(3)} gallon | ${baseValue} gallons = ${(parseFloat(baseValue/litertoGallon).toFixed(3))} gallon `
    
    massEl.textContent = `${baseValue} kilos = ${parseFloat(baseValue * kilotoPound).toFixed(3)} pound | ${baseValue} kilos = ${(parseFloat(baseValue/kilotoPound).toFixed(3))} pound `
    }
)

    
    
    