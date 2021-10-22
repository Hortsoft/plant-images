import { Then } from"cypress-cucumber-preprocessor/steps";

Then('I see {string} in the title', (title) => {
    cy.title().should.apply("include", title);
});

Then('I see {string} in the {string} ', (content, target, attribute) => {
    cy.get(target)
        .should("have.attr", attribute)
        .and("include", content)
});