let row = 4;
let col = 5;

const getTable = (row, col) => {
  let number = 1;
  let emptyArray = [];

  for (let i = 0; i < row; i++) {
    emptyArray.push([number]);
    number++;
  }
  for (let j = 0; j < col - 1; j++) {
    if (j % 2 !== 0) {
      for (let k = 0; k < row; k++) {
        emptyArray[j].push(number);
        number++;
      }
    } else {
      for (let k = row - 1; k >= 0; k--) {
        emptyArray[j].push(number);
        number++;
      }
    }
  }
  return emptyArray;
};
console.log(getTable(row, col));
