class Register{
    url(){
        return cy.visit('/register')
    }

    firstName(){
        return cy.get('#firstname')
    }

    lastName(){
        return cy.get('#lastname')
    }

    userName(){
        return cy.get('#userName')
    }

    password(){
        return cy.get('#password')
    }

    robot(){
        return cy.get('.rc-anchor-center-item.rc-anchor-checkbox-holder')
    }

    buttonRegister(){
        return cy.get('#register')
    }
}
export default Register