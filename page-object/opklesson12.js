module.exports = {
    url: "http://localhost:3000/#/",
    elements: {
        //List of Selectors In Seqeuntial Order
        nextButton: 'button[name="nextButton"]',
        //Page 2 Selectors
        homepurchaseLoan: 'select[id="loanTypes"] option[value = "Home Purchase"]',
        refinanceLoan: 'select[id="loanTypes"] option[value="Refinance"]',
        homeequityLoan: 'select[id="loanTypes"] option[value="Home Equity"]',
        singlefamilyProperty: 'select[id="propertyTypes"] option[value = "Single Family Home"]',
        townhomeProperty: 'select[id="propertyTypes"] option[value = "Town Home"]',
        condoProperty: 'select[id="propertyTypes"] option[value = "Condo"]',
        multifamilyProperty: 'select[id="propertyTypes"] option[value = "Multi Family Dwelling"]',
        mobilehomeProperty: 'select[id="propertyTypes"] option[value = "Mobile Home"]',
        
        //Page 3 Selectors
        citylocationSelector: 'input[name="city"]',
        page3nextButton: '.wTwo-btn',
        //Page 4 Selectors
        primaryhomeButton: 'button[value="Primary Home"]',
        rentalpropertyButton: 'button[value="Rental Property]',
        secondaryhomeButton: 'button[value="Secondary Home"]',
        //Page 5 Selectors
        foundnewhomeButton: 'button[name="yesButton"]',
        nofindnewhomeButton: 'button[name="noButton"]',
        //Page 6 Selectors
        workingwithrealestateButton: 'button[name="yesButton"]',
        notworkingwithrealestateButton: 'button[name="noButton"]',
        //Page 7 Selectors
        estimatedpurchasepriceField: 'input[name="price"]',
        downpaymentfield: 'input[name="down"]',
        //Page 8 Selectors
        excellentcreditButton: 'button[value="excellent"]',
        goodcreditButton: 'button[value="good"]',
        faircreditButton: 'button[value="fair"]',
        poorcreditButton: 'button[value="poor"]',
        //Page 9 Selectors
        nobankruptcyButton: 'button[value="Has never been in bankruptcy"]',
        bankruptcyButton: 'button[value="Has had bankruptcy before"]',
        foreclosureButton: 'button[value="Has had foreclosure before"]',
        forclosedbankruptButton: 'button[value="Has had both a foreclosure and a bankruptcy"]',
        //Page 10 Selectors
        streetaddressField: '#addressOne',
        streetaddresscontField: '#addressTwo',
        citystatezipField: '#addressThree',
        //Page 11 Selectors:
        firstnameinputField: '#first',
        lastnameinputField: '#last',
        emailinputField: '#email',
        //Page 12 Overview Selectors:
        nameresultOvrvw: 'p[class="name p2"]',
        typeofloanOvrvw: 'p[class="loanType p2"',
        propertytypeOvrvw: 'p[class="propertyType p2"]',
        citylocationOvrvw: 'p[class="city p2"]',
        typeofpropertyloanOvrvw: 'p[class="propertyPurpose p2]',
        foundnewhomeOvrvw: 'p[class="found p2"]',
        workingwithagentOvrvw: 'p[class="agent p2"]',
        estimatedpurchasepriceOvrvw: 'p[class="price p2]',
        downpaymentOvrvw: 'p[class="downPayment p2"]',
        creditscoreOvrvw: 'p[class="creditScore p2"]',
        bankruptcyhistoryOvrvw: 'p[class="creditHistory p2"]',
        currentaddressOvrvw: 'p[class="form"]',
        //Page 12 Buttons
        sendbuttonOvrvw: 'button[name="sendButton"]',
        startagainbuttonOvrvw: 'button[name="restartButton"]',
        //Page 13 Selectors
        confirmationpageVerify: 'body'
    }

}