Feature: Checkout Process

    Scenario: Unregistered user checkout Flow
        Given I am on the home page
        When I select "Dresses => Evening dresses" menu items
        And I click on the product
        And I select size and color
        And I click on Add to cart button
        Then I see a message "Product successfully added to your shopping cart"
        And I click on the Proceed to checkout button
        And A correct order information is displayed in "SHOPPING-CART SUMMARY"
        And I click on the last Proceed to checkout button
    # Then I should be prompted to create an account