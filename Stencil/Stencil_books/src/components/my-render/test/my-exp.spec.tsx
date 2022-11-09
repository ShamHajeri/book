import { newSpecPage } from '@stencil/core/testing';
import { MyExp } from '../my-exp';

describe('my-exp', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MyExp],
      html: `<my-exp></my-exp>`,
    });
    expect(page.root).toEqualHtml(`
      <my-exp>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </my-exp>
    `);
  });
});
