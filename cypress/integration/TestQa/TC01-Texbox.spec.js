import References from '../POM-REFERENCES/references'

describe('references', function(){
    const references = new References()

    it('text box', function(){
        cy.visit('/')
        references.TexBox().type('test')
        references.TexboxEmail().type('test@test.com')
        references.TexboxCurrentAddress().type('this is a tes, because i need learn cypress.')
        references.TexboxPermanentAddress().type('test2')
        references.ButtonSubmit().click()
     })
})