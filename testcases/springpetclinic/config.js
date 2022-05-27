const path = 'http://127.0.0.1:8080/'
const delay = 0

const printTime = () => {
    const time = new Date()
    return `${time.getDate()}/${time.getMonth()+1}/${time.getFullYear()} - ${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`
}

const runTests = (tests, out) => {
    if(!out) out = {passed: 0, failed: 0, start: Date.now() }
    if(tests.length) {
        const func = tests.shift()
        return func().then(_ => {
            console.log(func.name + ' ✅', out.passed++)
            return runTests(tests, out)
        }).catch(_ => {
            console.log(func.name + ' ❌', out.failed++, _.toString().split('\n')[0])
            return runTests(tests, out)
        })
    } else {
        console.log('Total Runtime(ms):', Date.now() - out.start)
        console.log('Tests Complete', printTime())
        console.log(`Result: ${out.passed}/${out.passed + out.failed} passed`)
        return out
    }
}

const launch = () => require('puppeteer').launch({
    headless: !!process.argv[2],
    args: ['--start-fullsize','--no-sandbox']
})

module.exports = { runTests, launch, path, delay }
