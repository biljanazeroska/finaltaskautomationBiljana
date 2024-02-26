import { Given, When, Then } from '@wdio/cucumber-framework';
import productPage from '../page-objects/product.page';

Then ('I see a message {string}', async function(message){
    await expect(addedToShppingCart.textMessage(text)).toBeDisplayed();
});