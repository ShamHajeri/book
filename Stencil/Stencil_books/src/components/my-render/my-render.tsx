import { Component,Prop,getAssetPath, h, State } from '@stencil/core';
import { data } from '../dataService';
import { href } from 'stencil-router-v2';

@Component({
  tag: 'my-render',
  styleUrl: 'my-render.css',
  shadow: true,
  assetsDirs: ['assets'],
})
export class MyRender {
  @Prop() products:any;
  @Prop() whichBtn:string;
  @State() showBtn: boolean;
  @Prop({ mutable: true }) ids;

  id: number=1;
  user:any
  cart= this.getCartFromLocalStorage()
  addcart(){
    this.cart.push(this.id)
    console.log(this.cart)
    this.saveCartToLocalStorage()
   }

  async saveCartToLocalStorage() {
    localStorage.setItem("cart", JSON.stringify(this.cart))
    let dbcart= JSON.stringify(this.cart)
    let dbupdate= {
      id:this.user.id,
      userAddress:this.user.userAddress,
      userEmail:this.user.userEmail,
      userMobile_No: this.user.userMobile_No,
      userName:this.user.userName,
      userPassword: this.user.userPassword,
      cart:this.user.cart
          }
          console.log(dbupdate)
    const currentUser:any = JSON.parse(localStorage.getItem('currentuser'))
    this.user=  await data.request('/User/'+currentUser.userId,'GET','')
    console.log(this.user);
    
}

  getCartFromLocalStorage() {
    const cart = localStorage.getItem('cart')
    return cart ? JSON.parse(cart) : []
}


  showFun(id){
    this.showBtn= true
    this.id=id;
    if(this.whichBtn=="Add to Cart"){
      this.addcart()
    }
  }

  closeWindow(){
    this.showBtn= false
  } 
  render() {
    let editBtn= ''
    if(this.showBtn&& this.whichBtn=="Edit"){
      editBtn= (
      <div class="edit">
      <my-edit ids={this.id} />
      <button onClick={()=>this.closeWindow()} class="btng"> X </button>
      </div>);
    }
    else{

    }

    return (

      <div class='render_Product'>
      {
      this.products.map((product) =>
          <div class='cardView' >
            <div {...href('/review/'+product.productId)} >
            <div><img  src={getAssetPath(`../../assets/${product.productImg}`) } /></div>
            <div class='proName'>{product.productName}</div>
            <div class='proCat'>{product.productCategory}</div>
            </div>
            <button onClick={()=>this.showFun(product.productId)} class="btn">{this.whichBtn}</button>
          </div>
        )}
        {editBtn}
    </div> 
    );
  }

}
