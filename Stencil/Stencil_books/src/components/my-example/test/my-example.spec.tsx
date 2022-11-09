import { newSpecPage } from '@stencil/core/testing';
import { MyExample } from '../my-example';

describe('my-example', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MyExample],
      html: `<my-example></my-example>`,
    });
    expect(page.root).toEqualHtml(`
      <my-example>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </my-example>
    `);
  });
});
