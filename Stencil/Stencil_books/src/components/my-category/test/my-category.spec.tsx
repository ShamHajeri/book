import { newSpecPage } from '@stencil/core/testing';
import { MyCategory } from '../my-category';

describe('my-category', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MyCategory],
      html: `<my-category></my-category>`,
    });
    expect(page.root).toEqualHtml(`
      <my-category>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </my-category>
    `);
  });
});
