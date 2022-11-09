import { newSpecPage } from '@stencil/core/testing';
import { MyEdit } from '../my-edit';

describe('my-edit', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MyEdit],
      html: `<my-edit></my-edit>`,
    });
    expect(page.root).toEqualHtml(`
      <my-edit>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </my-edit>
    `);
  });
});
