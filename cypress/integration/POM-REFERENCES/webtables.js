class Webtables{
    url(){
        return cy.visit('//webtables')
    }

    buttonAdd(){
        return cy.get('#addNewRecordButton')
    }

    firstName(){
        return cy.get('#firstName')
    }

    lastName(){
        return cy.get('#lastName')
    }

    userEmail(){
        return cy.get('#userEmail')
    }

    age(){
        return cy.get('#age')
    }

    salary(){
        return cy.get('#salary')
    }

    department(){
        return cy.get('#department')
    }

    submitButton(){
        return cy.get('#submit')
    }
}
export default Webtables