class Texbox{
    TexBox(){
        return cy.get("input[placeholder=\"Full Name\"]")
    }
    TexboxEmail(){
        return cy.get("input[placeholder=\"name@example.com\"]")
    }
    TexboxCurrentAddress(){
        return cy.get("textarea[placeholder=\"Current Address\"]")
    }
    TexboxPermanentAddress(){
        return cy.get('#permanentAddress')
    }
    ButtonSubmit(){
        return cy.get('#submit') 
    }
}
export default Texbox 