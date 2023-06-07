import LoginPage from '../pageobjects/login.page'
import HomePage from '../pageobjects/home.page'

describe('Login Page', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open()
        await LoginPage.login('demo', '')

        await expect(HomePage.homeTab).toBeExisting();
    })

    it('should show an error with invalid credentials', async () => {
        await LoginPage.open();
        await LoginPage.login('invalid', '');

        await expect(LoginPage.toast).toBeExisting();
        await expect(LoginPage.toast).toHaveText('Invalid username or password. Please try again.')
    })
})


