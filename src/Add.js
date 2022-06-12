// Function to fetch custom delimiter from the first line of String
function getDelim(arr) {
  let specialChar = ["*"];
  if (arr.length === 3) {
    if (specialChar.includes(arr[arr.length - 1])) {
      return `\\${arr[arr.length - 1]}`;
    }
    return arr[arr.length - 1]; //checking if the custom delimiter has a length = 1
  }
  let i = 2;
  let delimSet = [];
  while (i < arr.length) {
    if (arr[i] === "[") {
      i++;
      let customDelim = "";
      while (arr[i] !== "]") {
        if (specialChar.includes(arr[i])) {
          customDelim += `\\${arr[arr.length - 1]}`;
        }
        customDelim += arr[i];
        i++;
      }
      delimSet.push(customDelim);
    }
    i++;
  }
  return delimSet.join("|");
}

// Function to create the finalArray where the sum will be calculated
function getFinalArray(strArr) {
  return strArr
    .join(",")
    .split(",")
    .filter((item) => !isNaN(parseInt(item))); //eliminating any entry that is not a number
}

// String Calculator- Add
function Add(str) {
  if (str === "") {
    return 0;
  }
  //   Breaking the String value at next line
  let strWithoutNewLine = str.split("\n");
  let delimiter = ",";
  let start = 0;
  //   checking if the first line contains any custom delimiter
  if (strWithoutNewLine[0][0] === "/") {
    delimiter = getDelim(strWithoutNewLine[0]);
    start = 1;
  }

  //   Making a regular expression of our Custom Delimiter (or default delimiter if there is none)
  let regex = new RegExp(delimiter, "g");

  let finalArrSet = []; //contains a set of arrays where each element is seperated by our custom delimiter

  for (let i = start; i < strWithoutNewLine.length; i++) {
    finalArrSet.push(strWithoutNewLine[i].split(regex));
  }

  let finalArray = getFinalArray(finalArrSet);
  let negNums = finalArray.filter((num) => parseInt(num) < 0);
  if (negNums.length) {
    return `negatives not allowed: ${negNums}`;
  }
  let sum = 0;
  for (let i = 0; i < finalArray.length; i++) {
    sum += parseInt(finalArray[i]);
  }
  return sum;
}

module.exports = Add;
