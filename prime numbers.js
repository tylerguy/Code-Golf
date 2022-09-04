let n = 2;
function p(num) {
  if (num <= 1) {
    return !0;
  }
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return !1;
    }
  }
  return !0;
}
while (n < 100) {
  if (p(n)) {
    console.log(n);
  }
  n++;
}
