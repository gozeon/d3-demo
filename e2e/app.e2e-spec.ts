import { D3DemoPage } from './app.po';

describe('d3-demo App', () => {
  let page: D3DemoPage;

  beforeEach(() => {
    page = new D3DemoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
