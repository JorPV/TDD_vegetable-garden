// Get yield for plant with environment factors
const getYieldForPlant = (plant, environment) => {
  let getYield;
  console.log("plant.factor", plant.factor)
	console.log("plant.factor.sun", plant.factor.sun)
  if (plant.factor.sun.medium && plant.factor.wind.low) {
    // yield with NO environmental factors
    getYield = plant.yield;
  } else {
    // yield WITH environmental factors
    getYield = plant.yield * environmentFactor.sun * environmentFactor.wind;
  }
  return getYield;
};
getYieldForPlant();
console.log("hello");

// Get yield for crop, simple
const getYieldForCrop = (vegetable) => {
  const yieldForCrop = vegetable.crop.yield * vegetable.numCrops;
  return yieldForCrop;
};

// Calculate total yield with multiple crops
// Calculate total yield with 0 amount
const getTotalYield = (farmCropsYield) => {
  let result = 0;
  farmCropsYield.crops.forEach((crops) => {
    result += crops.crop.yield * crops.numCrops;
  });
  return result;
};

// Calculate the cost for a crop
const getCostsForCrop = (vegetable) =>
  vegetable.sowingPrice * vegetable.plantsPerCrop * vegetable.numCrops;

// Calculate the revenue for a crop (without environmental factors)
const getRevenueForCrop = (vegetable) =>
  vegetable.salePrice *
  (vegetable.yield * vegetable.plantsPerCrop * vegetable.numCrops);


// Calculate the profit for a crop (without environmental factors)
const getProfitForCrop = (vegetable) => {
  return getRevenueForCrop(vegetable) - getCostsForCrop(vegetable);
};

// Calculate the profit for multiple crops (without environmental factors)
const getTotalProfit = (crops) => {
  const arrayOfProfit = []; //create an empty array 
  arrayOfProfit.push(getProfitForCrop(crops.vegetable)); //push the profit of each crop into the array
  arrayOfProfit.reduce((previousValue, currentValue) => {
    return previousValue + currentValue;
  });
  return arrayOfProfit;
};

// getTotalProfit();

module.exports = {
  getYieldForPlant,
  getYieldForCrop,
  getTotalYield,
  getCostsForCrop,
  getRevenueForCrop,
  getProfitForCrop,
  getTotalProfit,
};

// const getCostsForCrop = (vegetable) => {
//   let costPerCrop = 0;
//   vegetable.plantType.forEach((plantType) => {
//    costPerCrop = plantType.crop.sowingPrice *
//       plantType.crop.plantsPerCrop *
//       plantType.numCrops;
//   });
//   return costPerCrop;
// };
