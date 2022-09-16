function combine(
  a: number | string,
  b: number | string,
  type: "as-number" | "as-string"
) {
  if (type === "as-number") {
    return +a + +b;
  } else {
    return a.toString() + b.toString();
  }
}

console.log(combine(10, 20, "as-number"));
console.log(combine("Alex", "Arnold", "as-string"));

//Another method

// let type:"as-number"|"as-string" = 10    //error will be generated
let type: "as-number" | "as-string" = "as-number";
