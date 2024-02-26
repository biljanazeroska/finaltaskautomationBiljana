import { Page } from './page.js';
import { browser } from '@wdio/globals';

class ShoppingCart extends Page {
    get productImg() { return $('//*[@id="product_4_43_0_0"]/td[1]/a/img');}
    get productDescription() { return $('#product_4_43_0_0 > td.cart_description');}
    get productPrice() { return $('//*[@id="product_price_4_43_0"]/li');}
    get productQty() { return $('//*[@id="product_4_43_0_0"]/td[5]/input[1]');}
    get totalProducts() { return $('//*[@id="total_product"]');}
    get totalShipping() { return $('//*[@id="total_shipping"]');}
    get grandTotal() { return $('//*[@id="total_price_container"]');}
}

export default new ShoppingCart();