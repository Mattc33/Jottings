import { JottingsPage } from './app.po';

describe('jottings App', () => {
  let page: JottingsPage;

  beforeEach(() => {
    page = new JottingsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
