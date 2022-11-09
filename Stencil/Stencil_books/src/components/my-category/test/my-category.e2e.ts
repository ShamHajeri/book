import { newE2EPage } from '@stencil/core/testing';

describe('my-category', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<my-category></my-category>');

    const element = await page.find('my-category');
    expect(element).toHaveClass('hydrated');
  });
});
