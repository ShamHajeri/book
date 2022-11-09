import { newE2EPage } from '@stencil/core/testing';

describe('my-profile', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<my-profile></my-profile>');

    const element = await page.find('my-profile');
    expect(element).toHaveClass('hydrated');
  });
});
