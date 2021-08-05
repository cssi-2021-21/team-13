

const clothingWeight = 1.03888
const furnitureWeight = 1
const entertainmentWeight = 1
const officeWeight = 1

const fuelWeight = 1
const airWeight = 1
const electricityWeight = 1

const meatWeight = 1
const dairyWeight = 1
const grainsWeight = 1
const fruitsWeight = 1
const snackWeight = 1





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














