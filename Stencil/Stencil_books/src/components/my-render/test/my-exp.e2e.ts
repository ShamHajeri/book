import { newE2EPage } from '@stencil/core/testing';

describe('my-exp', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<my-exp></my-exp>');

    const element = await page.find('my-exp');
    expect(element).toHaveClass('hydrated');
  });
});
