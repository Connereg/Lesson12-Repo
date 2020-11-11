const valueMap = {
    "@homepurchaseLoan": "Home Purchase",
    "@refinanceLoan" : "Refinance",
    "@homeequityLoan" : "Home Equity",
    "@singlefamilyProperty" : "Single Family Home",
    "@townhomeProperty" : "Townhome",
    "@condoProperty" : "Condo",
    "@multifamilyProperty" : "Multi Family Dwelling",
    "@mobilehomeProperty" : "Mobile Home",
    "@primaryhomeButton" : "Primary Home",
    "@rentalpropertyButton" : "Rental Property",
    "@secondaryhomeButton" : "Secondary Home"
}


var flowTest = () => {
    const loan = ['@homepurchaseLoan', '@refinanceLoan', '@homeequityLoan'];
    const property = ['@singlefamilyProperty', '@townhomeProperty', '@condoProperty', '@multifamilyProperty', '@mobilehomeProperty'];
    const thirdPageSelectors = [
        '@primaryhomeButton',
        '@rentalpropertyButton',
        '@secondaryhomeButton']
    
    pageObject.click('@nextButton')

    loan.forEach(loanSelector => {
    property.forEach(propertySelector => {})
        .click(loanSelector)
        .click(propertySelector)
        .click('@nextButton')
        .click('@nextButton')
        thirdPageSelectors.forEach(propertyloanSelector => {})
            .click(propertyloanSelector)
            .click('@foundnewhomeButton')
            .click('@workingwithrealestateButton')
            .click('@nextButton')
            .click('@excellentcreditButton')
            .click('@nobankruptcyButton')
            .click('@nextButton')
            .click('@nextButton')
            .expect('@typeofloanOvrvw').to.equal(valueMap[loanSelector])
            pageObject
            .expect('@propertytypeOvrvw').to.equal(valueMap[propertySelector])
            pageObject
            .expect('@typeofpropertyloanOvrvw').to.equal(valueMap[propertyloanSelector])
            .click('@startagainbuttonOvrvw')       
   
})
var pageObject
module.exports = {
    beforeEach: browser => {
        pageObject = browser.page.opklesson12()
        pageObject
            .navigate()
            .maximizeWindow()
    },
    after: browser => {
        pageObject
             .end()

     },
    'Testing 1st Page' : browser => {
            flowTest()
        }
    }
}