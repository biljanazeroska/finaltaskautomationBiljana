import { Page } from './page.js';
import { browser } from '@wdio/globals';

class ProductPage extends Page {
    
    get sizeButton() { return $('#group_1 > option:nth-child(1)'); }
    get colorButton() { return $('#color_24'); }
    get addToCartButton() { return $('//span[contains(text(),"Add to cart")]'); }
    get addedToShppingCart() {return $('//*[@id="layer_cart"]/div[1]/div[1]/h2');}
    get proceedToCheckoutButton() { return $('//span [contains(text(),"Proceed to checkout")]');}
    get lastProceedToCheckoutButton() { return $('//*[@id="center_column"]/p[2]/a[1]/span');}

}

export default new ProductPage();