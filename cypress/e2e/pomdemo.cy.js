import { LoginPage}  from "./pages/loginpage"
const loginpage = new LoginPage()

describe('ALL login tests', function(){
    this.beforeEach(function(){
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    })

    //it.only('login test1', function()  {
    it('login test1', function()  {

    
        loginpage.enterUsername('Admin')
        loginpage.enterPassword('admin123')
        loginpage.clickLogin()
        
        cy.get(':nth-child(1) > .oxd-main-menu-item').click()
    })
    
    it('login test2', function()  {
    
    
        loginpage.enterUsername('Admin222')
        loginpage.enterPassword('admin123')
        loginpage.clickLogin()
    
        cy.get(':nth-child(1) > .oxd-main-menu-item').click()
    
    
    })
    

})

