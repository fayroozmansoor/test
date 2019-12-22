describe('angularjs homepage todo list', function() {
  it('should add a todo', function() {

    browser.waitForAngularEnabled(false);

    browser.get('https://www.walmart.com/');


    var title = browser.getTitle();
    console.log(title);
    element(by.id('global-search-input')).sendKeys('bag');
    element(by.id('global-search-submit')).click();

element(by.xpath('//img[@alt="Great Value Double Zipper Sandwich Bags, 300 Count"]')).click();
element(by.xpath('//div[@class="display-inline-block l-margin-right QuantityPicker-select font-semibold field field--select field--secondary"]')).click();
element(by.xpath('//select[@placeholder="Qty:"]'));

element(by.xpath('//select[@aria-label="Quantity"]/option[text()="3"]')).click();
//element(by.xpath('//');
element(by.xpath('//button[@class="button spin-button prod-ProductCTA--primary button--primary"]')).click();
browser.pause();
   });
});
