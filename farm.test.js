const {
  getYieldForPlant,
  getYieldForCrop,
  getTotalYield,
  getCostsForCrop,
  getRevenueForCrop,
  getProfitForCrop,
  getTotalProfit,
} = require("./farm");

// GIVEN TESTS
describe("getYieldForPlant", () => {
  const corn = {
    name: "corn",
    yield: 30,
    factor: {
      sun: {
        low: -50,
        medium: 0,
        high: 50,
      },
      wind: {
        low: 0,
        medium: -30,
        high: -60,
      },
    },
  };


  test("Get yield for plant with NO environmental factors", () => {
    expect(getYieldForPlant(corn)).toBe(30);
  });

  const environmentFactors = 
    {sun: "low", wind: "medium" };

  test("Get yield for plant WITH environmental factors", () => {
    expect(getYieldForPlant(corn, environmentFactors)).toBe(10.5);
  });
});

describe("getYieldForCrop", () => {
  test("Get yield for crop, simple", () => {
    const corn = {
      name: "corn",
      yield: 3,
    };
    const input = {
      crop: corn,
      numCrops: 10,
    };
    expect(getYieldForCrop(input)).toBe(30);
  });
});

describe("getTotalYield", () => {
  test("Calculate total yield with multiple crops", () => {
    const corn = {
      name: "corn",
      yield: 3,
    };
    const pumpkin = {
      name: "pumpkin",
      yield: 4,
    };
    const crops = [
      { crop: corn, numCrops: 5 },
      { crop: pumpkin, numCrops: 2 },
    ];
    expect(getTotalYield({ crops })).toBe(23);
  });

  test("Calculate total yield with 0 amount", () => {
    const corn = {
      name: "corn",
      yield: 3,
    };
    const crops = [{ crop: corn, numCrops: 0 }];
    expect(getTotalYield({ crops })).toBe(0);
  });
});

// Funcionality 1: Calculate the cost for a crop
describe("getCostsForCrop", () => {
  test("Calculate the cost for a crop", () => {
    const corn = {
      name: "corn",
      yield: 3,
      sowingPrice: 1,
      plantsPerCrop: 30,
      numCrops: 5,
    };

    const pumpkin = {
      name: "pumpkin",
      yield: 4,
      sowingPrice: 1,
      plantsPerCrop: 35,
      numCrops: 2,
    };

    const tomatoes = {
      name: "tomatoes",
      yield: 5,
      sowingPrice: 1,
      plantsPerCrop: 40,
      numCrops: 4,
    };

    expect(getCostsForCrop(corn)).toBe(150);
    expect(getCostsForCrop(pumpkin)).toBe(70);
    expect(getCostsForCrop(tomatoes)).toBe(160);
  });
});

// Functionality 2: calculate the revenue for a crop (without environmental factors)
describe("getRevenueForCrop", () => {
  test("calculate the revenue for a crop", () => {
    const corn = {
      name: "corn",
      yield: 3,
      sowingPrice: 1,
      plantsPerCrop: 30,
      numCrops: 5,
      salePrice: 2,
    };

    const pumpkin = {
      name: "pumpkin",
      yield: 4,
      sowingPrice: 1,
      plantsPerCrop: 35,
      numCrops: 2,
      salePrice: 2,
    };

    const tomatoes = {
      name: "tomatoes",
      yield: 3,
      sowingPrice: 1,
      plantsPerCrop: 40,
      numCrops: 4,
      salePrice: 1.5,
    };

    expect(getRevenueForCrop(corn)).toBe(900);
    expect(getRevenueForCrop(pumpkin)).toBe(560);
    expect(getRevenueForCrop(tomatoes)).toBe(720);
  });
});

// Fuctionality 3: calculate the profit for a crop (without environmental factors)
describe("getProfitForCrop", () => {
  test("calculate the profit for a crop", () => {
    const corn = {
      name: "corn",
      yield: 3,
      sowingPrice: 1,
      plantsPerCrop: 30,
      numCrops: 5,
      salePrice: 2,
    };

    const pumpkin = {
      name: "pumpkin",
      yield: 4,
      sowingPrice: 1,
      plantsPerCrop: 35,
      numCrops: 2,
      salePrice: 2,
    };

    const tomatoes = {
      name: "tomatoes",
      yield: 3,
      sowingPrice: 1,
      plantsPerCrop: 40,
      numCrops: 4,
      salePrice: 1.5,
    };

    expect(getProfitForCrop(corn)).toBe(750);
    expect(getProfitForCrop(pumpkin)).toBe(490);
    expect(getProfitForCrop(tomatoes)).toBe(560);
  });
});

// Functionality 4: calculate the profit for multiple crops (without environmental factors)
// describe("getTotalProfit", () => {
//   test("calculate the profit for multiple crops", () => {
//     const corn = {
//       name: "corn",
//       yield: 3,
//       sowingPrice: 1,
//       plantsPerCrop: 30,
//       numCrops: 5,
//       salePrice: 2,
//     };

//     const pumpkin = {
//       name: "pumpkin",
//       yield: 4,
//       sowingPrice: 1,
//       plantsPerCrop: 35,
//       numCrops: 2,
//       salePrice: 2,
//     };

//     const tomatoes = {
//       name: "tomatoes",
//       yield: 3,
//       sowingPrice: 1,
//       plantsPerCrop: 40,
//       numCrops: 4,
//       salePrice: 1.5,
//     };

//     const crops = [
//       { vegetable: corn },
//       { vegetable: pumpkin },
//       { vegetable: tomatoes },
//     ];

//     expect(getTotalProfit({ crops })).toBe(1800);
//   });
// });
