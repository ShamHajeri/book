import { newE2EPage } from '@stencil/core/testing';

describe('my-review', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<my-review></my-review>');

    const element = await page.find('my-review');
    expect(element).toHaveClass('hydrated');
  });
});
