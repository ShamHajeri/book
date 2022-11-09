import { newSpecPage } from '@stencil/core/testing';
import { MyMessage } from '../my-message';

describe('my-message', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MyMessage],
      html: `<my-message></my-message>`,
    });
    expect(page.root).toEqualHtml(`
      <my-message>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </my-message>
    `);
  });
});
