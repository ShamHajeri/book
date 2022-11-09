import { Component, h,Element, State } from '@stencil/core';
import { data } from '../dataService';

@Component({
  tag: 'my-profile',
  styleUrl: 'my-profile.css',
  shadow: true,
})
export class MyProfile {
  @Element() el: HTMLElement
  Name:HTMLInputElement
  Email:HTMLInputElement
  Number:HTMLInputElement
  Address:HTMLTextAreaElement
 @State() showMessage: boolean= false
  title:string
  body:string
  user:any

async componentWillLoad() {
let  currentUser=JSON.parse(localStorage.getItem('currentuser')) ;
 this.user = await data.request('/User/'+currentUser.userId,'GET','')
 console.log(this.user)
}

 async handleSubmit(event :Event) {
    (event).preventDefault();
    const name = this.Name.value;
    const email= this.Email.value;
    const number = this.Number.value;
    const address = this.Address.value;
    console.log(this.user.id)
    let userObject={
      id:this.user.id,
      userName :name,
      userEmail:email,
      userPassword:this.user.userPassword,
      userAddress:address,
      userMobile_No:number,
    }
      await data.request('/updateUser','PUT',userObject)
      this.showMessage= true
      this.title="Profile"
      this.body="Profile has been update, Thank You"

  }
  Close(){
    this.showMessage= false
  }
  logout(){
    localStorage.removeItem("currentuser");
    window.location.href='/'
  }
 

  render() {
    let message =''
    if(this.showMessage){
      message =(
        <my-message onClick={()=>this.Close()} title={this.title} body={this.body}></my-message>
      );
    }
    else{
      message ='';
    }
  
    return (
      <div class="profileForm">
      <form onSubmit={this.handleSubmit.bind(this)}>
        <label> Name :</label>
        <input type="text" value={this.user.userName} ref={el=>this.Name=el}/><br/>
        <label> Email :</label>
        <input type="text" value={this.user.userEmail} ref={el=>this.Email=el}/><br/>
        <label> Number :</label>
        <input type="text" value={this.user.userMobile_No} ref={el=>this.Number=el}/><br/>
        <label> Address :</label>
        <textarea  value={this.user.Address} ref={el=>this.Address=el}/><br/><br/>
        <input class="submit" type="submit" value="Save" /><br/><br/>
        <input class="submit" type="button" value="Log Out" onClick={this.logout.bind(this)}/><br/>
      </form>
      {message}
    </div>
    );
  }

}
