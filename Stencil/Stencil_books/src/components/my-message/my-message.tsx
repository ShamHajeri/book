import { Component, h, Prop, State } from '@stencil/core';

@Component({
  tag: 'my-message',
  styleUrl: 'my-message.css',
  shadow: true,
})

export class MyMessage {
  @Prop() title:string;
  @Prop() body:string;
  @Prop() status:boolean
  @State() showStatus:boolean = true;
  showMesssge(){
    this.showStatus=false;
  }

  render() {
    
    let message= ( <div class="card-modal">
            <div class="card">
                 <h3>{this.title}</h3>
                 <p>{this.body}</p>
                <div class="btnLayout">
                  <my-button bnttext=' Close ' appearance=' dark' onClick={()=>this.showMesssge()}></my-button>
                </div>
            </div>
      </div>);
      return message
  }

}
