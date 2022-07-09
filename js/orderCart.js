import {price, btnActive} from './main.js'

let productsInCart = [] // variable for cart
let exam = []
const products = document.querySelectorAll('.productInCart')// variable for loop with or
const innerCart = document.querySelector('.innerCart')
let productToCart //an object containing orders to be sent to the cart
let productID



// function for add products to shoping cart
function updateProductsInCart(product){
    for(let i =0 ; i < productsInCart.length; ++i){
        if (productsInCart[i].id == product.id && productsInCart[i].size == product.size &&  productsInCart[i].dough == product.dough){

            productsInCart[i].count += 1
            productsInCart[i].price = productsInCart[i].basePrice * productsInCart[i].count
            removeActivBtn(btnActive) // function to disable active buttons after clicking the "add to cart" button
            return;
        }
     }
   productsInCart.push(product)
   removeActivBtn(btnActive) // function to disable active buttons after clicking the "add to cart" button
  
}

// creating an object containing order parameters
products.forEach(product =>{
    product.addEventListener('click', function(event){
        if (event.target.classList.contains('addToCart')){
            productID = event.target.dataset.productId;
            const productName = product.querySelector('.title').textContent;
            const productPrice = product.querySelector('.price span').textContent;
            const productSize = product.querySelector('.active').textContent;
            const doughThickness = product.querySelector('.dough.active').textContent;
            const productImage = product.querySelector('img').src;
            productToCart = {
                id: productID,
                name: productName,
                count: 1,
                dough:doughThickness,
                size: productSize,
                image: productImage,
                price: +productPrice,
                basePrice: +productPrice,
            }
            updateProductsInCart(productToCart)
            
          
        } 
    })
    
})


innerCart.addEventListener('click', function(event){
    if (event.target.classList.contains('innerCart')){
       console.log(productsInCart)

    }
})


//function to disable active buttons after clicking the "add to cart" button
function removeActivBtn(buttons){
    buttons.forEach(button=>{
        let WrapperCardId = button.closest('.card')
        let WrapperProductId = WrapperCardId.querySelector('.addToCart')
       if (WrapperCardId.dataset.cardId == productID){
        button.classList.remove('active')
        price.textContent = '0';
       }
    })
}