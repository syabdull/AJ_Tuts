function fun(b) {
  b();
}

fun(() => {
  console.log("Abdulla");
});
