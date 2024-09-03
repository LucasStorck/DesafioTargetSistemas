function fibonacci(n) {
  let a = 0;
  let b = 1;
  let t;

  for (let i = 0; i < n; i++) {
    console.log(a);
    t = a;
    a = b;
    b = t + b;
  }
}

const n = 12;
fibonacci(n);