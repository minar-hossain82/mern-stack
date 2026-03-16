console.log(a1);

(async function main() {
  let obj = {
    a: 1,
    b: 2,
    c: 3,
  };

  let { a, b } = obj;
  console.log(a, b);

  let arr = [1, 4, 6];
  console.log(await sum(arr[0], arr[1], arr[2]));
  console.log(await sum(...arr));
})();

var a1 = 6;

const sleep = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(45);
    }, 1000);
  });
};

const sum = async (a, b, c) => {
  return a + b + c;
};
