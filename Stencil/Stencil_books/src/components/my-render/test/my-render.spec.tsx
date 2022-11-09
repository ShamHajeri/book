import { newSpecPage } from '@stencil/core/testing';
import { MyRender } from '../my-render';

describe('my-render', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MyRender],
      html: `<my-render></my-render>`,
    });
    expect(page.root).toEqualHtml(`
      <my-render>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </my-render>
    `);
  });
});
