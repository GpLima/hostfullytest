/// <reference types="Cypress" />

import ComputerDatabaseElements from '../elements/ComputerDatabaseElements'
const computerDatabaseElements = new ComputerDatabaseElements
const url = "https://computer-database.gatling.io/computers"

class ComputerDatabasePage {
    // Acessa o site que será testado
    acessarSite() {
        cy.visit(url)
    }

    // Clica no botão que acessa a página de login do site
    clickAddComputerButton() {
        cy.get(computerDatabaseElements.addNewComputerButton()).click()
    }
  
    // Preenche o campo de nome do computador
    fillComputerNameField(computerName) {
        cy.get(computerDatabaseElements.computerNameField()).type(computerName)
    }

    // Preenche o campo de data de introdução do computador
    fillIntroducedDateField(introducedDate) {
        if(introducedDate != "") return cy.get(computerDatabaseElements.introducedDateField()).type(introducedDate)
    }

    // Preenche o campo de data de descontinuação do computador
    fillDiscontinuedDateField(discontinuedDate) {
        if(discontinuedDate != "") return cy.get(computerDatabaseElements.discontinuedDateField()).type(discontinuedDate)
    }

    // Seleciona a empresa do computador
    selectCompany(company) {
        if(company != "") return cy.get(computerDatabaseElements.companySelector()).select(company)
    }

    // Clica no botão de submissão do formulário de criação de computador
    clickCreateComputerSubmitButton() {
        cy.get(computerDatabaseElements.createComputerSubmitButton()).click()
    }

    // Clica no botão de cancelamento do formulário de criação de computador
    clickCancelButton() {
        cy.get(computerDatabaseElements.cancelButton()).click()
    }

    // Verifica se o botão de adicionar novo computador está visível
    checkAddComputerButtonIsVisible() {
        cy.get(computerDatabaseElements.addNewComputerButton()).should('be.visible')
    }

    // Verifica se o campo de nome do computador está visível
    checkComputerNameFieldIsVisible() {
        cy.get(computerDatabaseElements.computerNameField()).should('be.visible')
    }

    // Verifica se o campo de data de introdução do computador está visível
    checkIntroducedDateFieldIsVisible() {
        cy.get(computerDatabaseElements.introducedDateField()).should('be.visible')
    }

    // Verifica se o campo de data de descontinuação do computador está visível
    checkDiscontinuedDateFieldIsVisible() {
        cy.get(computerDatabaseElements.discontinuedDateField()).should('be.visible')
    }

    // Verifica se o seletor de empresa do computador está visível
    checkCompanySelectorIsVisible() {
        cy.get(computerDatabaseElements.companySelector()).should('be.visible')
    }

    // Verifica se o botão de submissão do formulário de criação de computador está visível
    checkCreateComputerSubmitButtonIsVisible() {
        cy.get(computerDatabaseElements.createComputerSubmitButton()).should('be.visible')
    }

    // Verifica se o botão de cancelamento do formulário de criação de computador está visível
    checkCancelButtonIsVisible() {
        cy.get(computerDatabaseElements.cancelButton()).should('be.visible')
    }

    checkComputerCreation(computerName) {
        cy.get('div.alert-message.warning').should('contain', `Computer ${computerName} has been created`)
    }

    searchComputer(computerName) {
        cy.get(computerDatabaseElements.searchBox()).type(computerName)
        cy.get('#searchsubmit').click()
    }

     
}

export default ComputerDatabasePage;