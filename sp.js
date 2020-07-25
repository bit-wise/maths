let arr = [1, 2, 3, 4, 5, 6, 7];
let alng = arr.length - 1;
let a3 = [];
let sa = '';
let a3lng = factorial(arr.length);
let i = 0;
let j = 0;

function factorial(n) {
  return (n != 1) ? n * factorial(n - 1) : 1;
}

function permutate() {
  if (i > alng) {
    i = 0;
  }
  let inx = arr[i];
  arr.splice(i, 1);
  arr.push(inx);
  let sarr = arr.join().replace(/\,/g, '');
  if (a3.includes(sarr)) {
    i++;
    arr.reverse();
  } else {
    a3.push(sarr);
  }
  if (a3.length < a3lng && j++ < 997) {
    permutate();
  } else {
    arr.reverse();
  }
}

function setup() {}

function draw() {
  background(220);
  console.log(a3lng);
  permutate();
  console.log(a3);
  if (a3.length === a3lng) {
    noLoop();
    a3.map((a) => {
      if (sa.indexOf(a) < 0) {
        sa += a;
      }
    });
    console.log(sa);
    console.log(sa.length);
  }
}
