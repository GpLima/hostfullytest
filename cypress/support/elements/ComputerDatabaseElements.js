class ComputerDatabaseElements {
    addNewComputerButton = () => { return 'a#add' }
  
    computerNameField = () => { return 'input#name' }

    introducedDateField = () => { return 'input#introduced' }
    
    discontinuedDateField = () => { return 'input#discontinued' }

    companySelector = () => { return 'select#company' }

    createComputerSubmitButton = () => { return 'input[type="submit"]' }

    cancelButton = () => { return 'a', 'Cancel' }

    searchBox = () => { return '#searchbox' }
  }
  
  export default ComputerDatabaseElements;