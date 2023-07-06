export default class Page {

    public open(path: string) {
        return browser.url(`https://inhouse.decemberlabs.com/${path}`)
    }

}
