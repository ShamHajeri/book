import { newE2EPage } from '@stencil/core/testing';

describe('my-cart', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<my-cart></my-cart>');

    const element = await page.find('my-cart');
    expect(element).toHaveClass('hydrated');
  });
});
