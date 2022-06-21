const { getYieldForPlant, getYieldForCrop, getTotalYield, getCostsForCrop } = require("./farm");

// GIVEN TESTS
// describe("getYieldForPlant", () => {
//     const corn = {
//         name: "corn",
//         yield: 30,
//     };

//     test("Get yield for plant with no environment factors", () => {
//         expect(getYieldForPlant(corn)).toBe(30);
//     });
// });

// describe("getYieldForCrop", () => {
//     test("Get yield for crop, simple", () => {
//         const corn = {
//             name: "corn",
//             yield: 3,
//         };
//         const input = {
//             crop: corn,
//             numCrops: 10,
//         };
//         expect(getYieldForCrop(input)).toBe(30);
//     });
// });

// describe("getTotalYield", () => {
//     test("Calculate total yield with multiple crops", () => {
//         const corn = {
//             name: "corn",
//             yield: 3,
//         };
//         const pumpkin = {
//             name: "pumpkin",
//             yield: 4,
//         };
//         const crops = [
//             { crop: corn, numCrops: 5 },
//             { crop: pumpkin, numCrops: 2 },
//         ];
//         expect(getTotalYield({ crops })).toBe(23);
//     });

//     test("Calculate total yield with 0 amount", () => {
//         const corn = {
//             name: "corn",
//             yield: 3,
//         };
//         const crops = [{ crop: corn, numCrops: 0 }];
//         expect(getTotalYield({ crops })).toBe(0);
//     });
// });


// Funcionality 1: Calculate the cost for a crop
describe("getCostsForCrop", () => {
    test("Calculate the cost for a crop", () => {
        const corn = {
            name: "corn",
            sowingPrice: 1,
            plantsPerCrop: 50,
            numCrops: 10,
        }

        const pumpkin = {
            name: "pumpkin", 
            sowingPrice: 1,
            plantsPerCrop: 25,
            numCrops:20,
        };

        const tomatoes = {
            name: "tomatoes", 
            sowingPrice: 1,
            plantsPerCrop: 40,
            numCrops: 25,
        }

        expect(getCostsForCrop(tomatoes)).toBe(40);
    
    });
});


// Functionality 2: calculate the revenue for a crop (without environmental factors)
describe("getRevenueForCrop", () => {
    test("calculate the revenue for a crop (without environmental factors)", () => {
        
    })
})