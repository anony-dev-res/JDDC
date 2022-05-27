//change everytime
const randomNum = Math.floor((Math.random() * 10000000) + 1).toString()
const emailAddress = `ik${randomNum}@shopizer.com`

module.exports = (page, path, delay) => {

    const waitOn = e => page.waitForSelector(e, {timeout: 2000})
    const goto = path => page.goto(path)
    const click = e => page.click(e)
    const type = (e, input) => page.type(e, input, {delay})
    const select = (e, val) => page.select(e, val)
    const press0 = e => page.$$eval(e, btn => btn[0].click())
    // const get = e => page.$(e)

    const landingController = () => goto(path)
    const errorController = () => goto(path + 'error')

    const categoryController = async () => {
        await waitOn('div[class="copyright-area"]')

        await goto(path + 'shop/category/handbags.html/ref=c:2')
        await waitOn('div[class="copyright-area"]')
    }

    const productController = async () => {

        await goto(path + 'shop/products')

        await goto(path + 'shop/category/handbags.html/')

        await waitOn('div[id="productsContainer"]')
        await goto(path + 'shop/product/vintage-courier-bag.html')

        // await press0('#productsContainer > div > div > a')
    }

    const contactContoller = async () => {
        const sampleInput= 'sample'
        const emailAddress = 'ik@shopizer.com'

        await goto(path + 'shop/store/contactus.html')
        await waitOn('input[name="name"]')
        await type('input[name="name"]', sampleInput)
        await type('input[name="email"]', emailAddress)
        await type('input[name="subject"]', sampleInput)
        await type('textarea[name="comment"]', sampleInput)

        // const frame_10181 = frames.find(f => f.url() === 'https://www.google.com/recaptcha/api2/anchor?ar=1&k=6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI&co=aHR0cDovL2xvY2FsaG9zdDo4MDgw&hl=en&v=-wV2EAWEOTlEtZh4vNQtn3H1&size=normal&cb=8fh8wvxjiwq')
        // await frame_10181.waitForSelector('.rc-inline-block > .rc-anchor-center-container > .rc-anchor-center-item > #recaptcha-anchor > .recaptcha-checkbox-border')
        // await frame_10181.click('.rc-inline-block > .rc-anchor-center-container > .rc-anchor-center-item > #recaptcha-anchor > .recaptcha-checkbox-border')
        
        await waitOn('.span6 > #contactForm #submitContact')
        await click('.span6 > #contactForm #submitContact')
        
    }

    const reviewController = async () => {
        await goto(path + 'shop/category/handbags.html/')

        await waitOn('div[id="productsContainer"]')
        await goto(path + 'shop/product/vintage-bag.html')
        await click('a[href="#reviews"]')

        await click('button[id="reviewButton"]')
        await waitOn('button[type="submit"]')

        await type('textarea[name="description"]', 'ok')
        await click('img[title="good"]')

        await click('button[type="submit"]')
        
    }

    const referenceController = async() => {
        await goto(path + 'shop/reference/monthsOfYear.html')
        await goto(path + 'shop/reference/creditCardDates.html')   
    }

    const searchController = async() => {
        await goto(path + 'shop')
        await waitOn('input[id="searchField"]')
        const searchInput = 'vintage bag'
        await type('input[id="searchField"]', searchInput)
        await click('input[type="submit"]')
    }

    const customerAccountController = async () => {
        const password = 'password'

        await goto(path + 'shop/customer/customLogon.html')
        await waitOn('input[name="signin_userName"]')
        await type('input[name="signin_userName"]', emailAddress)
        await type('input[name="signin_password"]', password)
        await click('button[type="submit"]')
        await goto(path + 'shop/customer/account.html')
        await editBillingAdrress()
        // await changePassword()
        // await orderListController()
    }

    const orderListController = async () => {
        // await goto(path + 'shop/customer/dashboard.html')
        await click('a[href="/shop/customer/orders.html"]')
        await press0('.table-striped > tbody > tr > td > a')
    }

    const changePassword = async () => {
        const password = 'password'
        await goto(path + 'shop/customer/dashboard.html')
        await click('a[href="/shop/customer/password.html"]')
        await waitOn('input[name="currentPassword"]')

        await type('input[name="currentPassword"]', password)
        await type('input[name="password"]', password)
        await type('input[name="checkPassword"]', password)
        await click('input[name="changePassword"]')
    }

    const editBillingAdrress = async () => {
                const stateProv = 'sample'
        await click('a[href="/shop/customer/billing.html"]')
        await waitOn('div[class="checkout-box"]')

        await press0('.checkout-box > span > p > a')
        
        await waitOn('input[name="submitAddress"]')
        await type('input[name="address"]', stateProv)
        await type('input[name="city"]', stateProv)
        await type('input[name="stateProvince"]', stateProv)
        await type('input[name="postalCode"]', stateProv)
        await type('input[name="phone"]', '123456')

        await click('input[name="submitAddress"]')
    }

    const shoppingController = async () => {
        await goto(path + 'shop/category/handbags.html/')

        await waitOn('div[id="productsContainer"]')
        await goto(path + 'shop/product/vintage-courier-bag.html')

        await waitOn('button[class="btn addToCart addToCartButton btn-buy"]')
        await click('button[class="btn addToCart addToCartButton btn-buy"]')

        

        await goto(path + 'shop/cart/shoppingCart.html')

        // await waitOn('table[id="mainCartTable"]')

        // await press0('.buttons-cart > a')

        // await waitOn('table[id="mainCartTable"]')

        //delete
        // await click('a[class="cart-close removeProductIcon"]')
    }

    const checkoutController = async () => {
        const stateProvince = 'sampleState'
        const name = 'qwer'
        const addr = 'sampleAddr'
        const number = '123456'

        await goto(path + 'shop/category/handbags.html')

        await waitOn('div[id="productsContainer"]')
        await goto(path + 'shop/product/vintage-courier-bag.html')

        await waitOn('button[class="btn addToCart addToCartButton btn-buy"]')
        await click('button[class="btn addToCart addToCartButton btn-buy"]')

                
        await goto(path + 'shop/cart/shoppingCart.html')

        // await waitOn('div[class="wc-proceed-to-checkout"]')
        
        // await click('a[href="/shop/order/checkout.html"]')

        
        // await waitOn('input[id="customer.firstName"]')

        // await select('select[id="customer.billing.country"]', 'AU')

        // await type('input[id="customer.firstName"]', name)
        // await type('input[id="customer.lastName"]', name)
        // await type('input[id="customer.billing.address"]', addr)
        // await type('input[id="customer.billing.city"]', addr)
        // await type('input[name="customer.billing.postalCode"]', number)
        // // await type('input[id="customer.emailAddress"]', emailAddress)
        // await type('input[id="customer.billing.phone"]', number)
        // await type('input[id="billingStateProvince"]', stateProvince)

        
        // await click('input[name="shipToDeliveryAddress"]')

        
        // await type('input[name="customer.delivery.firstName"]', name)
        // await type('input[name="customer.delivery.lastName"]', name)

        // await type('input[id="customer.delivery.address"]', addr)
        // await type('input[id="customer.delivery.city"]', addr)
        // await type('input[id="deliveryPostalCode"]', number)
        // await type('input[id="customer.delivery.company"]', addr)
        
        // // while (await get('button[id="submitOrder"]') !== null) {
        // await click('button[id="submitOrder"]')
        // // }

        // // await click('button[id="submitOrder"]')

        // // await waitOn('div[id="main-content"]')
    }

    const customerRegController = async () => {
        const fName = 'Sample'
        const lName = 'Test'
        const state = 'Seattle'
        const password = 'password'

        await goto(path + 'shop/customer/registration.html')

        await waitOn('button[type="submit"]')
        await type('input[name="billing.firstName"]', fName)
        await type('input[name="billing.lastName"]', lName)
        await type('input[name="billing.stateProvince"]', state)
        await type('input[name="emailAddress"]', emailAddress)
        await type('input[name="password"]', password)
        await type('input[name="checkPassword"]', password)

        await click('button[type="submit"]')
    }
    return [
        landingController, customerRegController, checkoutController,
        customerAccountController, reviewController, productController,
        referenceController, errorController, shoppingController,
        searchController, categoryController, // contactContoller //captcha
    ]
}
