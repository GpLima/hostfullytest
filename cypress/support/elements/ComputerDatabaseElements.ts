export default class ComputerDatabaseElements {
  addNewComputerButton(): string {
    return 'a#add';
  }
  
  computerNameField(): string {
    return 'input#name';
  }

  introducedDateField(): string {
    return 'input#introduced';
  }
  
  discontinuedDateField(): string {
    return 'input#discontinued';
  }

  companySelector(): string {
    return 'select#company';
  }

  createComputerSubmitButton(): string {
    return 'input[type="submit"]';
  }

  cancelButton(): string {
    return 'Cancel';
  }

  searchBox(): string {
    return '#searchbox';
  }

  alertMessage(): string {
    return 'div.alert-message.warning';
  }

  searchSubmitButton(): string {
    return '#searchsubmit';
  }
}
