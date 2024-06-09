import {test} from '@playwright/test'
import { DragAndDrop } from '../../page_object/demoQA/interactions/Droppable';

test.describe('DROPPABLE', () => {
    test('droppable',async ({page}) => {
        let dragAndDrop = new DragAndDrop(page)
        await dragAndDrop.open()
        await dragAndDrop.dragAndDropToTheElement()
    });
});