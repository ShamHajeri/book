import { Component,Prop,Element, h, getAssetPath } from '@stencil/core';

@Component({
  tag: 'my-edit',
  styleUrl: 'my-edit.css',
  shadow: true,
  assetsDirs: ['assets'],
})
export class MyEdit {
  @Element() el:HTMLElement;
  proName:HTMLInputElement;
  proCategory:HTMLInputElement;
  proDes:HTMLInputElement;
  proImg:HTMLInputElement;
  proPrice:HTMLInputElement;
  products:any
  @Prop() ids:number=1;

  async componentWillLoad() {
    let response = await fetch('http://localhost:9191/product/'+this.ids);
    this.products= await response.json();
    console.log(this.products)
}


  handleSubmit(event :Event) {
    (event).preventDefault();
    const name = this.proName.value;
    const category= this.proCategory.value;
    const price:any = this.proPrice.value;
    const des = this.proDes.value;
    const img = this.proImg.value;
      this.saveUserToLocalStorage(name,category,img,des,price)
      // window.location.href='/admin'

  }
  async saveUserToLocalStorage(name:string, category :string,img :string,des:string,price:number) {
    let data ={
      productId:this.products.productId,
      productName:name,
      productCategory:category,
      productImg:img,
      productDes:des,
      price:price
    }
    console.log(data)
   await fetch('http://localhost:9191/updateProduct',{
   method:'PUT',
   body:JSON.stringify(data),
   headers:{
    'Content-Type': 'application/json',
   }})
   .catch(er => console.log(er));

}

  render() {
    return (
      <div class="editForm">
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div class="centreDiv"><img  src={getAssetPath(`../../assets/${this.products.productImg}`)} /></div>
          <label> Name :</label>
          <input type="text" value={this.products.productName} ref={el=>this.proName=el}/><br/>
          <label> Category :</label>
          <input type="text" value={this.products.productCategory} ref={el=>this.proCategory=el}/><br/>
          <label> Description :</label>
          <input type="text" value={this.products.productDes} ref={el=>this.proDes=el}/><br/>
          <label> Price :</label>
          <input type="text" value={this.products.price} ref={el=>this.proPrice=el}/><br/>
          <label> Image :</label>
          <input type="text" value={this.products.productImg} ref={el=>this.proImg=el}/><br/>
          <input class="submit" type="submit" value="Save" />
        </form>
      </div>
    );
  }

}
