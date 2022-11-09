import { Component,  h, Prop } from '@stencil/core';
import { href } from 'stencil-router-v2';


@Component({
  tag: 'my-navbar',
  styleUrl: 'my-navbar.css',
  shadow: true,
})
export class MyNavbar {
  @Prop() user:any = "Login"
 
componentWillLoad() {
  if(this.getCartFromLocalStorage==null){
    this.user="Login"
  }
  else{
    this.user="Profile"

  }
  
}
getCartFromLocalStorage() {
  const cart = localStorage.getItem('cart')
  return cart ? JSON.parse(cart) : []
}
  
  userUpdate(){
    if(this.user=="Login"){
      window.location.href='/auth'
    }
    else{
        window.location.href='/profile'
    }
  }
  nav_m(page:string){
    location.href="/"+page
  }
  render() {
    return (
      <div>  
      <div id="navbar">
          <div class="main_bar">
                 <a class="logoMobile"  {...href('/')}>Books</a> 
                  <a class="ele"{...href('/expoler')} ><my-button bnttext='Expoler' appearance=" dark"></my-button></a>
                  <a class="ele"{...href('/')}> <my-button bnttext='Top selling' appearance=" dark" ></my-button></a>
                  <a class="ele" {...href('/category')}><my-button bnttext='Category' appearance=" dark" ></my-button> </a>
                  <a class="ele"{...href('/cart')}><my-button bnttext='Cart' appearance=" dark" ></my-button> <span id="cartCount"></span></a>
                  <a class="ele" onClick={()=>this.userUpdate()} id="log_name"><my-button bnttext={this.user} appearance=" dark" ></my-button></a>
          </div>
       </div> 
       <div id='mobileNavbar'>
          <div class="mobileStyle">
                      <div class="dropdown">
                          <button class="dropbtn">≡</button>
                          <div class="dropdown-content">
                              <a onClick={()=>this.nav_m("expoler")}>Expoler</a>
                              <a onClick={()=>this.nav_m("")}>Top Selling</a>
                              <a onClick={()=>this.nav_m("category")} >Category</a>
                              <a onClick={()=>this.nav_m("cart")}>Cart</a>
                              <a onClick={()=>this.userUpdate()}>{this.user}</a>
                          </div>
                          </div>
              <a class="logoMobile" {...href('/')}> Books</a> 
       </div>
       </div>
       </div>
    );
  }

}
