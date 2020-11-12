var pageObject = {}
let homewizardArray = require('../testAssets/homeloantestAssets')

module.exports = {
    beforeEach: browser => {
        pageObject = browser.page.opklesson12()
        pageObject
            .navigate()
            .maximizeWindow()
    },
    after: browser => {
        browser
             .end()

     },
    'Testing Homeloan Pages 1 & 3' : browser => {
        //Utilizing For Each Method on the Loan and Property Dropdowns, and Third Page
            homewizardArray.forEach(optionchosen => {
                pageObject.testloop(optionchosen)
        })
    
    }
} 