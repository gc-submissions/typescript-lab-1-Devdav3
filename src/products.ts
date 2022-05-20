export interface Products {
  name: string;
  price: number;
}

let arrayOfProducts = [
  {
    name: "Burrito",
    price: 8
  }, 
  {
    name: "Taco",
    price: 5
  }, 
  {
    name: "Chips and Salsa",
    price: 3
  }, 
]

function calAverageProductPrice (arrayOfProducts: Products[]) {
  let averagePrice = 0;
  let numberOfProducts = 0;
  for (let i = 0; i < arrayOfProducts.length;i++) {
    numberOfProducts ++
    averagePrice += arrayOfProducts[i].price;
  }
  return averagePrice/numberOfProducts; 
}

console.log(calAverageProductPrice(arrayOfProducts));

export{calAverageProductPrice};
