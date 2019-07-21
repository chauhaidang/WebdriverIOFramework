describe('Session 10', () => {

    const MAX_WAIT_TIME = 5000;

    let loginUrl = "https://the-internet.herokuapp.com/";
    let formAuthenLinkText = '=Form Authentication';
    let userNameSelector = '#username';
    let passwordSelector = '#password';
    let loginButton = '[type="submit"]';

    it('click form authentication', () => {
        browser.url(loginUrl);

        $(formAuthenLinkText).waitForDisplayed(MAX_WAIT_TIME);
        $(formAuthenLinkText).click();

        $(userNameSelector).waitForDisplayed(MAX_WAIT_TIME);
        $(userNameSelector).setValue("dang chau");
        $(passwordSelector).setValue("123");

        $(loginButton).click();

        browser.pause(3000);
    });
});