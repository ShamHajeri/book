import { Component, h } from '@stencil/core';
import { data } from '../dataService';
@Component({
  tag: 'my-footer',
  styleUrl: 'my-footer.css',
  shadow: true,
})
export class MyFooter {

  render() {
    return (
      <div class='footer'>
        <h2>
        @amitiSoftware
        </h2>
      </div>
    );
  }

}
