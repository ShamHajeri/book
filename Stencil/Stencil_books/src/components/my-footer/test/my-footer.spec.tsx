import { newSpecPage } from '@stencil/core/testing';
import { MyFooter } from '../my-footer';

describe('my-footer', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MyFooter],
      html: `<my-footer></my-footer>`,
    });
    expect(page.root).toEqualHtml(`
      <my-footer>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </my-footer>
    `);
  });
});
