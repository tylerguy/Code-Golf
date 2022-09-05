n = 31;
a = 0;
b = 1;
c = 0;
for (var i = 0; i < n; i++) {
  console.log(a);
  c = a + b;
  a = b;
  b = c;
}
