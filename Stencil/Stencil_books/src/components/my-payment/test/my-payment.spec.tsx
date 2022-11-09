import { newSpecPage } from '@stencil/core/testing';
import { MyPayment } from '../my-payment';

describe('my-payment', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MyPayment],
      html: `<my-payment></my-payment>`,
    });
    expect(page.root).toEqualHtml(`
      <my-payment>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </my-payment>
    `);
  });
});
