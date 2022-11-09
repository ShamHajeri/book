import { Component, h,State,Element } from '@stencil/core';
import { data } from '../dataService';

@Component({
  tag: 'my-auth',
  styleUrl: 'my-auth.css',
  shadow: true,
})
export class MyAuth {
  @Element() el:HTMLElement;
  username: HTMLInputElement;
  userEmail: HTMLInputElement;
  userPasssword: HTMLInputElement;
  cpass: HTMLInputElement;
  user :any
 
  //GET
  async componentWillLoad() {
    this.user= await data.request('/allUsers','GET','')
}
  
  @State() toggle: boolean
  @State() showMessage: boolean 
    title: string;
    body: string;
    
  handleSubmit(event :Event) {
    (event).preventDefault();
    const name:string = this.username.value;
    const email:string = this.userEmail.value;
    const password:string = this.userPasssword.value;
    const correctPassword:string = this.cpass.value;
    if( correctPassword!==password){
      this.title="Sign Up"
      this.body="Create Password and Re-type Password Doesn't match"
      this.showMessageBar()
    }
    else{
    console.log(email)
    console.log(password)
    this.saveUserToLocalStorage(name, email,password)
    console.log('sign Up successfull')
  }
}


anuthecation (event : Event){
  (event).preventDefault();
  let j:number =0;
  const email:string = this.userEmail.value;
  const password:string = this.userPasssword.value;
  const users =this.user;
    
    for(let i=0;i<users.length;i++){
     if(email==users[i].userEmail && password==users[i].userPassword){
       j=1;
       let currentUser={
        userId :users[i].id,
        userName :users[i].userName,
        userEmail:email
      }
      this.upDateCurrentuser(currentUser)
       window.location.href='/'
       }
    }
    if(j==0){
     this.title="Authencation"
     this.body="Your entered wrong Email or Password, please check Email and Password again and try to Login"
     this.showMessageBar()
   }
    

}

async saveUserToLocalStorage(name:string, email :string,password :string) {
    let user={
      userName :name,
      userEmail:email,
      userPassword:password
    }
    await data.request('/addUser','POST',user)
    let currentUser={
      userName :name,
      userEmail:email
    }
    this.upDateCurrentuser(currentUser)
    window.location.href='/'
}

upDateCurrentuser(user:any){
  localStorage.setItem("currentuser", JSON.stringify(user))
  console.log("login successfull")

}


showMessageBar(){
  this.showMessage= true
  console.log(this.showMessage)

}
dontShowMessageBar(){
  this.showMessage= false
  console.log(this.showMessage)

}

showSignUp(){
  this.toggle= false
  console.log(this.toggle)
}


showLogin(){
  this.toggle= true
  console.log(this.toggle)
}
 
  render() {
     let message=''
     if (this.showMessage){
       message=(
        <my-message title={this.title} body={this.body} onClick={()=>this.dontShowMessageBar()}></my-message>
       );
     }
     else{
           message=''
     }

      let signUpPage =(
        <div class="auth">
             <div>
             <form onSubmit={this.handleSubmit.bind(this)}>
                <input class="form_container_input"  minlength="4" type="text"  placeholder="User Name" ref={el=>this.username=el}/> 
                <input class="form_container_input"  type="email" placeholder="Email" ref={el=>this.userEmail=el}/> 
                <input class="form_container_input" minlength="6" type="password" placeholder="Create Password" ref={el=>this.userPasssword=el}/> 
                <input class="form_container_input" minlength="6"  type="password" placeholder="Re-type Password " ref={el=>this.cpass=el}/>
                <input class="btn" type='submit' value='Sign Up' />
            </form>
            <p>I already have account <a onClick={()=>this.showLogin()} > Login</a></p>  
            {message}
            </div>
        </div>
        );


        let loginPage =(
          <div class='auth'>
            <div>
                <form onSubmit={this.anuthecation.bind(this)}>
                    <input class="form_container_input"  type="email" placeholder="Email" ref={el=>this.userEmail=el}/> 
                    <input  class="form_container_input"  type="password" placeholder="Password" ref={el=>this.userPasssword=el}/>
                    <input class="btn" type='submit' value="Login"/>
                </form>
                <p>I Don't have account <a onClick={()=>this.showSignUp()}> Sign Up</a></p>  
                <p> <a > Forget Password</a></p> 
                {message}
            </div>
          </div>
          );

          let mainRender ='';
          if(this.toggle){
            mainRender= loginPage
                }
          else{
            mainRender= signUpPage
          }
        return mainRender
  }
}




