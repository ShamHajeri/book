import { Component,h,Element,Prop } from '@stencil/core';

@Component({
  tag: 'my-admin',
  styleUrl: 'my-admin.css',
  shadow: true,
  assetsDirs: ['assets'],
})
export class MyAdmin {
  @Element() el:HTMLElement
  @Prop() img:string;
  proName: HTMLInputElement;
  proCategory: HTMLInputElement;
  proImg: HTMLInputElement;
  proDes: HTMLInputElement;
  proPrice: HTMLInputElement;
  products:any
  
async componentWillLoad() {
    let response = await fetch('http://localhost:9191/allproducts');
    this.products= await response.json();
    console.log(this.products)
    
}


  handleSubmit(event :Event) {
    (event).preventDefault();
    const name:string = this.proName.value;
    const category:string = this.proCategory.value;
    const img:string = this.proImg.value;
    const des:string = this.proDes.value;
    const price:number = +this.proPrice.value;
    this.saveUserToLocalStorage(name,category,img,des,price)
    console.log('Product upload')
  
}
async saveUserToLocalStorage(name:string, category :string,img :string,des:string,price:number) {
        let data ={
           id:0,productName:name,productCategory:category,productImg:img,productDes:des,productPrice:price
        }
        console.log(data)
       await fetch('http://localhost:9191/addProduct',{
       method:'POST',
       body:JSON.stringify(data),
       headers:{
        'Content-Type': 'application/json',
       }});

}


  render() {
    return (
     <div class="admin_page">
        <div class='forms' >
          <h1>Add Product</h1>
          <form onSubmit={this.handleSubmit.bind(this)}>
            <h4>Product Name</h4>
            <input type="text" ref={el=>this.proName=el}/><br/>
            <h4>Product Category</h4>
            <input type="text" ref={el=>this.proCategory=el}/><br/>
            <h4>Product Img</h4>
            <input type="text" ref={el=>this.proImg=el}/><br/>
            <h4>Product discription</h4>
            <input type="text" ref={el=>this.proDes=el}/><br/>
            <h4>Price</h4>
            <input type="number" ref={el=>this.proPrice=el}/><br/><br/>
            <input class='submit' type="submit" />
          </form>
        </div>
        <div class='render'>
       <my-render products={this.products} whichBtn="Edit"></my-render>
       </div>
    </div>
    );
  }
}
