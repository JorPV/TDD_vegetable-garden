
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
    })
    return result
};

module.exports = {
    getYieldForPlant,
    getYieldForCrop,
    getTotalYield,
};

