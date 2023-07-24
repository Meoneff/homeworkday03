let localList = [
  {
    name: "NS TEE-White",
    price: "380000",
    imageUrl:
      "//bizweb.dktcdn.net/100/318/614/products/2-compressed-1.jpg?v=1687501678000",
    quantity: 4,
    stock: 0,
  },
  {
    name: "NS TEE-Black",
    price: "380000",
    imageUrl:
      "//bizweb.dktcdn.net/100/318/614/products/1-compressed-2.jpg?v=1687501764000",
    quantity: 4,
    stock: 0,
  },
  {
    name: "RIDING HORSE TEE ...",
    price: "395000",
    imageUrl:
    "https://bizweb.dktcdn.net/100/318/614/products/horse-tee-mt-compressed.jpg?v=1687242757413",
    quantity: 4,
    stock: 0,
  },
  {
    name: "MESH LOGO SHORTS ...",
    price: "395000",
    imageUrl:
    "//bizweb.dktcdn.net/100/318/614/products/back-compressed-1.jpg?v=1685588280000",
    quantity: 4,
    stock: 0,
  },
  {
    name: "CORAL TEE-BLACK",
    price: "395000",
    imageUrl:
    "//bizweb.dktcdn.net/100/318/614/products/2-12-compressed.jpg?v=1684377047000",
    quantity: 4,
    stock: 0,
  },
];

// let header = document.querySelector("header");
// // dùng riêng cho 1 tag nào đó
// header.innerHTML =

let rows = document.getElementsByClassName("row list");
console.log(rows);

// function buildProductCard(tee) {
//     let card = document.createElement("div");
//     card.className = "item";
//     let img = document.createElement("img");
//     img.src = tee.imageUrl;
//     let h3 = document.createElement("h3");
//     h3.innerText = tee.name;
//     let price = document.createElement("p");
//     price.innerText = tee.price;
//     card.appendChild(img);
//     card.appendChild(h3);
//     card.appendChild(price);

//     return card;
// }
// for (let i= 0; i< rows.length; i++){
//     for (let j=0; j< localList.length; j++){
//     rows [i].appendChild(buildProductCard(localList[j]));
// }
// }
function buildProductCard(tee) {
  let card = document.createElement("div");
  card.className = "item";
  card.innerHTML = `
    <img src = "${tee.imageUrl}"/>
    <h3>${tee.name}</h3>
    <p>Giá:${tee.price}</p>
    <div class="item-desc">Còn: ${tee.quantity}</div>
    `;
let btnBox = document.createElement("div");
btnBox.className = "btn-card";

let btnAdd = document.createElement("button");
let boldText = document.createElement("p");
boldText.innerText = "Bỏ Vô Giỏ";

btnAdd.appendChild(boldText);
btnBox.appendChild(btnAdd);
card.appendChild(btnBox);

// let cartItemCount = document.getElementById("cartItemCount");

// function updateCartItemCount() {
//   let totalQuantity = 0;
//   for (let i = 0; i < cartList.length; i++) {
//     totalQuantity += cartList[i].quantity;
//   }
//   cartItemCount.innerText = totalQuantity;
// }
btnBox.addEventListener("click", () =>{
  if (tee.quantity > 0 ) {
    tee.quantity--;
    addToCart(tee);
    card.innerHTML = `
    <img src = "${tee.imageUrl}"/>
    <h3>${tee.name}</h3>
    <p>Giá:${tee.price}</p>
    <div class="item-desc">Còn: ${tee.quantity}</div>
    `;
      btnAdd.appendChild(boldText);
      btnBox.appendChild(btnAdd);
      card.appendChild(btnBox);
    } else {
      alert("Hết Đồ Rồi Khỏi Mua Khỏi Mặc !!");
      return;
  }
})
  return card;
}

let cartList = [];

function addToCart(tee) {
  let isExist = false;
  if (cartList.length == 0) {
    cartList.push({
      ...tee,
      stock: 1,
      quantity: tee.quantity,
    });
    console.log(cartList);
    return;
  }
  for (let i = 0; i < cartList.length; i++) {
    if (cartList[i].name == tee.name) {
      cartList[i].quantity = tee.quantity;
      cartList[i].stock += 1;
      console.log(cartList);
      isExist = true;
      return;
    }
  }
  if (!isExist) {
    cartList.push({
      ...tee,
      quantity: tee.quantity,
      stock: 1,
    });
    console.log(cartList);
  }
}

for (let i = 0; i < rows.length; i++) {
  for (let j = 0; j < localList.length; j++) {
    rows[i].appendChild(buildProductCard(localList[j]));
  }
}
console.log(buildProductCard);

function showModal(){
  document.getElementById('dialog').showModal();
  for (let i=0; i<cartList.length;i++){
    total += cartList[i].price * cartList[i].stock;
    let teeIncart = document.getElementsByClassName('itembill');
    teeIncart[0].appendChild(buildItem(cartList[i]));

  }
  bill(total)
}

function clearCart() {
  document.getElementById('dialog').close();
  let teeIncart = document.getElementsByClassName('itembill');
  let txMoney = document.getElementsByClassName('money');
  teeIncart[0].innerHTML ="";
    //set lại mãng rỗng không lập
  txMoney[0].innerHTML ="";

  total = 0;
}

function buildItem(tee){
  let teelist = document.createElement('div');
  teelist.className = "itembill";
  teelist.innerHTML = `
  <span>Name: ${tee.name}</span>
  <span>Số Lượng: ${tee.stock}</span>
  <span>Giá ${tee.price}</span>
  `;
  let btnDelete = document.createElement('button');
  btnDelete.innerText = "Delete";
  teelist.appendChild(btnDelete);
  btnDelete.addEventListener("click", () => {
    deleteCart(tee);
  });
  
  let btnUpdate = document.createElement('button');
  btnUpdate.innerText = "Update";
  teelist.appendChild(btnUpdate);
  btnUpdate.addEventListener("click", () => {
    if (tee.stock <= tee.quantity) {
      tee.stock++;

      teelist.innerHTML = `
      <span>Sản Phẩm${tee.name}</span>
      <span>Số lượng ${tee.stock}</span>

      `;
      let total = tee.price * tee.stock;
      let textPrice = document.createElement("span");
      textPrice.innerText = `Price:: ${total}`;
      total = 0;
      for (let i = 0; i < cartList.length; i++) {
        total += cartList[i].price * cartList[i].stock;
      }

      let billInput = document.getElementsByClassName("money");
      billInput[0].innerHTML=`
            <div class="money">
                <p>Tổng Cộng: ${total}</p>
            </div> 
            `;
            teelist.appendChild(textPrice);
            teelist.appendChild(btnDelete);
            teelist.appendChild(btnUpdate);
        }else {
            alert("Quá số lượng rồi !!!");
            return;
    }
  });
  return teelist;
  

}

function buy() {
  alert("Bạn đã mua quần áo thành công");
  clearbuy();
  clearCart();
}
function clearbuy() {
  cartList = [];
  let clearItemBill = document.getElementsByClassName("itembill")[0];
  clearItemBill.innerHTML = "";
}

let total = 0
function bill(totalInCart){
  let billInput = document.getElementsByClassName('money');
  let textBill = document.createElement('div');
  textBill.className="text-money";
  textBill.innerHTML=`
  <p>Total: ${totalInCart}</p>
  `;
  billInput[0].appendChild(textBill);
}