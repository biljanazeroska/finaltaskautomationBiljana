import { Given, When, Then } from '@wdio/cucumber-framework';
import productsPage from '../page-objects/products.page.js';
import productPage from '../page-objects/product.page';
import ShoppingCart from '../page-objects/shopping.cart.page.js';

When('I click on the product', async function(){
    await productsPage.firstProductPhoto.click();
});

When('I select size and color', async function(){
    const sizeElement = await productPage.sizeButton;
    await sizeElement.click();
    this.sizeText = await sizeElement.getTimeouts();

    const colorElement = await productPage.firstColorButton;
    await colorElement.click();
    this.color = await colorElement.getAttribute('option-label');
    // await productPage.sizeButton.click();
    // await productPage.colorButton.click();
});

When('I click on Add to cart button', async function(){
    await productPage.addToCartButton.click();
});

When('I click on the Proceed to checkout button', async function(){
    await productPage.proceedToCheckoutButton.click();
});

When('A correct order information is displayed in "SHOPPING-CART SUMMARY"', async function(){
    await expect(ShoppingCart.productImg)
    .toHaveText(expect.stringContaining(this.productImg))
//     await expect(orderPage.pageTitle)
//     .toHaveText(expect.stringContaining(this.orderNumber));

// await expect(orderPage.firstProductName)
//     .toHaveText(this.productTitle);

// await expect(orderPage.firstProductPrice)
//     .toHaveText(this.productPrice);

// await expect(orderPage.firstProductQty)
//     .toHaveText("1");

// await expect(orderPage.firstProductSubtotal)
//     .toHaveText(this.productPrice);

// await expect(orderPage.subtotal)
//     .toHaveText(this.productPrice);

// await expect(orderPage.shippingPrice)
//     .toHaveText(this.shippingPrice);

// const expectedGrandTotal = 
//     priceStringToNumber(await orderPage.subtotal.getText()) +
//     priceStringToNumber(await orderPage.shippingPrice.getText());

// await expect(orderPage.grandTotal)
//     .toHaveText(`$${expectedGrandTotal.toFixed(2)}`);
// });

});

When('I click on the last Proceed to checkout button', async function(){
await productPage.lastProceedToCheckoutButton.click();
});