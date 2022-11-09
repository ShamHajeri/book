import { Component, h, State,getAssetPath, Prop } from '@stencil/core';
import { data } from '../dataService';

@Component({
  tag: 'my-review',
  styleUrl: 'my-review.css',
  shadow: true,
  assetsDirs: ['assets'],

})
export class MyReview {
  @State() showBtn: boolean;
  @State() reviewPro:any; 
  @Prop() ids :any=1;
  products:any 
  async componentWillLoad() {
    this.products= await data.request('/product/'+this.ids,'GET','')
}

  render() {
  let review =(
    <div class="review">
      <div class="imgDiv">
       <img  src={getAssetPath(`../../assets/${this.products.productImg}`)} />
       <h4>{this.products.productName}</h4>
       <h5>{this.products.productCategory}</h5> 
      </div>
      <div class="content">
        <h1>Description</h1>
        <p>{this.products.productDes}</p>
        <div>
        </div>
      </div>
      
    </div>
  );

    return review
  }

}
