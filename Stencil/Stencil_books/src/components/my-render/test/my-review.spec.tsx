import { newSpecPage } from '@stencil/core/testing';
import { MyReview } from '../my-review';

describe('my-review', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MyReview],
      html: `<my-review></my-review>`,
    });
    expect(page.root).toEqualHtml(`
      <my-review>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </my-review>
    `);
  });
});
