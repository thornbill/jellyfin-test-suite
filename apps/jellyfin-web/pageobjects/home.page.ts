import Page from './page';

class HomePage extends Page {
    public get homeTab() {
        return $('#homeTab');
    }
}

export default new HomePage();
