import { Component, getAssetPath, h, State } from '@stencil/core';

@Component({
  tag: 'my-cart',
  styleUrl: 'my-cart.css',
  shadow: true,
})
export class MyCart {
  @State() products:any;
  @State() cartProduct:any[]=[];
  quantity:any[]=[]
  cart= this.getCartFromLocalStorage()
  
   
 async componentWillLoad() {  
    for(let i=0;i<=this.cart.length-1;i++){
      console.log(this.cart[i])
      let response = await fetch('http://localhost:9191/product/'+this.cart[i]);
      this.products= await response.json();
      this.cartProduct.push(this.products)
  }
        }
    
  
  ReviewPage(id){
    window.location.href='/review/'+id
  }
  

  onRemoveFromCartClick(id) {
  const index = this.cart.findIndex(item => item == id)
  this.cart.splice(index, 1)
  console.log(this.cart);
  this.saveCartToLocalStorage()

}
saveCartToLocalStorage() {
  localStorage.setItem("cart", JSON.stringify(this.cart))
}
getCartFromLocalStorage() {
  const cart = localStorage.getItem('cart')
  return cart ? JSON.parse(cart) : []
}
onAddQuantity(id){
   let quant:any={
   }

}
onRemoveQuantity(id){

}
  render() {
    return (
          <div class='render_Product'>
      {  this.cartProduct.map((p: { productId: any; productImg: any; productName: any; productCategory: any; }) =>
          <div class='cardView' >
            <div onClick={()=>this.ReviewPage(p.productId)}>
            <div><img  src={getAssetPath(`../../assets/${p.productImg}`)} /></div>
            <div class='proName'>{p.productName}</div>
            <div class='proCat'>{p.productCategory}</div>
            </div>
            <div class='quantity'>
            <button onClick={()=>this.onAddQuantity(p.productId)} class="btnQ">+</button>
            <div class='qNo'></div>
            <button onClick={()=>this.onRemoveQuantity(p.productId)} class="btnQ">-</button>
            </div>
            <button onClick={()=>this.onRemoveFromCartClick(p.productId)} class="btn">Remove</button>
          </div>
        )}
    </div>     );
  }

}
