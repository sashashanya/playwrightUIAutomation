import {test, expect} from '@playwright/test'

test. describe('POPUP WINDOW', () => {
    test('popUp window access',async ({page}) => {
        await page.goto('https://rahulshettyacademy.com/AutomationPractice/')
        page.on('dialog', el => el.accept())
        await page.locator('#confirmbtn').click()

    });
    test('popUp window dismiss',async ({page}) => {
        await page.goto('https://rahulshettyacademy.com/AutomationPractice/')
        page.on('dialog', el => el.dismiss())
        await page.locator('#confirmbtn').click()
    });
})    