module.exports = (page, path, delay) => {
    const waitOn = e => page.waitForSelector(e, {timeout: 5000})
    const type = (e, input) => page.type(e, input, {delay})
    const click = e => page.click(e)
    const goto = path => page.goto(path)

    const findCustomer = async () => {
        await goto(path + '/owners/find')
    
        await waitOn('.container > #search-owner-form > .form-group > .col-sm-offset-2 > .btn')
        await click('.container > #search-owner-form > .form-group > .col-sm-offset-2 > .btn')
            
        await waitOn('#owners > tbody > tr:nth-child(1) > td > a')
        await click('#owners > tbody > tr:nth-child(1) > td > a')
    
    }

    const etc = async () => {
        await goto(path + '/vets.html')
        await waitOn('#vets > tbody > tr:nth-child(1) > td > span')
    
        await goto(path + '/oups')
        await goto(path)
    
    }

    const registerCustomerAndPet = async () => {
    
        await goto(path + '/owners/find')
        await waitOn('body > .container-fluid > .container > .btn')
        await click('body > .container-fluid > .container > .btn')
            
        await waitOn('.form-group #firstName')
        await type('input[name="firstName"]', 'tester1', {delay: 200})
        await type('input[name="lastName"]', 'tester', {delay: 200})
        await type('input[name="address"]', 'testAddress', {delay: 200})
        await type('input[name="city"]', 'testCity', {delay: 200})
        await type('input[name="telephone"]', '123456788', {delay: 200})
        
        await waitOn('.container > #add-owner-form > .form-group > .col-sm-offset-2 > .btn')
        await click('.container > #add-owner-form > .form-group > .col-sm-offset-2 > .btn')
    
        await waitOn('body > .container-fluid > .container > .btn:nth-child(3)')
        await click('body > .container-fluid > .container > .btn:nth-child(3)')
            
        await waitOn('.container > #add-owner-form > .form-group > .col-sm-offset-2 > .btn')
        await click('.container > #add-owner-form > .form-group > .col-sm-offset-2 > .btn')
    
    
        // add pet
        await waitOn('body > .container-fluid > .container > .btn:nth-child(4)')
        await click('body > .container-fluid > .container > .btn:nth-child(4)')
            
        await waitOn('.form-group #name')
        await type('input[name="name"]', 'bob', {delay: 200})
        
        await waitOn('.form-group #birthDate')
        await type('input[name="birthDate"]', '2019-05-21', {delay: 200})
        
        await waitOn('.container > .form-horizontal > .form-group > .col-sm-offset-2 > .btn')
        await click('.container > .form-horizontal > .form-group > .col-sm-offset-2 > .btn')
    
    
        // edit pet
        await waitOn('.table-condensed > tbody > tr > td:nth-child(1) > a')
        await click('.table-condensed > tbody > tr > td:nth-child(1) > a')
            
        await waitOn('.container > .form-horizontal > .form-group > .col-sm-offset-2 > .btn')
        await click('.container > .form-horizontal > .form-group > .col-sm-offset-2 > .btn')
    
        //add checkup
        await waitOn('.table-condensed > tbody > tr > td:nth-child(2) > a')
        await click('.table-condensed > tbody > tr > td:nth-child(2) > a')
            
        await waitOn('.form-group #description')
        await click('.form-group #description')
        await type('input[name="description"]', 'checkup', {delay: 200})
    
        await waitOn('.container > .form-horizontal > .form-group > .col-sm-offset-2 > .btn')
        await click('.container > .form-horizontal > .form-group > .col-sm-offset-2 > .btn')
         
    }


    return [registerCustomerAndPet, findCustomer, etc]
}
