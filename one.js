function fun(a, b) {
  console.log(a);
  b();
}
function myFun() {
  console.log("iam also javeed");
}

fun("javeed", myFun);
