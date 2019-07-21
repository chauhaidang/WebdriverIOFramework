describe('learning API', () => {
    let pageUrl = "https://the-internet.herokuapp.com/javascript_alerts";
    let jsconfirmSelector = '[onclick="jsConfirm()"]'

    it('handle alert', () => {
        browser.url(pageUrl);
        $(jsconfirmSelector).waitForDisplayed(5000);
        $(jsconfirmSelector).click();

        browser.pause(3000);

        let alertText = browser.getAlertText();
        console.log(`alert text is ${alertText}`);

        browser.acceptAlert();

        browser.pause(3000);

        $(jsconfirmSelector).click();
        browser.pause(3000);

        browser.dismissAlert();

        browser.pause(3000);
    });
});