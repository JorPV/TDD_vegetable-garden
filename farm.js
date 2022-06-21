// Get yield for plant with no environment factors
const getYieldForPlant = (plant) => plant.yield;

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
const getCostsForCrop = (plant) => {
  let costPerCrop = plant.sowingPrice *
      plant.plantsPerCrop 
    //   plant.numCrops;
      return costPerCrop;
  };


// const getCostsForCrop = (plant) => {
//   let costPerCrop = 0;
//   plant.plantCrops.forEach((plantCrops) => {
//    costPerCrop = plantCrops.crop.sowingPrice *
//       plantCrops.crop.plantsPerCrop *
//       plantCrops.numCrops;
//   });
//   return costPerCrop;
// };


// Calculate the revenue for a crop (without environmental factors)
const getRevenueForCrop = () => {}



module.exports = {
  getYieldForPlant,
  getYieldForCrop,
  getTotalYield,
  getCostsForCrop,
  // getRevenueForCrop,
  // getProfitForCrop,
  // getTotalProfit
};
