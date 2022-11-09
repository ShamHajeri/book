import { newSpecPage } from '@stencil/core/testing';
import { MyProfile } from '../my-profile';

describe('my-profile', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MyProfile],
      html: `<my-profile></my-profile>`,
    });
    expect(page.root).toEqualHtml(`
      <my-profile>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </my-profile>
    `);
  });
});
