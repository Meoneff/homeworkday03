const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let wait = async function (second) {
  let wait = new Promise(async (resolover, reject) => {
    setTimeout(() => {
      resolover();
    }, second * 1000);
  });
  return wait;
};

async function askMomForMoney() {
  console.log("Hỏi tiền má");
  let temp = new Promise((res, rej) => {
    rl.on("line", (input) => {
      console.log(input);
      res();
    });
  });
  return temp;
}

async function goToMarket() {
  console.log("Đi chợ");
  await wait(2);
  let temp = new Promise((resolover, reject) => {
    console.log("Đi chợ về rồi");
    resolover();
  });
}

async function prepare() {
  console.log("Sơ chế");
  console.log("1. Nhờ má vo gạo");
  console.log("2. Nhờ ba rửa rau");
  console.log("3. Cạo cá");
  await wait(5);
  let temp = new Promise((resolover, reject) => {
    console.log("Sơ chế đã xong");
    resolover();
  });
}

async function cook() {
  console.log("Ba đi làm tóc");
  console.log("Má đi đá banh");
  console.log("Phải tự làm nấu hết thôi !!!");

  async function cookRice() {
    console.log("Nấu cơm");
    await wait(10);
    console.log("Quên bấm nút nồi cơm");
    console.log("Đi ra tiệm mua cơm");
    await wait(2);
    let temp = new Promise((resolover, reject) => {
      console.log("Mua cơm về nhà ");
      resolover();
    });
    return temp;
  }
  async function boilVegetables() {
    console.log("Luộc rau");
    await wait(2);
    let temp = new Promise((resolover, reject) => {
      console.log("Luộc rau xong ");
      resolover();
    });
    return temp;
  }
  async function fryFish() {
    console.log("Chiên cá");
    await wait(5);
    let temp = new Promise((resolover, reject) => {
      console.log("Chiên cá xong ");
      resolover();
    });
    return temp;
  }
  await Promise.all([cookRice(), boilVegetables(), fryFish()]);
}

async function prepareMeal() {
  console.log("Dọn cơm");
  await wait(2);
  let temp = new Promise((resolover, reject) => {
    console.log("Dọn cơm xong ");
    resolover();
  });
}
async function boilNoodle() {
  console.log("Trụng Mỳ");
  await wait(2);
  let temp = new Promise((resolover, reject) => {
    console.log("Trụng Mỳ xong ");
    resolover();
  });
}
async function mix() {
  console.log("Trộn cơm với mỳ");
  await wait(2);
  let temp = new Promise((resolover, reject) => {
    console.log("Trộn cơm với mỳ xong ");
    resolover();
  });
}

async function play() {
  async function go() {
    console.log("Quất !!!!!");
    await wait(2);
    let temp = new Promise((resolover, reject) => {
      console.log("Quất xong ");
      resolover();
    });
  }
  async function fall() {
    console.log("Cút");
    await wait(2);
    let temp = new Promise((resolover, reject) => {
      console.log("Cút xong ");
      resolover();
    });
  }
  await Promise.all([go(), fall()]);
}

async function main() {
//   await askMomForMoney();
//   await goToMarket();
  await prepare();
  await cook();
//   await prepareMeal();
//   await boilNoodle();
//   await mix();
//   await play();
  console.log("RA ngoài ăn");
}

main();