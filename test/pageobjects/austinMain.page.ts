import Page from './page.js';

class AustinMainPage extends Page {

    path = '/locations/austin'
    title = 'Austin Web & App Developers | December Labs'

    public get austinOffice() {
        return $('a[href="/locations/austin"]');
    }

    public get scheduleFreeConsultationButton() {
        return $('(//a[text()="Schedule free consultation"])[1]')
    }

    public get modaltest() {
        return $("//span[text()='Please pick a time slot below.']")
    }

    public get closeModalButton() {
        return $("//div[@class='dl-modal calendar-modal open']//div[@class='btn-close-modal']")
    }

    public get calendarModal() {
        return $("//div[@class='dl-modal calendar-modal open']/div")
    }

    public async clickOnScheduleFreeConsultationButton() {
        await this.scheduleFreeConsultationButton.click();
    }
    
    public async closeScheduleFreeConsultationModal() {
        await this.closeModalButton.click();
        await (await this.closeModalButton).waitForDisplayed({ reverse: true });
    }

}

export default new AustinMainPage();
