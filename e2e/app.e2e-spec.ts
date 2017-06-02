import { SocialBirderPage } from './app.po';

describe('social-birder App', () => {
  let page: SocialBirderPage;

  beforeEach(() => {
    page = new SocialBirderPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
