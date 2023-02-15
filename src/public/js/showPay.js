//hàm hiển thị các sản phẩm trong giỏ hàng
function showCart() {
    if (JSON.parse(localStorage.getItem('newItem')).length != 0) {

        const localS = JSON.parse(localStorage.getItem('newItem'));
        const getCost = $('.sum-price');
        let sumPrice = 0;
        
        localS.forEach(item => {
            sumPrice += parseInt(item.price) * item.quantity;
        });

        getCost.html(`${sumPrice}`);

        // danh sách các mặt hàng
        const articleProductInCart = $('.showProductToPay');
        // console.log(articleProductInCart)
        localS.forEach(item => {
            const sumPrice = item.quantity * item.price;
            articleProductInCart.append($(
                `
                <div class="row">
                    <img class="col-2" src="${item.image}" alt="" >
                    <p class="col-8">${item.description}</p>
                    <p class="col-2 text-center">${item.price} * ${item.quantity} = <b>${sumPrice}</b></p>
                </div>
                <hr>
                
               `
            ))
        });
    }
}
var getPD = document.querySelector('.sanpham');
var localS = (localStorage.getItem('newItem'));
getPD.value = localS;


$(document).ready(function () {
    showCart(); 
});

form1.addEventListener('submit', function() {
    localStorage.clear();
})