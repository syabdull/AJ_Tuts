function fun(a, b) {
  let arr = [];
  arr[0] = a;
  arr[1] = b;
  return arr;
}
let arr1 = [1, 2, 3];
for (let i = 0; i < arr1.length; i++) {
  let abs = fun(arr1[i], i);
  console.log(abs);
}
