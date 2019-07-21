describe('learning API', () => {
    let pageUrl = "https://the-internet.herokuapp.com/dropdown";
    let element = 'h3';
    let strCurrentHighLightText = "";

    it('get TExt', () => {
        browser.url(pageUrl);
        $(element).waitForDisplayed(5000);
        strCurrentHighLightText = $(element).getText();
        console.log(strCurrentHighLightText);
        browser.pause(3000);
    });
});