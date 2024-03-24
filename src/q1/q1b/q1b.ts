import fs from "fs";

type returnObj = {
  num: string;
  sub: number;
};

function containNumber(input: string): returnObj {
  let result: returnObj;
  console.log("length", input.length);
  if (input.length >= 3) {
    switch (true) {
      case input.includes("zero"):
        result = {
          num: "0",
          sub: 5 - (input.indexOf("zero") + 4),
        };
        break;
      case input.includes("one"):
        console.log("silly");
        result = {
          num: "1",
          sub: 5 - (input.indexOf("one") + 3),
        };
        break;
      case input.includes("two"):
        result = {
          num: "2",
          sub: 5 - (input.indexOf("two") + 3),
        };
        break;
      case input.includes("three"):
        result = {
          num: "3",
          sub: 5 - (input.indexOf("three") + 5),
        };
        break;
      case input.includes("four"):
        result = {
          num: "4",
          sub: 5 - (input.indexOf("four") + 4),
        };
        break;
      case input.includes("five"):
        result = {
          num: "5",
          sub: 5 - (input.indexOf("five") + 4),
        };
        break;
      case input.includes("six"):
        result = {
          num: "6",
          sub: 5 - (input.indexOf("six") + 3),
        };
        break;
      case input.includes("seven"):
        result = {
          num: "7",
          sub: 5 - (input.indexOf("seven") + 5),
        };
        break;
      case input.includes("eight"):
        result = {
          num: "8",
          sub: 5 - (input.indexOf("eight") + 5),
        };
        break;
      case input.includes("nine"):
        result = {
          num: "9",
          sub: 5 - (input.indexOf("nine") + 4),
        };
        break;
      default:
        result = { num: "", sub: 4 };
    }
  } else {
    result = {
      num: "",
      sub: 0,
    };
  }
  console.log("input", input);
  console.log(result);
  return result;
}
function concatNum(str: string, subStr: string): string {
  const result: string = "";
  if (subStr.length !== 0) {
    if (str.length >= 2) {
      str = str[0] + subStr;
    } else {
      str += subStr;
    }
  }
  return result;
}
function getCallibrationValue(path: string) {
  const file = fs.readFileSync(path, "utf-8");
  let numArr = [];
  let num = "";
  let subStr = "";
  for (let i = 0; i < file.length; i++) {
    if (file[i] === "\n") {
      const res = containNumber(subStr);
      num = concatNum(num, res.num);
      if (num.length === 1) {
        num += num;
      }
      numArr.push(num);
      num = "";
    } else if (file.charCodeAt(i) >= 48 && file.charCodeAt(i) <= 57) {
      num = concatNum(num, file[i]);
    }
    //TODO: check for unknown chars
    if (file[i] !== "\r") {
      console.log("file", typeof file[i]);
      subStr += file[i];
    }
    if (subStr.length >= 5) {
      const res = containNumber(subStr);
      num = concatNum(num, res.num);
      subStr = "";
      i = i - res.sub;
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
getCallibrationValue("./src/q1/q1b/test1.txt");
