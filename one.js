function fun(a, b) {
  console.log(a * b);
  console.log(a + b);
}

let arr = [1, 2, 3];
for (let i = 0; i < arr.length; i++) {
  fun(arr[i], i);
}
