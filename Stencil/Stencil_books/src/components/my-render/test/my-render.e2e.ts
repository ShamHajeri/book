import { newE2EPage } from '@stencil/core/testing';

describe('my-render', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<my-render></my-render>');

    const element = await page.find('my-render');
    expect(element).toHaveClass('hydrated');
  });
});
