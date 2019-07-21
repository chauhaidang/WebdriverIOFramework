describe('learning API', () => {

    const MAX_WAIT_TIME = 5000;

    let loginUrl = "https://the-internet.herokuapp.com/dropdown";
    let dropdownSelector = '#dropdown';
    let option1Text = 'Option 1';

    it('select by visible text', () => {
        browser.url(loginUrl);

        $(dropdownSelector).waitForDisplayed(MAX_WAIT_TIME);
        $(dropdownSelector).selectByVisibleText(option1Text);

        $(dropdownSelector).selectByAttribute('value', '2');

        browser.pause(3000);
    });
});