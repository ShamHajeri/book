import { newSpecPage } from '@stencil/core/testing';
import { MyAuth } from '../my-auth';

describe('my-auth', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MyAuth],
      html: `<my-auth></my-auth>`,
    });
    expect(page.root).toEqualHtml(`
      <my-auth>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </my-auth>
    `);
  });
});
