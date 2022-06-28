// Get yield for plant with environment factors
const getYieldForPlant = (plant, factors) => {
  let getYield;
  let sunValue = factors.sun;
  let windValue = factors.wind;
  let fullYield = 100;
  console.log("Sun value", sunValue);
  console.log("Wind value", windValue);
  if (plant.factor === undefined) {
    // yield with NO environmental factors
    getYield = plant.yield;
  } else {
    // yield WITH environmental factors

    getYield =
      plant.yield *
      ((fullYield - plant.factor.sun.sunValue) / 100) *
      ((fullYield - plant.factor.wind.windValue) / 100);
  }
  console.log("factors", factors);
  console.log("factors.sun.low", plant.factor.sun.sunValue);
  console.log("factors.wind.medium", plant.factor.wind.windValue);
  return getYield;
};

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
// const getTotalProfit = (crops) => {
//   const arrayOfProfit = []; //create an empty array
//   arrayOfProfit.push(getProfitForCrop(crops.vegetable)); //push the profit of each crop into the array
//   arrayOfProfit.reduce((previousValue, currentValue) => {
//     return previousValue + currentValue;
//   });
//   return arrayOfProfit;
// };

module.exports = {
  getYieldForPlant,
  getYieldForCrop,
  getTotalYield,
  getCostsForCrop,
  getRevenueForCrop,
  getProfitForCrop,
  // getTotalProfit,
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
