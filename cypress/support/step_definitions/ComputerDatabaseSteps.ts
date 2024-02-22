import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import ComputerDatabasePage from '../pageobjects/ComputerDatabasePage';

const computerDatabasePage = new ComputerDatabasePage();

Given("access the website", (): void => {
    return computerDatabasePage.accessUrl();
});

When("click to add a new computer", (): void => {
    return computerDatabasePage.clickAddComputerButton();
});

Then("I click on create this computer button", (): void => {
    return computerDatabasePage.clickCreateComputerSubmitButton();
});

Then("I click on cancel button", (): void => {
    return computerDatabasePage.clickCancelButton();
});

Then("the computer should be created", (computerName: any): void => {
    return computerName.hashes().forEach((element: any): void => {
        computerDatabasePage.checkComputerCreation(element.pcName);
    });
});

Then("I search for the computer", (computerName: any): void => {
    computerName.hashes().forEach((element: any): void => {
        computerDatabasePage.searchComputer(element.pcName);
    });
});

When("fill the data to adding the computer", (datatable: any): void => {
    return datatable.hashes().forEach((element: any): void => { 
        computerDatabasePage.fillComputerNameField(element.pcName);
        computerDatabasePage.fillIntroducedDateField(element.introducedDate);
        computerDatabasePage.fillDiscontinuedDateField(element.discontinuedDate);
        computerDatabasePage.selectCompany(element.company); 
    });
});