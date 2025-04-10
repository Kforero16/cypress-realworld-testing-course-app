describe("Newsletter Subscribe Form", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000")
    })

    it ("Allows users to subscribe to the email list", () => {
        cy.getByData("email-input").type("cypressjr@yopmail.com")
        cy.getByData("submit-button").click()
    })

    it ("Does Not allow users to subscribe to the email list", () => {
        cy.getByData("email-input").type("cypressjr")
        cy.getByData("submit-button").click()

    })



})