import Texbox from '../POM-REFERENCES/texbox'
import Webtables from '../POM-REFERENCES/webtables'

describe('Texbox', function(){
    const texboxPage = new Texbox()

    it ('texbox', function(){
        cy.visit('//text-box')
        texboxPage.TexBox().type('test')
        texboxPage.TexboxEmail().type('test@test.com')
        texboxPage.TexboxCurrentAddress().type('this is a tes, because i need learn cypress.')
        texboxPage.TexboxPermanentAddress().type('test2')
        texboxPage.ButtonSubmit().click()
     })
    
})

describe('webtables', function(){
    const webtablespage = new Webtables()

    it.only ('webtables', function(){
        webtablespage.url();
        webtablespage.buttonAdd().click()
        webtablespage.firstName().type('test')
        webtablespage.lastName().type('test')
        webtablespage.userEmail().type('test@test.com')
        webtablespage.age().type('20')
        webtablespage.salary().type('220')
        webtablespage.department().type('QA')
        webtablespage.submitButton().click()
    })
})