// change when run multiple times
const randomCode = Math.floor((Math.random() * 1000000) + 1).toString()
const code = randomCode
const sku = randomCode
const contentBoxes = randomCode
const $myAdmin = `admin${randomCode}@shopizer.com`
const categName = `testNameBag${randomCode}`

module.exports = (page, path, delay) => {

    const waitOn = e => page.waitForSelector(e, {timeout: 2000})
    const goto = path => page.goto(path)
    const click = e => page.click(e)
    const type = (e, input) => page.type(e, input, {delay})
    const select = (e, val) => page.select(e, val)
    const press0 = e => page.$$eval(e, btn => btn[0].click())
    const press1 = e => page.$$eval(e, btn => btn[1].click())
    const press2 = e => page.$$eval(e, btn => btn[2].click())
    const press3 = e => page.$$eval(e, btn => btn[3].click())
    const press4 = e => page.$$eval(e, btn => btn[4].click())
    const press5 = e => page.$$eval(e, btn => btn[5].click())
    const press6 = e => page.$$eval(e, btn => btn[6].click())
    const press7 = e => page.$$eval(e, btn => btn[7].click())
    const press8 = e => page.$$eval(e, btn => btn[8].click())
    const press9 = e => page.$$eval(e, btn => btn[9].click())
    
    const get = e => page.$(e)
    // const onInput = (e, val) => page.$eval(e, input => input.value = val)
    const touch = e => page.$eval(e, btn => btn.click())

    const catalogueFeaturedController = () => goto(path + 'admin/catalogue/featured/list.html')

    const loginController = async () => {
        const $username = 'admin@shopizer.com'
        const $password = 'password'

        await goto(path + 'admin/denied.html')
        await waitOn('input[name="username"]')


        await goto(path + 'admin/unauthorized.html')
        

        await goto(path + 'admin/logon.html')
        await waitOn('input[name="username"]')
        await type('input[name="username"]', $username)
        await type('input[name="password"]', $password)
        await click('a[class="btn"]')

        await waitOn('li[class="dropdown"]')
                
    }

    const categoryControllerTest = async () => {
        await goto(path + 'admin/categories/createCategory.html')
        await waitOn('button[type="submit"]')
        await type('input[name="category.code"]', code)
        await type('input[name="descriptions[0].name"]', categName)
        await type('input[name="descriptions[1].name"]', categName)
        await click('button[type="submit"]')
        await goto(path + 'admin/categories/categories.html')

        // await press3('img[src$="/remove.png"]')
        // page.on('dialog', async dialog => await dialog.accept())

        await goto(path + 'admin/configuration/accounts.html')
        await waitOn('button[type="submit"]')
        await click('button[type="submit"]')
        await goto(path + 'admin/configuration/email.html')
        await waitOn('button[type="submit"]')
        await click('button[type="submit"]')
        await goto(path + 'admin/configuration/system.html')
        await waitOn('button[type="submit"]')
        await click('button[type="submit"]')
        await waitOn('button[type="submit"]')

    }

    const contentBoxesTest = async () => {
        await goto(path + 'admin/content/pages/create.html')
        await waitOn('button[type="submit"]')
        await type('input[name="code"]', contentBoxes)
        await type('input[name="descriptions[0].name"]', contentBoxes)
        await type('input[name="descriptions[1].name"]', contentBoxes)
        await click('button[type="submit"]')
        await goto(path + 'admin/content/pages/list.html')
        await waitOn('td[class="buttonTitle"]')
        await click('td[class="buttonTitle"]')
        await waitOn('button[type="submit"]')
        await click('button[type="submit"]')


        await goto(path + 'admin/content/boxes/list.html')
        await waitOn('td[class="buttonTitle"]')
        await click('td[class="buttonTitle"]')
        await waitOn('button[type="submit"]')
        await click('button[type="submit"]')


        await goto(path + 'admin/content/boxes/create.html')
        await waitOn('button[type="submit"]')
        await type('input[name="code"]', `${code}12`)
        await type('input[name="descriptions[0].name"]', 'testContent')
        await type('input[name="descriptions[1].name"]', 'testContent')

        await click('button[type="submit"]')

        await goto(path + 'admin/content/contentImages.html')
        await waitOn('button[type="submit"]')
        await click('button[type="submit"]')

        await goto(path + 'admin/content/static/contentFiles.html')
        await waitOn('button[type="submit"]')
        await click('button[type="submit"]')

        // await waitOn('button[type="submit"]')
        // await click('img[src$="/remove.png"]')
        // page.on('dialog', async dialog => await dialog.accept())

    }

    const storeController = async () => {
        const sampleName = 'test'
        const samplePhone = '1234567890'
        const sampleAddress = 'sample@shopizer.com'
        const sampleCity = 'Lisbon'
        const samplePostCode = '7890'

        await goto(path + 'admin/store/store.html')
        await waitOn('button[type="submit"]')
        await click('button[type="submit"]')

        await goto(path + 'admin/store/storeCreate.html')
        await type('input[name="storename"]', sampleName)
        await type('input[name="code"]', code)
        await type('input[name="storephone"]', samplePhone)
        await type('input[name="storeEmailAddress"]', sampleAddress)
        await type('input[name="storecity"]', sampleCity)
        await type('input[name="storepostalcode"]', samplePostCode)
        await type ('input[name="domainName"]', "localhost:8080/sample")
        // await onInput('input[name="domainName"]', "localhost:8080/sample")
        await click('button[type="submit"]')

        await goto(path + 'admin/store/list.html')
        await waitOn('td[class="buttonTitle"]')
        await click('td[class="buttonTitle"]')
        await waitOn('button[type="submit"]')
        await click('button[type="submit"]')

        await goto(path + 'admin/store/storeBranding.html')
        await waitOn('button[type="submit"]')
        await press0('button[type="submit"]')
        await goto(path + 'admin/store/storeBranding.html')
        await waitOn('button[type="submit"]')
        await press1('button[type="submit"]')

        await goto(path + 'admin/store/storeLanding.html')
        // await page.evaluate( () => document.getElementById("title0").value = "")
        await type('input[id="title0"]', 'SAMPLE_HEADING')
        await click('button[type="submit"]')

    }

    const userControllersTest = async () => {
        const $password = 'password'

        await goto(path + 'admin/users/password.html')
        await waitOn('input[name="password"]')
        await type('input[name="password"]', $password)
        await type('input[name="newPassword"]', $password)
        await type('input[name="repeatPassword"]', $password)
        await click('button[type="submit"]')

        await goto(path + 'admin/users/createUser.html')
        await waitOn('input[name="adminName"]')
        await type('input[name="adminName"]', $myAdmin)
        await type('input[name="adminEmail"]', $myAdmin)
        await type('input[name="adminPassword"]', $password)
        await type('input[name="adminPassword"]', $password)
        await select('select[name="question1"]', 'Who was your childhood hero? ')
        await select('select[name="question2"]', 'In what city were you born?')
        await select('select[name="question3"]', 'What is your preferred musical genre?')
        await type('input[name="answer1"]', 'blue')
        await type('input[name="answer2"]', 'blue')
        await type('input[name="answer3"]', 'blue')
        await click('button[type="submit"]')

        await goto(path + 'admin/users/displayUser.html')
        await waitOn('li[class="dropdown"]')

        await goto(path + 'admin/users/list.html')
        await waitOn('li[class="dropdown"]')

        await goto(path + 'admin/customers/list.html')
        await waitOn('td[class="buttonTitle"]')
        await click('td[class="buttonTitle"]')
        await waitOn('button[type="submit"]')
        
        await click('button[type="submit"]')

        // await goto(path + 'admin/tax/taxclass/list.html')
        // await waitOn('td[class="buttonTitle"]')
        // await click('img[src$="/remove.png"]')
        // page.on('dialog', async dialog => await dialog.accept())
    }

    const groupControllersTest = async () => {
        await goto(path + 'admin/groups/new.html')
        await waitOn('input[name="group.groupName"]')
        await type('input[name="group.groupName"]', 'test1')
        await click('button[type="submit"]')

        await goto(path + 'admin/user/groups.html')

        // while (await page.$('tr > .tallCellSelectedOverDark:nth-child(6) > div > nobr > img') !== null) 
        //     await click('tr > .tallCellSelectedOverDark:nth-child(6) > div > nobr > img')
        // await page.on('dialog', async dialog => {
        //     await dialog.accept();
        // })
    }

    const paymentController = async () => {
        await goto(path + 'admin/payments/paymentMethods.html')
        await waitOn('form[id="configuration"]')
        await click('a[href="/admin/payments/paymentMethod.html?code=moneyorder"]')
        await waitOn('input[id="active1"]')
        await touch('input[id="active1"]')
        await touch('input[id="defaultSelected1"]')
        await type('textarea', 'sample')
        await click('button[type="submit"]')
        // await waitOn('button[type="submit"]')
        // if(await get('.sm-ui-component > #code > .form-actions > .pull-right > .btn-danger') !== null) {
        //     await click('.sm-ui-component > #code > .form-actions > .pull-right > .btn-danger')
        // }
        await goto(path + 'admin/payments/paymentMethods.html')
        await waitOn('form[id="configuration"]')
        await click('a[href="/admin/payments/paymentMethod.html?code=moneyorder"]')
        await waitOn('input[id="active1"]')
        await touch('input[id="active1"]')
        await type('textarea', 'sample')
        await click('button[type="submit"]')  
    }

    const taxController = async () => {
        //have to change tax code
        const taxRate = 'testTaxRate912345'


        await goto(path + 'admin/tax/taxconfiguration/edit.html')
        await waitOn('button[type="submit"]')
        await click('button[type="submit"]')

        await goto(path + 'admin/tax/taxclass/list.html')
        await waitOn('button[type="submit"]')
        await type('input[name="code"]', '2')
        await type('input[name="title"]', 'taxTest')
        await click('button[type="submit"]')
        await waitOn('td[class="buttonTitle"]')
        await click('td[class="buttonTitle"]')
        await waitOn('button[type="submit"]')
        await click('button[type="submit"]')
        // await goto(path + 'admin/tax/taxclass/list.html')
        // await waitOn('td[class="buttonTitle"]')
        // await click('img[src$="/remove.png"]')
        // page.on('dialog', async dialog => await dialog.accept())


        await goto(path + 'admin/tax/taxrates/list.html')
        await waitOn('button[type="submit"]')
        await type('input[name="descriptions[0].name"]', taxRate)
        await type('input[name="descriptions[1].name"]', taxRate)
        await type('input[name="code"]', code)
        await type('input[name="rateText"]', '122')
        await click('button[type="submit"]')
        await waitOn('td[class="buttonTitle"]')
        await click('td[class="buttonTitle"]')
        await waitOn('button[type="submit"]')
        await click('button[type="submit"]')
        // await goto(path + 'admin/tax/taxclass/list.html')

        // await waitOn('td[class="buttonTitle"]')
        // await click('img[src$="/remove.png"]')
        // page.on('dialog', async dialog => await dialog.accept())

        
    }

    const customerController = async () => {
        const fName = 'tomsayo'
        const lName = 'tester'
        const address = 'asdfghj'
        const city = 'Lisbon'
        const Pcode = '1231245'
        const email = 'tom@shopizer.com'
        const tPhone = '12345678'

        await goto(path + 'admin/customers/customer.html')
        await waitOn('button[type="submit"]')

        await type('input[name="billing.firstName"]', fName)
        await type('input[name="billing.lastName"]', lName)
        await type('input[name="billing.address"]', address)
        await type('input[name="billing.city"]', city)
        await type('input[name="billing.postalCode"]', Pcode)
        await type('input[name="emailAddress"]', email)
        await type('input[name="billing.telephone"]', tPhone)

        await click('button[type="submit"]')

        await goto(path + 'admin/customers/list.html')
        await waitOn('td[class="buttonTitle"]')
        await click('td[class="buttonTitle"]')
        await waitOn('button[type="submit"]')
        
        await click('button[type="submit"]')

        await waitOn('button[class="btn btn-info dropdown-toggle"]')
        await click('button[class="btn btn-info dropdown-toggle"]')

        await waitOn('a[href="#resetPassword"]')
        await click('a[href="#resetPassword"]')

        await waitOn('button[class="btn btn-primary"]')
        await click('button[class="btn btn-primary"]')

        await goto(path + 'admin/customers/list.html')
        await waitOn('td[class="buttonTitle"]')
        await click('td[class="buttonTitle"]')
        await waitOn('button[type="submit"]')
        // await click('button[type="submit"]')

        await waitOn('button[type="submit"]')
        await click('button[class="btn btn-info dropdown-toggle"]')
        await waitOn('a[href="#setCredentials"]')
        await click('a[href="#setCredentials"]')
        await waitOn('button[class="btn btn-primary"]')
        await type('input[name="crUserName"]', '123')
        await type('input[name="crPassworde"]', '123')

        await waitOn('.span9 > #credentialsModal > #crConfirmationInnerBox > .modal-footer > .btn-primary')
        await click('.span9 > #credentialsModal > #crConfirmationInnerBox > .modal-footer > .btn-primary')
        
    }

    const customerOptionController = async () => {
        const name = 'tester'

        await goto(path + 'admin/customers/options/create.html')
        await waitOn('button[type="submit"]')
        await type('input[name="code"]', code)
        await type('input[name="descriptionsList[0].name"]', name)
        await type('input[name="descriptionsList[1].name"]', name)
        await click('button[type="submit"]')

        await goto(path + 'admin/customers/options/list.html')
        await waitOn('td[class="buttonTitle"]')
        await click('td[class="buttonTitle"]')
        await waitOn('button[type="submit"]')
        await click('button[type="submit"]')
        // await goto(path + 'admin/customers/options/list.html')

        // await waitOn('td[class="buttonTitle"]')
        // await click('img[src$="/remove.png"]')
        // page.on('dialog', async dialog => await dialog.accept())

        
    }

    const customerOptionValueController = async () => {
        const name = 'tester'

        await goto(path + 'admin/customers/options/values/create.html')
        await waitOn('button[type="submit"]')
        await type('input[name="code"]', code)
        await type('input[name="descriptionsList[0].name"]', name)
        await type('input[name="descriptionsList[1].name"]', name)
        await click('button[type="submit"]')
        await goto(path + 'admin/customers/options/values/list.html')
        // await waitOn('td[class="buttonTitle"]')
        // await click('td[class="buttonTitle"]')
        // await waitOn('button[type="submit"]')
        // await click('button[type="submit"]')

        // await goto(path + 'admin/customers/options/values/list.html')
        // await waitOn('td[class="buttonTitle"]')
        // await click('img[src$="/remove.png"]')
        // page.on('dialog', async dialog => await dialog.accept())
    }

    const customerOptionSetController = async () => {
        await goto(path + 'admin/customers/optionsset/list.html')
        await click('button[type="submit"]')
    }

    const orderController = async () => {
        await goto(path + 'admin/orders/list.html')
        await waitOn('td[class="buttonTitle"]')
        await click('td[class="buttonTitle"]')
                await waitOn('button[type="submit"]')
        await click('button[type="submit"]')
    }

    const productGroupController = async () => {

        await goto(path + 'admin/products/groups/list.html')
        await waitOn('button[type="submit"]')
        await type('input[name="code"]', code)
        await click('button[type="submit"]')
        await waitOn('td[class="buttonTitle"]')
        await click('td[class="buttonTitle"]')

        // await goto(path + 'admin/products/groups/list.html')
        // await waitOn('td[class="buttonTitle"]')
        // await click('img[src$="/remove.png"]')
        // page.on('dialog', async dialog => await dialog.dismiss())
    }

    const manufacturedController = async () => {
        //change code all the time
        const name = 'sample'

        await goto(path + 'admin/catalogue/manufacturer/create.html')
        await waitOn('button[type="submit"]')
        await type('input[name="code"]', code)
        await type('input[name="descriptions[0].name"]', name)
        await type('input[name="descriptions[1].name"]', name)
        await click('button[type="submit"]')

        await goto(path + 'admin/catalogue/manufacturer/list.html')
        await waitOn('td[class="buttonTitle"]')
        await click('td[class="buttonTitle"]')
        // await type('input[name="descriptions[1].name"]', 'sample')
        await waitOn('button[type="submit"]')
        await click('button[type="submit"]')

    } 

    const optionController = async () => {
        const name = 'sampleOption'

        await goto(path + 'admin/options/createOption.html')
        await type('input[name="code"]', code)
        await type('input[name="descriptionsList[0].name"]', name)
        await type('input[name="descriptionsList[1].name"]', name)

        await click('button[type="submit"]')

        await goto(path + 'admin/options/options.html')
        await waitOn('td[class="buttonTitle"]')
        await click('td[class="buttonTitle"]')
        await waitOn('button[type="submit"]')
        await type('input[name="code"]', code)
        await click('button[type="submit"]')

        // await goto(path + 'admin/options/options.html')
        // await waitOn('td[class="buttonTitle"]')
        // await click('img[src$="/remove.png"]')

        // page.on('dialog', async dialog => await dialog.accept())
    }

    const optionValueController = async () => {
        const name = 'sampleValueOption'

        await goto(path + 'admin/options/createOptionValue.html')
        await type('input[name="code"]', code)
        await type('input[name="descriptionsList[0].name"]', name)
        await type('input[name="descriptionsList[1].name"]', name)
        await click('button[type="submit"]')

        await goto(path + 'admin/options/optionvalues.html')
        await waitOn('td[class="buttonTitle"]')
        await click('td[class="buttonTitle"]')
        await waitOn('button[type="submit"]')
        await type('input[name="code"]', `${code}12`)
        await click('button[type="submit"]')

        // await goto(path + 'admin/options/optionvalues.html')
        // await waitOn('td[class="buttonTitle"]')
        // await click('img[src$="/remove.png"]')
        // page.on('dialog', async dialog => await dialog.accept())
    }

    const productController = async () => {
        await goto(path + 'admin/products/products.html')
        await waitOn('footer')

        //change sku every time
        const name = 'sampleProductName'
        const price = '12'

        await goto(path + 'admin/products/createProduct.html')
        await type('input[name="product.sku"]', sku)
        await type('input[name="descriptions[0].name"]', name)
        await type('input[name="descriptions[1].name"]', name)
        await click('button[type="submit"]')

        await waitOn('button[type="submit"]')
        await click('button[class="btn btn-info dropdown-toggle"]')
        

        await press0('.btn-group > .dropdown-menu > li > a')
        await waitOn('button[type="submit"]')
        await click('button[type="submit"]')

        //productPriceController
        await waitOn('button[type="submit"]')
        await click('button[class="btn btn-info dropdown-toggle"]')
        await press1('.btn-group > .dropdown-menu > li > a')
        await waitOn('td[class="buttonTitle"]')
        await click('td[class="buttonTitle"]')
        await waitOn('button[type="submit"]')
        await click('button[type="submit"]')

    

        await waitOn('button[class="btn btn-info dropdown-toggle"]')
        await click('button[class="btn btn-info dropdown-toggle"]')
        await press1('.btn-group > .dropdown-menu > li > a')
        // await waitOn('.tabbable > .tab-content > #catalogue-section > .sm-ui-component > a')
        while (await get('.tabbable > .tab-content > #catalogue-section > .sm-ui-component > a') !== null) 
            await click('.tabbable > .tab-content > #catalogue-section > .sm-ui-component > a')


        await waitOn('input[name="priceText"]')
        await type('input[name="priceText"]', price)
        await waitOn('input[name="descriptions[0].name"]')
        await type('input[name="descriptions[0].name"]', price)
        await waitOn('input[name="descriptions[1].name"]')
        await type('input[name="descriptions[1].name"]', price)

        await click('button[type="submit"]')
        //productAttributeController
        await waitOn('button[type="submit"]')
        await click('button[class="btn btn-info dropdown-toggle"]')
        await press2('.btn-group > .dropdown-menu > li > a')
        await waitOn('button[class="btn btn-info dropdown-toggle"]')
        while (await get('.tabbable > .tab-content > #catalogue-section > .sm-ui-component > a') !== null) 
            await click('.tabbable > .tab-content > #catalogue-section > .sm-ui-component > a')

        await waitOn('button[type="submit"]')
        
        await waitOn('.sm-ui-component > #attribute > #attributeValueText #name1')
        await type('input[id="name1"]', 'sample')

        await waitOn('.sm-ui-component > #attribute > #attributeValueText #name0')
        await type('input[id="name0"]', 'sample')
        

        await waitOn('button[type="submit"]')
        await click('button[type="submit"]')

        await waitOn('button[type="submit"]')
        await click('button[class="btn btn-info dropdown-toggle"]')
        await press2('.btn-group > .dropdown-menu > li > a')    
        await waitOn('td[class="buttonTitle"]')
        await click('td[class="buttonTitle"]')
        await waitOn('button[type="submit"]')
        await click('button[type="submit"]')


        //product images
        await waitOn('button[type="submit"]')
        await click('button[class="btn btn-info dropdown-toggle"]')
        await press3('.btn-group > .dropdown-menu > li > a')
        await waitOn('button[type="submit"]')
        await click('button[type="submit"]')

        //product images ext url
        await waitOn('button[type="submit"]')
        await click('button[class="btn btn-info dropdown-toggle"]')
        await press4('.btn-group > .dropdown-menu > li > a')
        await waitOn('button[type="submit"]')
        await click('button[type="submit"]')

        //customer review
        await waitOn('footer p')
        await click('button[class="btn btn-info dropdown-toggle"]')
        await press5('.btn-group > .dropdown-menu > li > a')

        //relates items
        await waitOn('footer p')
        await click('button[class="btn btn-info dropdown-toggle"]')
        await press6('.btn-group > .dropdown-menu > li > a')

        // search keywords
        await waitOn('footer p')
        await click('button[class="btn btn-info dropdown-toggle"]')
        await press7('.btn-group > .dropdown-menu > li > a')
        await waitOn('button[type="submit"]')
        await click('button[type="submit"]')

        //digital product
        await waitOn('footer p')
        await click('button[class="btn btn-info dropdown-toggle"]')
        await press8('.btn-group > .dropdown-menu > li > a')
        await waitOn('button[type="submit"]')
        await click('button[type="submit"]')

        //associate categories
        await waitOn('footer p')
        await click('button[class="btn btn-info dropdown-toggle"]')
        await press9('.btn-group > .dropdown-menu > li > a')
        await waitOn('button[type="submit"]')
        await click('button[type="submit"]')
    }

    const customShippingController = async () => {
        const region = 'as'
        const name = 'sampleProductName'
        const weight = '12'
        const price = '12'

        await goto(path + 'admin/shipping/weightBased.html')
        // await waitOn('button[type="submit"]')
        // await press0('button[type="submit"]')


        // await goto(path + 'admin/shipping/weightBased.html')
        // await waitOn('button[type="submit"]')


        await waitOn('button[type="submit"]')
        await type('input[name="region"]', region)
        await press1('button[type="submit"]')

        await waitOn('button[type="submit"]')
        await press2('button[type="submit"]')
        await waitOn('button[type="submit"]')
        await press3('button[type="submit"]')

        await waitOn('button[type="submit"]')
        await type('input[name="maximumWeight"]', weight)
        await type('input[name="priceText"]', price)
        await press0('button[type="submit"]')
        await waitOn('button[type="submit"]')
        await press1('button[type="submit"]')


        await goto(path + 'admin/shipping/weightBased.html')
        await waitOn('button[type="submit"]')
        await click('input[id="active1"]')
        await press0('button[type="submit"]')

        // if(await get('.sm-ui-component > #code > .form-actions > .pull-right > .btn-danger') !== null) {
        //     await click('.sm-ui-component > #code > .form-actions > .pull-right > .btn-danger')
        // }
    }

    const shippingConfiguration = async () => {
        await goto(path + 'admin/shipping/shippingConfigs.html')
        await waitOn('button[type="submit"]')
        await click('button[type="submit"]')
    }

    const shippingMethodController = async () => {
        //make sure to enable storepickup method

        await goto(path + 'admin/shipping/shippingMethods.html')
        await waitOn('a[href="/admin/shipping/weightBased.html"]')
        await click('a[href="/admin/shipping/weightBased.html"]')

        await goto(path + 'admin/shipping/shippingMethods.html')
        await waitOn('a[href="/admin/shipping/weightBased.html"]')
        await click('a[href="/admin/shipping/shippingMethod.html?code=storePickUp"]')
        await waitOn('.sm-ui-component > #configuration #active1')
        await click('.sm-ui-component > #configuration #active1')

        await waitOn('input[id="integrationKeys\'price\'"]')
        await type('input[id="integrationKeys\'price\'"]', '0')

        await click('button[type="submit"]')

        await waitOn('button[type="submit"]')

        if(await get('.sm-ui-component > #code > .form-actions > .pull-right > .btn-danger') !== null) {
            await click('.sm-ui-component > #code > .form-actions > .pull-right > .btn-danger')
        }

        await goto(path + 'admin/shipping/shippingMethods.html')
        await waitOn('a[href="/admin/shipping/weightBased.html"]')
        await click('a[href="/admin/shipping/shippingMethod.html?code=storePickUp"]')
        await waitOn('.sm-ui-component > #configuration #active1')
        await click('.sm-ui-component > #configuration #active1')

        await waitOn('input[id="integrationKeys\'price\'"]')
        await type('input[id="integrationKeys\'price\'"]', '0')

        await click('button[type="submit"]')
    }

    const shippingOptionController = async () => {
        await goto(path + 'admin/shipping/shippingOptions.html')
        await waitOn('button[type="submit"]')
        await click('button[type="submit"]') 
    }

    const shippingOriginController = async () => {
        const sampleAdrress = 'sampleAd'
        const sampleCity = 'sampleCit'
        const codePost = 'd111 ee'

        await goto(path + 'admin/shipping/origin/get.html')

        // await page.evaluate( () => document.getElementById("address").value = "")
        await type('input[id="address"]', sampleAdrress)
        // await page.evaluate( () => document.getElementById("city").value = "")
        await type('input[id="city"]', sampleCity)
        // await page.evaluate( () => document.getElementById("postalCode").value = "")
        await type('input[id="postalCode"]', codePost)
        
        await waitOn('button[type="submit"]')
        await click('button[type="submit"]')
    }

    const shippingPackagingController = async () => {
        await goto(path + 'admin/shipping/shippingPackaging.html')
        await waitOn('button[type="submit"]')
        await click('button[type="submit"]')    
    }

    const securityController = async () => {
        await goto(path + 'admin/user/permissions.html')
        await goto(path + 'admin/user/groups.html')
    }

    return [
        loginController, categoryControllerTest, contentBoxesTest, storeController,
        userControllersTest, groupControllersTest, paymentController, taxController,
        customShippingController, customerController, customerOptionController,
        customerOptionValueController, customerOptionSetController, orderController,
        productGroupController, catalogueFeaturedController, manufacturedController,
        optionController, optionValueController, productController, shippingConfiguration,
        shippingMethodController, shippingOptionController, shippingOriginController,
        shippingPackagingController, securityController
    ]
}
