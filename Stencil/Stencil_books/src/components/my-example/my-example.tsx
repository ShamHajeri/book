import { Component, h } from '@stencil/core';

@Component({
  tag: 'my-example',
  styleUrl: 'my-example.css',
  shadow: true,
})
export class MyExample {


  render() {
  
    return(<div class="responsive-menu">
    <label class="nav_icon">
      <span onClick={this.showCutomerMenu} >Customer Support<svg class="dropdown-icon" width="6" height="12" viewBox="0 0 6 12"
          xmlns="http://www.w3.org/2000/svg">
          <path d="M0 0L0 12L6 6L0 0Z" />
        </svg>
      </span>
    </label>
    <div id="main_nav" class = "hide_menu">
      <div id="customertext">Customer Support</div>
        <div class="extraoptions" onClick={this.showCutomerMenu}>
          <label class="nav_close_icon">
            Back
          </label>
        </div>
        <ul>
          <li>
            <a> Contact Us </a>
            <a> Feedback </a>
            <a> Live Chat Live Chat </a>
          </li>
        </ul>
    </div>
  </div>);
  }
  
  showCutomerMenu() {
    const trigger_menu = document.getElementById('main_nav')
    trigger_menu.classList.toggle('hide_menu')
  }
}
