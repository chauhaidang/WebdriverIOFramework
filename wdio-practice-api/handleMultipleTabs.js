describe('Name of the group', () => {

    let pageUrl = "https://webdriver.io/docs/gettingstarted.html";
    let editBtnSelector = '.edit-page-link.button';

    it('handle multiple windows', () => {
        browser.url(pageUrl);
        browser.maximizeWindow();
        $(editBtnSelector).waitForDisplayed(5000);
        $(editBtnSelector).click();

        let allWindowIds = browser.getWindowHandles();
        console.log(allWindowIds);

        let firstWindowId = allWindowIds[0];
        let secondWindowId = allWindowIds[1];

        browser.switchToWindow(secondWindowId);

        let secondWindowTitle = browser.getTitle();
        console.log(`secondWindowTitle is ${secondWindowTitle}`);

        browser.closeWindow();

        browser.switchToWindow(firstWindowId);

        let firstWindowTitle = browser.getTitle();
        console.log(`firstWindowTitle is ${firstWindowTitle}`);

        browser.pause(3000);

        
    });
});