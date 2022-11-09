import { Component,  h, Prop } from '@stencil/core';

@Component({
  tag: 'my-button',
  styleUrl: 'my-button.css',
  shadow: true,
})
export class MyButton {
  @Prop() bnttext: string;
  @Prop() appearance: string;
  render() {
    return (
     <button  class={`button${this.appearance}`}>{this.bnttext}</button>
    );
  }

}


