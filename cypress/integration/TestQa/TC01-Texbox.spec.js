import References from '../POM-REFERENCES/references'

describe('references', function(){
    const references = new References()

    it('text box', function(){
        cy.visit('/')
        references.TexBox().type('test')
    })
})