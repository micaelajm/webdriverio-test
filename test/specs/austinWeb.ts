import DecemberLabsPage from '../pageobjects/decemberLabsPage.page.js'
import AustinWebPage from '../pageobjects/austinMain.page.js'

describe('December Labs tets', () => {
    it('Navigate to the Austin Office page through the December Labs page.', async () => {
        await browser.maximizeWindow()
        await DecemberLabsPage.open(); // Open December Labs page
        await expect(await browser.getTitle()).toContain(DecemberLabsPage.title); // Verify main page title
        await expect(DecemberLabsPage.mainMenu).toBePresent(); // Verify the main menu is present 
        await DecemberLabsPage.navigateToAustinOfficePage(); // Navigate to Austin Office page
        await expect(await browser.getTitle()).toContain(AustinWebPage.title); // Verify Austin Office page title
        await expect(await browser.getUrl()).toContain(AustinWebPage.path); // Verify Austin Office page URL
        await AustinWebPage.clickOnScheduleFreeConsultationButton(); // Click on Schedule Free Consultation
        expect(AustinWebPage.calendarModal).toBeDisplayed();
        await browser.saveScreenshot('./evidence/modalOpened.png');
        await AustinWebPage.closeScheduleFreeConsultationModal();
        await expect(await browser.getTitle()).toContain(AustinWebPage.title); // Verify Austin Office page title
        await expect(AustinWebPage.calendarModal).not.toBePresent(); // Verify the main menu is present 
        await browser.saveScreenshot('./evidence/screenshot.png');
    })
})
