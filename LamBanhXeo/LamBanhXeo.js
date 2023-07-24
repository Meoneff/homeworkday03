
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
  
async function askUser() {
    let temp = new Promise((resolve, reject) => {
        rl.question("Hãy nhập tên của bạn: ", (name) => {
            rl.question("Tiếp theo là nhập tuổi: ", (age) => {
                    console.log({name,age});
                    resolve({ name, age});
            });
        });
    });
    return temp;
}

async function xinTien() {
    console.log("Má ơi, cho con xin tiền đi mua đồ");
    let temp = new Promise((res, rej) => {
      rl.question("Má đã cho bạn bao nhiêu tiền: ", (input)  => {
        res(input);
      });
    });
    return temp;
}

async function chonSize() {
    console.log("Có những size bánh ở đây:");
    console.log("S - 121,000 VND");
    console.log("M - 237,000 VND");
    console.log("L - 1,810,000 VND");
  
    let temp = new Promise((resolve, reject) => {
      rl.question("Nhập size bánh bạn muốn (S/M/L): ", (input) => {
        const size = input.toUpperCase();
        switch (size) {
          case "S":
            console.log("Bạn đã chọn bánh size S - Giá: 121,000 VND");
            resolve(121000);
            break;
          case "M":
            console.log("Bạn đã chọn bánh size M - Giá: 237,000 VND");
            resolve(237000);
            break;
          case "L":
            console.log("Bạn đã chọn bánh size L - Giá: 1,810,000 VND");
            resolve(1810000);
            break;
          default:
            console.log("Size không hợp lệ. Vui lòng chọn lại!");
            chonSize().then(resolve);
        }
      });
    });
    return temp;
}

async function diCho() {
    console.log("Đi siêu thị nguyên liệu");
    await wait(5);
    let temp = new Promise((resolover, reject) => {
        console.log("Đi mua nguyên liệu về rồi nè");
        resolover();
    });
}

async function tachTrung(){
    console.log("Sơ chế");
    console.log("Tách trứng");
    await wait(2);
    let temp = new Promise((res,rej)=>{
        console.log("Tách trứng xong rồi");
        res();
    })
    return temp;
}

async function rayBot(){
    console.log("Ray bột");
    await wait(2);
    let temp = new Promise((res,rej)=>{
        console.log("Ray bột xong rồi");
        res();
    });
    return temp;
}

async function giaVi(){
    console.log("Chuẩn bị gia vị");
    await wait(5);
    let temp = new Promise((res,rej)=>{
        console.log("Chuẩn bị gia vị xong rồi");
        res();
    });
    return temp;
}

async function vayRau(){
    console.log("Lặt Rau");
    await wait(2);
    console.log("Rửa Rau");
    await wait(3);
    console.log("Vẩy Vẩy Rau");
    await wait(5);
    let temp = new Promise((res,rej)=>{
        console.log("Vẩy rau xong xuôi hết");
        res();
    });
    return temp;
} 

async function chuanBi(){
    async function lamBotBanh(){
        console.log("Làm bột bánh");
        await wait(10);
        let temp = new Promise((res,rej)=>{
            console.log("Làm bột xong rồi");
            res();
        });
        return temp;
    }
    async function luocTom(){
        console.log("Luộc tôm");
        await wait(7);
        let temp = new Promise((res,rej)=>{
            console.log("Luộc tôm xong rồi");
            res();
        });
        return temp;

    }
    async function xaoThitBam(){
        console.log("Xào thịt bằm");
        await wait(5);
        let temp = new Promise((res,rej)=>{
            console.log("Xào thịt bằm xong rồi");
            res();
        });
        return temp;
    }
    async function lamDau(){
        console.log("Làm đậu");
        await wait(5);
        let temp = new Promise((res,rej)=>{
            console.log("Làm đậu xong rồi");
            res();
        });
        return temp;
    }
    await Promise.all([lamBotBanh(),luocTom(),xaoThitBam(),lamDau()]);
}

async function doBanh(){
    console.log("Đổ bánh vô chảo");
    await wait(3);
    let temp = new Promise((res,rej)=>{
        console.log("Đổ bánh vô chảo mãi cũng đã xong");
        res();
    });
    return temp;
}

async function chien(){
    console.log("Bật bếp gas lên");
    await wait(5);
    console.log("Chiên thôi");
    await wait(7);
    let temp = new Promise((res,rej)=>{
        console.log("Chiên xong rồi");
        res();
    });
    return temp;
}

async function phaNuocMam(){
    console.log("Pha nước mắm");
    await wait(3);
    let temp = new Promise((res,rej)=>{
        console.log("Pha nước mắm xong rồi");
        res();
    });
    return temp;
}

async function donDoAn(){
    async function radia(){
        console.log("Dọn ra dĩa");
        await wait(3);
        let temp = new Promise((res,rej)=>{
            console.log("Dọn ra dĩa xong rồi");
            res();
        });
        return temp;
    }
    async function donRau(){
        console.log("Dọn Rau");
        await wait(3);
        let temp = new Promise((res,rej)=>{
            console.log("Dọn rau xong rồi");
            res();
        });
        return temp;
    }
    await Promise.all([radia(),donRau()]);
}

async function main()
{
    await askUser();
    const tienXinMa = await xinTien();
    const tienBanh = await chonSize();

    if (tienXinMa < tienBanh) {
        console.log("Không đủ tiền ròi, Lấy tiền đó đi chơi net nào");
        return;
      } else {
        const tienThua = tienXinMa - tienBanh;
        console.log("Bạn đã mua bánh thành công!");
        console.log("Tiền thối lại:", tienThua, "VND");
    }
    
    await diCho();
    await tachTrung();
    await rayBot();
    await giaVi();
    await vayRau();
    await chuanBi();
    await doBanh();
    await chien();
    await phaNuocMam();
    await donDoAn();
    console.log("Quất !!!!!!!!!!!!!!!!!!!!!!!");
}

main();