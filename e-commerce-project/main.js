
// let section2 = document.querySelector('.section-2')
// gsap.from('li a',{
//     y:20,
//     opacity:0,
//     delay:.7,
//     stagger:.15
// })
// gsap.from('body',{
//     opacity:0,
//     y:100,
//     duration:1,
//     delay:.3,
// })
// gsap.from('.box-content',{
//     opacity:0,
//     y:30,
//     duration:1,
//     delay:.7
// })

// cart section
let btn = document.querySelectorAll(".best-deal-para .btn")
btn.forEach((button)=>{
    button.addEventListener('click',()=>{
        const name = button.parentElement.parentElement.children[2].innerHTML;
        const price = button.parentElement.parentElement.children[3].children[0].innerHTML;
        const image = getComputedStyle(button.parentElement.parentElement.children[0])
        const img = image.backgroundImage
        // console.log(img)
        addToCart(name,price,img);
        let rem = document.querySelectorAll('.dec-prod')
        let add = document.querySelectorAll('.inc-prod')

        let count = 1
        const prodCount = document.querySelector('.prod-count')
        add.forEach((addbtn)=>{
            addbtn.addEventListener('click',()=>{
                addbtn.parentElement.children[3].innerHTML = `${count+=1}`
            })
        })
        rem.forEach((remove)=>{
            remove.addEventListener('click',()=>{
                let delCount = remove.parentElement.children[3].innerHTML
                console.log(delCount)
                if(delCount == 1){
                    remove.parentElement.innerHTML = ''
                }
                else{
                    remove.parentElement.children[3].innerHTML = `${count-=1}`
                }
            })
        })
    })
})
// let i = document.querySelector('.prod-img');
// i.src = './electronic-store-product-gallery-image-19-600x600-2.jpeg'

//add element to cart
function addToCart(name, price, img) {
    let items = document.querySelector('.cart-section');

    items.innerHTML += `<div class="cart-items">
    <img class='prod-img' src="${img.slice(5,-2)}" alt="">
    <p class="prod-name">${name}</p>
    <button class="dec-prod btn">-</button>
    <p class="prod-count">1</p>
    <button class="inc-prod btn">+</button>
    <p class="prod-price">${price}</p>
</div>`  

    console.log(img.slice(5,-2))
}

// cart move in and out 
let cart = document.querySelector('.cartbtn');
let count = true
cart.addEventListener('click',()=>{
    let items = document.querySelector('.cart-section');
    if(count==true){
        items.style.right = '0%'
        items.style.transition = '.8s'
        count = false
    }
    else{
        items.style.right = '-30%'
        items.style.transition = '.8s'
        count= true
    }
})


