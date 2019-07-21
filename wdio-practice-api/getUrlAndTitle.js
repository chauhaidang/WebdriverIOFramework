describe('learning API', () => {
    let pageUrl = "https://the-internet.herokuapp.com";
    let welcomeSelector = 'h1';
    let pageUrlText = "";
    let pageTitleText = "";

    it('get page Url and title', () => {
        browser.url(pageUrl);
        $(welcomeSelector).waitForDisplayed(5000);

        pageUrlText = browser.getUrl();
        console.log(pageUrlText);

        pageTitleText = browser.getTitle();
        console.log(pageTitleText);

        browser.pause(3000);
    });
});