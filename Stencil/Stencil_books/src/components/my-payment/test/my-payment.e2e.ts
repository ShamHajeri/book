import { newE2EPage } from '@stencil/core/testing';

describe('my-payment', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<my-payment></my-payment>');

    const element = await page.find('my-payment');
    expect(element).toHaveClass('hydrated');
  });
});
