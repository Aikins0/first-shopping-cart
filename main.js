let shop = document.getElementById("shop");

/* Basket to hold all the selected items */

let basket = JSON.parse(localStorage.getItem("data")) || [];

let shopItemsData = [{
    id:"sneaker1",
    name:"Adidas ",
    price: 120,
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing.",
    img: "sneakers/pro1.webp",
},
{
    id:"sneaker2",
    name:"Adidas ",
    price: 100,
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing.",
    img: "sneakers/pro1.webp",
},
{
    id:"sneaker3",
    name:"Adidas ",
    price: 150,
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing.",
    img: "sneakers/pro3.webp",
},
{
    id:"sneaker4",
    name:"Adidas ",
    price: 220,
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing.",
    img: "sneakers/pro4.webp",
},
{
    id:"sneaker5",
    name:"Adidas ",
    price: 195,
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing.",
    img: "sneakers/pro4.webp",
},
{
    id:"sneaker6",
    name:"Adidas ",
    price: 220,
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing.",
    img: "sneakers/pro9.webp",
},
{
    id:"sneaker7",
    name:"Adidas ",
    price: 199,
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing.",
    img: "sneakers/pro10.webp",
},
{
    id:"sneaker8",
    name:"Adidas ",
    price: 97,
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing.",
    img: "sneakers/pro8.webp",
},
{
    id:"sneaker9",
    name:"Adidas ",
    price: 200,
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing.",
    img: "sneakers/pro9.webp",
},
{
    id:"sneaker10",
    name:"Adidas ",
    price: 160,
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing.",
    img: "sneakers/pro10.webp",
},
{
    id:"sneaker11",
    name:"Adidas ",
    price: 207,
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing.",
    img: "sneakers/pro11.jpg",
},
{
    id:"sneaker12",
    name:"Adidas ",
    price: 326,
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing.",
    img: "sneakers/pro12.webp",
},
{
    id:"sneaker13",
    name:"Adidas ",
    price: 213,
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing.",
    img: "sneakers/pro13.webp",
},
{
    id:"sneaker14",
    name:"Adidas ",
    price: 110,
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing.",
    img: "sneakers/pro14.webp",
},
{
    id:"sneaker15",
    name:"Adidas ",
    price: 97,
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing.",
    img: "sneakers/pro15.webp",
},
{
    id:"sneaker16",
    name:"Adidas ",
    price: 219,
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing.",
    img: "sneakers/pro16.webp",
},
{
    id:"sneaker17",
    name:"Adidas ",
    price: 140,
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing.",
    img: "sneakers/pro17.jpeg",
},
{
    id:"sneaker18",
    name:"Adidas ",
    price: 280,
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing.",
    img: "sneakers/pro18.webp",
},
{
    id:"sneaker19",
    name:"Adidas ",
    price: 412,
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing.",
    img: "sneakers/pro19.jpeg",
},
{
    id:"sneaker20",
    name:"Adidas ",
    price: 230,
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing.",
    img: "sneakers/pro20.webp",
},
{
    id:"sneaker21",
    name:"Adidas ",
    price: 260,
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing.",
    img: "sneakers/pro21.webp",
},
{
    id:"sneaker22",
    name:"Adidas ",
    price: 402,
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing.",
    img: "sneakers/pro22.webp",
},
{
    id:"sneaker23",
    name:"Adidas ",
    price: 210,
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing.",
    img: "sneakers/pro23.webp",
},
{
    id:"sneaker24",
    name:"Adidas ",
    price: 105,
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing.",
    img: "sneakers/pro24.webp",
},
{
    id:"sneaker25",
    name:"Adidas ",
    price: 400,
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing.",
    img: "sneakers/pro25.webp",
},
{
    id:"sneaker26",
    name:"Adidas ",
    price: 305,
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing.",
    img: "sneakers/pro26.jpg",
},
{
    id:"sneaker27",
    name:"Adidas ",
    price: 155,
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing.",
    img: "sneakers/pro27.webp",
},
{
    id:"sneaker28",
    name:"Adidas ",
    price: 199,
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing.",
    img: "sneakers/pro28.webp",
},
{
    id:"sneaker29",
    name:"Adidas ",
    price: 163,
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing.",
    img: "sneakers/pro29.jpg",
},
{
    id:"sneaker30",
    name:"New Balance ",
    price: 200,
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing.",
    img: "sneakers/pro30.webp",
},
];

let generateShop = () => {
  return (shop.innerHTML = shopItemsData
    .map((x) => {
      let { id, name, desc, img, price } = x;
      let search = basket.find((y) => y.id === id) || [];
      return `
    <div id=product-id-${id} class="item">
      <img width="218" src=${img} alt="">
      <div class="details">
        <h3>${name}</h3>
        <p>${desc}</p>
        <div class="price-quantity">
          <h2 style="font:10px">Ghc ${price} </h2>
          <div class="buttons">
            <i onclick="decrement(${id})" class="bi bi-dash-lg"></i>
            <div id=${id} class="quantity">${
        search.item === undefined ? 0 : search.item
      }</div>
            <i onclick="increment(${id})" class="bi bi-plus-lg"></i>
          </div>
        </div>
      </div>
  </div>
    `;
    })
    .join(""));
};

generateShop();

  //search button click
document.getElementById("search").addEventListener("click", () => {
  //initialization
  let searchInput = document.getElementById("search-input").value;
  let elements = document.querySelectorAll(".details");
  let items = document.querySelectorAll(".items");
  

  //loop through all elements
  elements.forEach((element,index) => {
      //check if text include the search value
      if(element.innerText.includes(searchInput.toUpperCase())){
          //display matching card 
          cards[index].classList.remove("hide");
      }
      else{
          //hide others 
          cards[index].classList.add("hide");
      }
  })
}); 

/* increasing the selected product item quantity by 1 */

let increment = (id) => {
  let selectedItem = id;
  let search = basket.find((x) => x.id === selectedItem.id);

  if (search === undefined) {
    basket.push({
      id: selectedItem.id,
      item: 1,
    });
  } else {
    search.item += 1;
  }

//   console.log(basket);
  update(selectedItem.id);
  localStorage.setItem("data", JSON.stringify(basket));
};

/* decreasing selected product item quantity by 1 */

let decrement = (id) => {
  let selectedItem = id;
  let search = basket.find((x) => x.id === selectedItem.id);

  if (search === undefined) return;
  else if (search.item === 0) return;
  else {
    search.item -= 1;
  }

  update(selectedItem.id);
  basket = basket.filter((x) => x.item !== 0);
//   console.log(basket);
  localStorage.setItem("data", JSON.stringify(basket));
};

/* To update the digits of picked items on each item card */

let update = (id) => {
  let search = basket.find((x) => x.id === id);
  document.getElementById(id).innerHTML = search.item;
  calculation();
};

/* To calculate total amount of selected Items */

let calculation = () => {
  let cartIcon = document.getElementById("cartAmount");
  cartIcon.innerHTML = basket.map((x) => x.item).reduce((x, y) => x + y, 0);
};

calculation();