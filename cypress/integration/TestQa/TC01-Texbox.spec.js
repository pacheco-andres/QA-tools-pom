import Texbox from '../POM-REFERENCES/texbox'

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
     it ('Web Tables', function(){
         cy.visit('//webtables')
     })
})