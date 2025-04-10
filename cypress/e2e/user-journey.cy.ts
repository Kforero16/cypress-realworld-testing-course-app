describe("User Journey", () => {

    it ("Course: Testing Your First Next.js Application", () => {
      
        cy.visit('http://localhost:3000/')
        cy.getByData("course-0").find("a").contains("Get started").click()
        cy.location("pathname").should("eq", "/testing-your-first-application")
        cy.getByData("next-lesson-button").click()

        cy.location("pathname").should("eq", "/testing-your-first-application/app-install-and-overview")
        cy.getByData("challenge-answer-0").click()
        cy.getByData("next-lesson-button").click()

        cy.location("pathname").should("eq", "/testing-your-first-application/installing-cypress-and-writing-our-first-test")
        cy.getByData("challenge-answer-0").click()
        cy.getByData("next-lesson-button").click()

        cy.location("pathname").should("eq", "/testing-your-first-application/setting-up-data-before-each-test")
        cy.getByData("challenge-answer-0").click()
        cy.getByData("next-lesson-button").contains("Complete Course").click()

        cy.getByData("hero-heading").contains ("Testing Next.js Applications with Cypress")
      })


})