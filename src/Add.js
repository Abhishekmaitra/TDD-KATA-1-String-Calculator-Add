function Add(str) {
  if (str === "") {
    return 0;
  }
  let finalArray = str.split(/[,\n]/);
  let sum = 0;
  for (let i = 0; i < finalArray.length; i++) {
    sum += parseInt(finalArray[i]);
  }
  return sum;
}

module.exports = Add;
