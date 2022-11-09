import { newE2EPage } from '@stencil/core/testing';

describe('my-message', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<my-message></my-message>');

    const element = await page.find('my-message');
    expect(element).toHaveClass('hydrated');
  });
});
