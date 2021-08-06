

const clothingWeight = 1.03888
const furnitureWeight = 1.022
const entertainmentWeight = 1.05
const officeWeight = 0.65

const fuelWeight = 1.05
const airWeight = 0.893
const electricityWeight = 1.287

const meatWeight = 5.793
const dairyWeight = 2.411
const grainsWeight = 1.088
const fruitsWeight = 1.174
const snackWeight = 2.223





const calculateTotals = () => {
    
    const shoppingT = document.querySelector('#clothing').value * clothingWeight + 
                        document.querySelector('#furniture').value * furnitureWeight +
                        document.querySelector('#entertainment').value * entertainmentWeight + 
                        document.querySelector('#office').value * officeWeight;

    document.querySelector('#shoppingTotal').innerHTML = shoppingT;

    const energyT = document.querySelector('#fuel').value * fuelWeight + 
                        document.querySelector('#air').value * airWeight +
                        document.querySelector('#electricity').value * electricityWeight;

    document.querySelector('#energyTotal').innerHTML = energyT;

    const foodT = document.querySelector('#meat').value * meatWeight + 
                        document.querySelector('#dairy').value * dairyWeight +
                        document.querySelector('#grains').value * grainsWeight + 
                        document.querySelector('#fruits').value * fruitsWeight +
                        document.querySelector('#snacks').value * snackWeight;
                        
    document.querySelector('#foodTotal').innerHTML = foodT;


    document.querySelector('#total').innerHTML = shoppingT + energyT + foodT;


}














