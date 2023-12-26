function fun(a, b, c) {
  console.log(a);
  console.log(b);
  c();
}

fun("Abdulla", "javeed", () => {
  console.log("hello coders");
});
