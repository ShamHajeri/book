import { newE2EPage } from '@stencil/core/testing';

describe('my-footer', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<my-footer></my-footer>');

    const element = await page.find('my-footer');
    expect(element).toHaveClass('hydrated');
  });
});
