
$(window).scroll(function () { if($(this).scrollTop()) {
    $('header').addClass('sticky'); } else {
    $('header').removeClass('sticky'); } }); $(window).ready(function(){
    $(".search-click").click(function(){ $(".search-input").toggle(); });
    $(".account-click").click(function(){ 
        $(".show-account").toggle(); 
        // $(".login-admin").toggle(); 
    });
});


if(localStorage.newItem !=undefined){
    const numberOrderedItems = document.querySelector('.count-holder');
    let numberOfItems = 0;
    let customerCart = JSON.parse(localStorage.getItem('newItem'));
    customerCart.forEach(item =>{
        numberOfItems = numberOfItems +item.quantity;
    });
    numberOrderedItems.style.color = 'white'
    numberOrderedItems.innerHTML = numberOfItems;
}

var price=document.querySelectorAll('.info__price')
    for (var i = 0; i < price.length; i++) {
        price[i].innerText = Number(price[i].innerText).toLocaleString('de-DE', { style: 'currency', currency: 'VND' })
}