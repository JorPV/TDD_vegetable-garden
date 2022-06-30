// Get yield for plant with environment factors
const getYieldForPlant = (plant, factors) => {
  let getYield;
  const fullYield = 100;
  if (!factors) {
    // yield with NO environmental factors
    getYield = plant.yield;
    return getYield;
  } else {
    // yield WITH environmental factors
    let sunValue = factors.sun;
    let windValue = factors.wind;
    if (sunValue === "low" || sunValue === "medium") {
      getYield =
        plant.yield *
        ((fullYield - Math.abs(plant.factor.sun[sunValue])) / 100) *
        ((fullYield - Math.abs(plant.factor.wind[windValue])) / 100);
    } else {
      getYield =
        plant.yield *
        ((fullYield + plant.factor.sun[sunValue]) / 100) *
        ((fullYield - Math.abs(plant.factor.wind[windValue])) / 100);
    }
    return getYield;
  }
};

// Get yield for crop,
const getYieldForCrop = (vegetable, factors) => {
  let yieldPerCrop; 
  if (!factors) {
    yieldPerCrop = vegetable.crop.yield * vegetable.numCrops;
    console.log(yieldPerCrop)
    return yieldPerCrop;
  } else {
    yieldPerCrop = Math.round(getYieldForPlant(vegetable.crop, factors) * vegetable.numCrops);
    console.log(yieldPerCrop);
    return yieldPerCrop;
  }; 
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
  console.log(crops);
  const profitPerCrop = { crops }.map(getRevenueForCrop(crops)); //push the profit of each crop into the array
  console.log(profitPerCrop);
  profitPerCrop.reduce((previousValue, currentValue) => {
    const sumProfit = previousValue + currentValue;
    return sumProfit;
  });
  return sumProfit;
};

module.exports = {
  getYieldForPlant,
  getYieldForCrop,
  getTotalYield,
  getCostsForCrop,
  getRevenueForCrop,
  getProfitForCrop,
  // getTotalProfit,
};
