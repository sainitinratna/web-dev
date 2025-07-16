document.addEventListener("DOMContentLoaded", () => {
  const products = [
    { id: 1, name: "Product 1", price: 29.99 },
    { id: 2, name: "Product 2", price: 19.99 },
    { id: 3, name: "Product 3", price: 59.999 },
  ];

  const cart = [];

  const productList= document.getElementById("product-list")
  const cartItems= document.getElementById("cart-items")
  const emptymessage= document.getElementById("empty-cart")
  const carttotal= document.getElementById("cart-total")
  const checkout = document.getElementById("checkout-btn")
  const totalprice = document.getElementById("total-price")

  products.forEach(product => {
    const productdiv = document.createElement("div")
    productdiv.classList.add("product");
    productdiv.innerHTML=`
    <span>${product.name} - ${product.price.toFixed(2)} </span>
    <button data-id="${product.id}"> add to cart </button>
    `
    productList.appendChild(productdiv)
  })

  productList.addEventListener("click",(e)=>{
    if(e.target.tagName === "BUTTON"){
      const producttarget = parseInt(e.target.getAttribute("data-id"))
      const product = products.find((p)=>p.id == producttarget)
      addtocart(product)
    }
  })

  function addtocart(product){
    cart.push(product);
    console.log(cart);
    rendercart()
  }

  function rendercart(){
    cartItems.innerText = "";
    let totalpric = 0;

    if(cart.length >0){
      emptymessage.classList.add("hidden");
      carttotal.classList.remove("hidden");

      cart.forEach(product => {
        totalpric += product.price
        const productdiv = document.createElement("div")
        productdiv.classList.add("product");
        productdiv.innerHTML=`
        <span>${product.name} - ${product.price.toFixed(2)} </span>
        <button data-id= ${product.id}>remove</button>
        `
        cartItems.appendChild(productdiv)

        totalprice.textContent = totalpric

        
      });

    }
    else{
      emptymessage.classList.remove("hidden")
      totalprice.textContent = '0.00$'
    }

  }
  cartItems.addEventListener("click",(e)=>{
    if(e.target.hasAttribute("data-id")){
      const producttarget = parseInt(e.target.getAttribute("data-id"))
      const product = products.find((p)=>p.id == producttarget)
      const index = cart.findIndex(item => item.id === producttarget );
      if (index !== -1) {
          cart.splice(index, 1);
          rendercart();
      }}})
  checkout.addEventListener("click",()=>{
    cart.length=0
    alert("checked out")
    rendercart()
  })

});
