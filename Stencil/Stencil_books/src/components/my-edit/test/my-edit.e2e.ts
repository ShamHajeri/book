import { newE2EPage } from '@stencil/core/testing';

describe('my-edit', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<my-edit></my-edit>');

    const element = await page.find('my-edit');
    expect(element).toHaveClass('hydrated');
  });
});
