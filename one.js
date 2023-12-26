// function fun(a, b) {
//   console.log(a);
//   b();
// }
// function myFun() {
//   console.log("iam also javeed");
// }

// fun("javeed", myFun);

function fun() {
  function myFun() {
    console.log("Hello Animal");
  }
  myFun();
}
fun();
