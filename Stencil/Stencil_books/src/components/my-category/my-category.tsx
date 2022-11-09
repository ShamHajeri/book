import { Component, h,getAssetPath, State } from '@stencil/core';

@Component({
  tag: 'my-category',
  styleUrl: 'my-category.css',
  shadow: true,
  assetsDirs: ['assets'],

})
export class MyCategory {
  @State() img1="Novel.png"
  @State() img2="Comic.png"
  @State() img3="Sci-Fi.png"
  products:any ;
  async componentWillLoad() {
    let response = await fetch('http://localhost:9191/allproducts');
    this.products= await response.json();
    }
novel(){
location.href='/category/1'
}
comic(){
  location.href='/category/2'
}
scfi(){
  location.href='/category/3'
}
  render() {
    
    return (
      <div>
      <div class='category'>
      <div><img onClick={()=>this.novel()}  src={getAssetPath(`../../assets/${this.img1}`)} /></div>
      <div><img onClick={()=>this.comic()} src={getAssetPath(`../../assets/${this.img2}`)} /></div>
      <div><img onClick={()=>this.scfi()} src={getAssetPath(`../../assets/${this.img3}`)} /></div>
      </div>
    <my-render products={this.products} whichBtn="Add to cart"></my-render>
    </div>
    );
  }

}
