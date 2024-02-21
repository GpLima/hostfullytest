/* global Given, Then, When */

import ComputerDatabasePage from '../pageobjects/ComputerDatabasePage'
const computerDatabasePage = new ComputerDatabasePage

Given("access the website", () => {
    computerDatabasePage.acessarSite();
})

When("click to add a new computer", () => {
    computerDatabasePage.clickAddComputerButton();
})

Then("I click on create this computer button", () => {
    computerDatabasePage.clickCreateComputerSubmitButton();
})

Then("I click on cancel button", () => {
    computerDatabasePage.clickCancelButton();
})

Then("the computer should be created", (computerName) => {
    computerName.hashes().forEach((element) => {
        computerDatabasePage.checkComputerCreation(element.pcName);
    });
})

Then("I search for the computer", (computerName) => {
    computerName.hashes().forEach((element) => {
        computerDatabasePage.searchComputer(element.pcName);
    });
    
})

And("fill the data to adding the computer", (datatable) => {
    datatable.hashes().forEach((element) => {
        computerDatabasePage.fillComputerNameField(element.pcName);
        computerDatabasePage.fillIntroducedDateField(element.introducedDate);
        computerDatabasePage.fillDiscontinuedDateField(element.discontinuedDate);
        computerDatabasePage.selectCompany(element.company); 
    });
});