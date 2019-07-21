describe('learning API', () => {
    it('Set value to a textbox', () => {
        browser.url("https://the-internet.herokuapp.com/login");
        browser.pause(3000);

        let usernameSelector = "#username_";
        $(usernameSelector).setValue("Dang Chau");

        browser.pause(3000);
    });
});