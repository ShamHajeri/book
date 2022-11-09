import { newE2EPage } from '@stencil/core/testing';

describe('my-admin', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<my-admin></my-admin>');

    const element = await page.find('my-admin');
    expect(element).toHaveClass('hydrated');
  });
});
