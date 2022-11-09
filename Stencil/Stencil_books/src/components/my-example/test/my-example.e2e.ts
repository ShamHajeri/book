import { newE2EPage } from '@stencil/core/testing';

describe('my-example', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<my-example></my-example>');

    const element = await page.find('my-example');
    expect(element).toHaveClass('hydrated');
  });
});
