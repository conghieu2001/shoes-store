//thêm sản phẩm vào local
function isProductInCart(item,Arrayproduct){
    var index=-1;
    for(var i=0;i<Arrayproduct.length;i++){
        
        if(Arrayproduct[i].id==item.id){
            index=i;
        }
    }
    return index;
}

var addBtns=document.getElementsByClassName("addTocart");
for(var i=0;i<addBtns.length;i++){
    addBtns[i].addEventListener('click',addTocartCicked)
}

function addTocartCicked(e){
    
    const buttonAddProduct = e.target.parentElement.parentElement.parentElement.parentElement;
    // console.log(buttonAddProduct);
    var NewProduct={
              id: buttonAddProduct.getElementsByClassName('item-id')[0].innerText,
              name: buttonAddProduct.getElementsByClassName('item-name')[0].innerText,
              description: buttonAddProduct.getElementsByClassName('item-description')[0].innerText,
              image: buttonAddProduct.getElementsByClassName('item-image')[0].src,
              price: buttonAddProduct.getElementsByClassName('price')[0].innerText,
              loai: buttonAddProduct.getElementsByClassName('loai')[0].innerText,
              quantity :1
    }
    // console.log(NewProduct.name)
    var Arrayproduct=[];
    // chua co localStorage
        if(JSON.parse(window.localStorage.getItem('newItem')===null)){
            Arrayproduct.push(NewProduct);
            window.localStorage.setItem("newItem",JSON.stringify(Arrayproduct))
        }
    // da co localStorage
        else{
            // san pham chua ton tai
            Arrayproduct=JSON.parse(window.localStorage.getItem('newItem'));
            var index=isProductInCart(NewProduct,Arrayproduct);
            if(index<0){
                Arrayproduct.push(NewProduct);
                window.localStorage.setItem("newItem",JSON.stringify(Arrayproduct));
            }
            // san pham co ton tai
            else{
                Arrayproduct[index].quantity++
                window.localStorage.setItem("newItem",JSON.stringify(Arrayproduct));
            }
        }
        //số sản phẩm trong giỏ hàng
        alert("Sản phẩm ID: "+NewProduct.id+" đã được thêm vào giỏ hàng! ");
        window.location.reload();
    
}

