let path = require('path');

describe('Learning API', () => {

    let pageUrl = "https://the-internet.herokuapp.com/upload";
    let chooseFileSelector = '#file-upload';
    let btnUploadFileSelector = '#file-submit';


    it('Upload', () => {
        browser.url(pageUrl);

        let fileToUploadRelativePath = path.join(__dirname, './toupload.txt');
        $(chooseFileSelector).waitForDisplayed(5000);
        $(chooseFileSelector).setValue(fileToUploadRelativePath);

        $(btnUploadFileSelector).click();
        browser.pause(3000);
    });
});