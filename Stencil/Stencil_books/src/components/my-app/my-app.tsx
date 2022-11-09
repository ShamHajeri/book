import { Component, h, Host, Prop, State } from '@stencil/core';
import { data } from '../dataService';
import { createRouter, match, Route } from 'stencil-router-v2';

const Router = createRouter();

@Component({
  tag: 'app-root',
})
export class AppRoot {
  user:any
  products:any;
  auth:any;
  async componentWillLoad() {
    this.products= await data.request('/allproducts','GET','') 
    this.checkCurrentUser()
}
 
  checkCurrentUser(){
    let currentUser=JSON.parse(localStorage.getItem('currentuser')) ;

    if( currentUser==null){
      console.log('not user')
    this.auth=[<my-auth/>]

    } 
    else{
      console.log('user')
      this.auth=[<my-profile/>]
      this.user = currentUser.name
    }
  }

  render() {
return(
      <Host>
        <my-navbar/>
        <Router.Switch>
          <Route path="/">
           <my-modal/>
           <my-render products={this.products} whichBtn='Add to cart'/>
          </Route>
          <Route path="/auth">
            <my-auth/>
          </Route>
          <Route path="/admin">
            <my-admin/>
          </Route>
          <Route path="/profile">
            {this.auth}
          </Route>
          <Route path="/cart">
            <my-cart/>
          </Route>
          <Route path="/expoler">
          <my-render products={this.products} whichBtn='Add to cart'/>
          </Route>
          <Route path={match("/review/:ids") }  render={({ids})=><my-review ids={ids}/>}/>
          <Route path={match("/category/:cate") }  render={({cate})=><my-exp cate={cate} />}/>
          <Route path="/category" >
            <my-category/>
          </Route>
        </Router.Switch>
      </Host>
)
  }
}