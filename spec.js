describe('angularjs homepage todo list', function() {
  it('should add a todo', function() {

    browser.waitForAngularEnabled(false);

    browser.get('https://www.walmart.com/');


    var title = browser.getTitle();
    console.log(title);
    element(by.id('global-search-input')).sendKeys('bag')
    element(by.id('global-search-submit')).click()
//element(by.className("product-title-link")).click()
//element(by.css("img[src*='images/logo.png']"));
element(by.xpath('//img[@alt="Great Value Double Zipper Sandwich Bags, 300 Count"]')).click()
element(by.xpath('//div[@class="display-inline-block l-margin-right QuantityPicker-select font-semibold field field--select field--secondary"]')).click()
element(by.xpath('//select[@placeholder="Qty:"]'))

element(by.xpath('//select[@option="3"]/option[2]')).click()

element(by.xpath('//button[@class=class="button spin-button prod-ProductCTA--primary button--primary"]')).click

    browser.pause();  });

  });
