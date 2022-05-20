interface Mountian {
  name: string; 
  height: number;
}
let myArray = [1,2,3,4,5]

let mountian: Mountian[] = [
  {
    name: "Kilimanjaro",
    height: 19341
  },
  {
    name: "Everest",
    height: 29029
  },
  {
    name: "Denali",
    height: 20310
  },
]

function findNameOfTallestMountian(arrayOfMountians:Mountian[]){ // refering to the entire thing above
  let tallestheight = 0 
  let tallestName = ""
  for(let i = 0; i < arrayOfMountians.length;i++) {
    if (arrayOfMountians[i].height > tallestheight) {
      tallestheight = arrayOfMountians[i].height;// height is declared 
      tallestName = arrayOfMountians[i].name
    }
  }
  return tallestName;
}

console.log (findNameOfTallestMountian(mountian));

// export {Mountain,findNameOfTallestMountain};
