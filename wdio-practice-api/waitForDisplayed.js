describe('Session 10', () => {

    let loginUrl = "https://the-internet.herokuapp.com/login";
    let userNameSelector = '#username';
    let passwordSelector = '#password';

    it('wait for display', () => {
        browser.url(loginUrl);

        $(userNameSelector).waitForDisplayed(5000);

        $(userNameSelector).setValue("dang chau");
        $(passwordSelector).setValue("123");

        browser.pause(3000);
    });
});