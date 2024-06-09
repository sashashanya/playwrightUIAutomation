import {test as it} from 'playwright/test'
import { DatePicker } from '../../page_object/demoQA/widgets/DatePicker'

it.describe('DATE PICKER DEMOQA', () => {
    it('working with date picker demo qa',async  ({page}) => {
        let datePicker = new DatePicker(page)
        await page.goto('https://demoqa.com/date-picker')
        await datePicker.verifyHeader()
    });
    
});