import Page from './page.js';

class DecemberLabsPage extends Page {

    path = ''
    title = 'December Labs: UX/UI Design and Mobile App & Web Development'

    public get austinOffice() {
        return $('a[href="/locations/austin"]');
    }

    public get mainMenu() {
        return $('[id="menu-header-main-menu');
    }

    public async navigateToAustinOfficePage() {
        await this.austinOffice.scrollIntoView();
        await this.austinOffice.click();
    }

    public open() {
        return super.open(this.path);
    }
}

export default new DecemberLabsPage();
