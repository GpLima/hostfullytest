/// <reference types="Cypress" />

import ComputerDatabaseElements from '../elements/ComputerDatabaseElements';

class ComputerDatabasePage {
    private computerDatabaseElements: ComputerDatabaseElements;

    constructor() {
        this.computerDatabaseElements = new ComputerDatabaseElements();
    }

    public accessUrl(): void {
        cy.visit('/');
    }

    public clickAddComputerButton(): void {
        cy.get(this.computerDatabaseElements.addNewComputerButton()).click();
    }

    public fillComputerNameField(computerName: string): void {
        cy.get(this.computerDatabaseElements.computerNameField()).type(computerName);
    }

    public fillIntroducedDateField(introducedDate: string): void {
        if (introducedDate !== "") {
            cy.get(this.computerDatabaseElements.introducedDateField()).type(introducedDate);
        }
    }

    public fillDiscontinuedDateField(discontinuedDate: string): void {
        if (discontinuedDate !== "") {
            cy.get(this.computerDatabaseElements.discontinuedDateField()).type(discontinuedDate);
        }
    }

    public selectCompany(company: string): void {
        if (company !== "") {
            cy.get(this.computerDatabaseElements.companySelector()).select(company);
        }
    }

    public clickCreateComputerSubmitButton(): void {
        cy.get(this.computerDatabaseElements.createComputerSubmitButton()).click();
    }

    public clickCancelButton(): void {
        cy.get(this.computerDatabaseElements.cancelButton()).click();
    }

    public checkComputerCreation(computerName: string): void {
        cy.get(this.computerDatabaseElements.alertMessage()).should('contain', `Computer ${computerName} has been created`);
    }

    public searchComputer(computerName: string): void {
        cy.get(this.computerDatabaseElements.searchBox()).type(computerName);
        cy.get(this.computerDatabaseElements.searchSubmitButton()).click();
    }
}

export default ComputerDatabasePage;