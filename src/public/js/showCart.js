//hàm hiển thị các sản phẩm trong giỏ hàng
function showCart() {
    if ((JSON.parse(window.localStorage.getItem('newItem')!==null)) && (JSON.parse(window.localStorage.getItem('newItem')).length != 0)) {

        //payButton.removeAttribute("disabled");

        const localS = JSON.parse(localStorage.getItem('newItem'));
        const getCost = $('.sum-price');
        const titlePage = $('.showProductCart');
        let sumPrice = 0;
        let itemCount = 0;
        
        localS.forEach(item => {
            sumPrice += parseInt(item.price) * item.quantity;
            itemCount += item.quantity;
        });

        getCost.html(`${sumPrice}`);
        titlePage.prepend($(`<div class="d-flex align-items-baseline titlePage"><h2 class="myCart">Giỏ hàng của bạn: </h2> <p><b>${itemCount} </b>sản phẩm trong giỏ hàng</p></div>`));

        // danh sách các mặt hàng
        const articleProductInCart = $('.countProductInCart');
        localS.forEach(item => {
            const sumPrice = item.quantity * item.price;
            articleProductInCart.append($(
                `<div class="row listWaitPay mt-4 mb-4">
                    <div class="col-2"><img class="item-img" src="${item.image}"></div>
                    <div class="col-4">
                        <p class="item-id" hidden>${item.id}</p>
                        <p class="item-loai" hidden>${item.loai}</p>
                        <h5 class="">Tên: ${item.name}</h5>
                        <p class="">${item.description}</p>
                    </div>
                    <div class="col-3 updown">
                        <input class="inputDown" type="button" value="-">
                        <input class="" type="number" name="quantity" value="${item.quantity}" disabled>
                        <input class="inputUp" type="button" value="+">
                    </div>
                    <div class="col-1 trash-div">
                        <i class="fa-solid fa-trash trashIcon" data-bs-toggle="modal" data-bs-target="#model-delete" ></i>
                    </div>
                    <div class="d-flex align-items-baseline col-2 price-div">
                        <h6>Thành tiền: </h6>
                        <p class="fw-bold text-dark"> ${sumPrice}</p>
                    </div>
                </div>
               `
            ))
        });
        // const titleNoItem = $('.noItem');
        const tongtien = document.getElementsByClassName('sum')[0].children[0];
        const pay = document.getElementsByClassName('toPay')[0];
        tongtien.style.display = 'block';
        pay.style.display = 'block';
        // titleNoItem.show()
    }
    else {
        const titlePage = $('.showProductCart');
        titlePage.append($(`<h4 class="noItem text-center">Hiện không có sản phẩm nào trong giỏ hàng!!!</h4>`))
    }
}

$(document).ready(function () {
    showCart();

    //Tăng giảm số lượng
    function uppdateQuantity(id, quantity) {
        const localS = JSON.parse(localStorage.getItem('newItem'));
        localS.forEach(item => {
            if (item.id == id && quantity >= 1) {
                item.quantity = quantity;
            }
        });
        localStorage.setItem('newItem', JSON.stringify(localS));
    }
    //Tăng
    const upQuantity = evt => {
        const clickUp = evt.target;
        const quantity = parseInt(clickUp.parentElement.children[1].value) + 1;
        const id = clickUp.parentElement.parentElement.getElementsByClassName('item-id')[0].textContent;

        uppdateQuantity(id, quantity);
        window.location.reload();
    }

    const clickUpdateUp = document.querySelectorAll('.inputUp');
    clickUpdateUp.forEach(update => {
        update.addEventListener('click', upQuantity);
    });

    //Giảm
    const downQuantity = evt => {
        const clicked = evt.target;

        const quantity = parseInt(clicked.parentElement.children[1].value) - 1;
        const id = clicked.parentElement.parentElement.getElementsByClassName('item-id')[0].textContent;

        uppdateQuantity(id, quantity);
        window.location.reload();
    }

    const clickUpdateDown = document.querySelectorAll('.inputDown');
    clickUpdateDown.forEach(update => {
        update.addEventListener('click', downQuantity);
    });
    // Xóa
    let idDelete
    function deleteCart(evt) {

        const click = evt.target;
        const id = click.parentElement.previousElementSibling.previousElementSibling.children[0].textContent;
        // console.log(id)
        idDelete = id
    };
    // click để xóa sản phẩm
    const clickDelete = document.querySelectorAll('.trashIcon');
    clickDelete.forEach(itemDelete => {
        itemDelete.addEventListener('click', deleteCart);
    });

    const clickOk = document.getElementById('btn-delete');
    // console.log(clickOk)
    clickOk.addEventListener('click', function () {
        let updatedCart = [];
        let localS = JSON.parse(localStorage.getItem('newItem'));
        //console.log(localS);
        localS.forEach(item => {
            if (item.id == idDelete) {
            }
            else {
                updatedCart.push(item);
            }
            
        });
        localStorage.setItem('newItem', JSON.stringify(updatedCart));
        window.location.reload();
    });
});

// // ẩn nút thanh toán
// const titleNoItem = $('.noItem');
// // console.log(titleNoItem)
// if (JSON.parse(localStorage.getItem('newItem')).length == 0) {
//     const tongtien = document.getElementsByClassName('sum')[0].children[0];
//     const pay = document.getElementsByClassName('toPay')[0];
//     tongtien.style.display = 'none';
//     pay.style.display = 'none';
//     // noitem.setAttribute("hidden", "flase");
//     titleNoItem.show()

// } else {
//     titleNoItem.hide()
// }

