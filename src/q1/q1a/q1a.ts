import fs from "fs";

function getCallibrationValue(path: string) {
  const file = fs.readFileSync(path, "utf-8");
  let numArr = [];
  let num = "";
  for (let i = 0; i < file.length; i++) {
    if (file[i] === "\n") {
      if (num.length === 1) {
        num += num;
      }
      numArr.push(num);
      num = "";
    } else if (file.charCodeAt(i) >= 48 && file.charCodeAt(i) <= 57) {
      if (num.length >= 2) {
        num = num[0] + file[i];
      } else {
        num += file[i];
      }
    }
  }
  if (num.length === 1) {
    num += num;
  }
  numArr.push(num);
  let sum = 0;
  for (let i = 0; i < numArr.length; i++) {
    sum += Number(numArr[i]);
  }
  console.log(numArr);
  console.log(sum);
}
getCallibrationValue("./src/q1/q1a/test2.txt");
