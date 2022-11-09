import { newSpecPage } from '@stencil/core/testing';
import { MyAdmin } from '../my-admin';

describe('my-admin', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MyAdmin],
      html: `<my-admin></my-admin>`,
    });
    expect(page.root).toEqualHtml(`
      <my-admin>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </my-admin>
    `);
  });
});
