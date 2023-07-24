let foodList = [
  {
    name: "Gà Cuộn Bắc Kinh",
    price: 39.0,
    imageURL:
      "https://static.kfcvietnam.com.vn/images/items/lg/1-Kwaffle.jpg?v=Lnno5L",
    quantity: 10,
    stock: 0,
  },
  {
    name: "Gà Cuộn Bắc Kỳ",
    price: 39.0,
    imageURL:
      "https://static.kfcvietnam.com.vn/images/items/lg/1-Kwaffle.jpg?v=Lnno5L",
    quantity: 10,
    stock: 0,
  },
  {
    name: "Gà Cuộn Nam Kinh",
    price: 39.0,
    imageURL:
      "https://static.kfcvietnam.com.vn/images/items/lg/1-Kwaffle.jpg?v=Lnno5L",
    quantity: 10,
    stock: 0,
  },
  {
    name: "Gà Cuộn Nam Kỳ",
    price: 39.0,
    imageURL:
      "https://static.kfcvietnam.com.vn/images/items/lg/1-Kwaffle.jpg?v=Lnno5L",
    quantity: 10,
    stock: 0,
  },
];

let header = document.getElementById("header");
header.innerHTML = `<div class="left">
<img
  src="https://1000logos.net/wp-content/uploads/2017/03/Kfc_logo.png"
  alt=""
/>
<p><b>THỰC ĐƠN</b></p>
<p><b>KHUYẾN MÃI</b></p>
<p><b>HỆ THỐNG NHÀ HÀNG</b></p>
</div>
<div class="right">
<p><b>English</b></p>
<img
  src="https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=170667a&w=0&k=20&c=bsbD0qLFJ6fSUCXG_iyo7JBnmKi6T-uUblC8FNZFJoU="
  alt=""
/>
<img src="riplebasket.PNG" alt="" />
<img src="menu.PNG" alt="" />
</div>`;

let products = document.getElementsByClassName("product");
console.log(products);

function buildProductCard(food) {
  let card = document.createElement("div");
  card.className = "item-card";
  Object.assign(card.style, {
    display: "flex",
    alignItem: "center",
    backgroundColor: "green",
  });
  card.innerHTML = `
    <img
    src="${food.imageURL}"
    alt=""
  />
  <div class="item">
    <div class="item-detail">
      <div class="name"><b>${food.name}</b></div>
      <div class="cost"><b>${food.price}₫</b></div>
    </div>
    <div class="item-desc">Số lượng ${food.quantity}</div>
  
  </div>
    `;
  let btnBox = document.createElement("div");
  btnBox.className = "bot-card";

  let btnAdd = document.createElement("button");
  let boldText = document.createElement("b");
  boldText.innerText = "Thêm";

  btnAdd.appendChild(boldText);
  btnBox.appendChild(btnAdd);
  card.appendChild(btnBox);

  btnBox.addEventListener("click", () => {
    if (food.quantity > 0) {
      food.quantity--;
      addToCart(food);
      card.innerHTML = `
        <img
        src="${food.imageURL}"
        alt=""
      />
      <div class="item">
        <div class="item-detail">
          <div class="name"><b>${food.name}</b></div>
          <div class="cost"><b>${food.price}₫</b></div>
        </div>
        <div class="item-desc">Số lượng ${food.quantity}</div>

      </div>
        `;
      btnAdd.appendChild(boldText);
      btnBox.appendChild(btnAdd);
      card.appendChild(btnBox);
    } else {
      alert("Hết đồ ăn rồi !!!!");
      return;
    }
  });

  return card;
}

let cartList = [];

function addToCart(food) {
  let isExist = false;
  if (cartList.length == 0) {
    cartList.push({
      ...food,
      stock: 1,
      quantity: food.quantity,
    });
    console.log(cartList);
    return;
  }
  for (let i = 0; i < cartList.length; i++) {
    if (cartList[i].name == food.name) {
      cartList[i].quantity = food.quantity;
      cartList[i].stock += 1;
      console.log(cartList);
      isExist = true;
      return;
    }
  }
  if (!isExist) {
    cartList.push({
      ...food,
      quantity: food.quantity,
      stock: 1,
    });
    console.log(cartList);
  }
}

for (let j = 0; j < foodList.length; j++) {
  products[0].appendChild(buildProductCard(foodList[j]));
}

console.log(header);