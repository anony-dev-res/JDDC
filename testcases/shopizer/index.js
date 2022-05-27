const { runTests, launch, path, delay } = require('./config')
const adminTests = require('./admin')
const shopTests = require('./shop')

launch().then(async browser => {
    const page = await browser.newPage()
    await page.setViewport({width: 1920, height: 1080})
    await page.setDefaultNavigationTimeout(0)
    await page.setDefaultTimeout(0)
    await runTests(
        adminTests(page, path, delay)
        .concat(shopTests(page, path, delay))
    )
    return browser.close()
})
