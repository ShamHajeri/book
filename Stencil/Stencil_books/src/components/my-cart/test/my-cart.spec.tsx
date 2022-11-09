import { newSpecPage } from '@stencil/core/testing';
import { MyCart } from '../my-cart';

describe('my-cart', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MyCart],
      html: `<my-cart></my-cart>`,
    });
    expect(page.root).toEqualHtml(`
      <my-cart>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </my-cart>
    `);
  });
});
