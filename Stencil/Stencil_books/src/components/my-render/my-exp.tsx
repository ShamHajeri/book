import { Component, h, Prop } from '@stencil/core';
import { data } from '../dataService';

@Component({
  tag: 'my-exp',
  styleUrl: 'my-exp.css',
  shadow: true,
})
export class MyExp {
  @Prop() cate:any;
  products:any ;

  async componentWillLoad() {
    this.products= await data.request('/allproducts','GET','')   
}
  render() {
    return (
      <div class='expoler' >
       <my-render products={this.products} whichBtn="Add to cart" ></my-render>
      </div>
    );
  }

}
