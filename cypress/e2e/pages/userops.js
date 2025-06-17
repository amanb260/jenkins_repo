class operations{

    // createuserbutton=".button1"
    agregar="div.save-button > .save-button"
    cancelbutton=".cancel-button"

    createuserbutton="button[class='transactionoverviewButton !-mt-[0.25rem]']"
    agregar="div.save-button > .save-button"
    cancelbutton=".cancel-button"
    firstname=":nth-child(1) > .relative > .form-input1"
    lastname = ":nth-child(2) > .relative > .form-input1"
    email = ":nth-child(3) > .form-item > .relative > .form-input1"
    role ="div[class='form-item css-b62m3t-container'] div[class='css-323b6g']"
    admin="#react-select-7-option-0"
    candd="#react-select-6-option-1"
    onlyc="#react-select-6-option-0"
    cancelrole="div[class='form-item css-b62m3t-container'] div[class='css-1wy0on6'] div:nth-child(1) svg path"
    location =".css-hlgwow > .css-323b6g"
    cancelloaction ="div[class='w-full css-b62m3t-container'] div[class='css-1wy0on6'] div:nth-child(1) svg"
    locationoption="#react-select-7-option-0"
    reselect ="#react-select-8-option-0"
    rrselect="#react-select-11-option-0"
    giveinput=".custom-input1"
    opendropdown=".css-hlgwow"
//  giveinput=".custom-input1"


    
//DEmo
userclick(){
    // cy.get(this.createuserbutton).click()
    cy.addWait()
    cy.contains("Crear usuario").click()
}







  


    //Demo
    createuser(firstname,lastname,email){
    
       
        // cy.contains('Introduce tu nombre').type(firstname)
        cy.get(':nth-child(2) > :nth-child(1) > .relative > .form-input1').type(firstname)
        // cy.contains('Introduce tu apellido').type(lastname)
        cy.get(':nth-child(2) > .relative > .form-input1').type(lastname)
        cy.get(this.email).type(email)
        
     
    }



    //DEmo
    selectrole(){
        cy.addWait()
        cy.get(this.role,{ timeout: 30000 }).click()
        cy.addWait()
        cy.contains('Administrador',{ timeout: 30000 }).click()
        cy.contains("Consultor y Descargador").click()
        cy.xpath('//*[@class="css-qr46ko"]/div[text()="Consultor"]').click()
        

        cy.addWait()
        cy.get(this.location).click()
        cy.contains('SSSPL',{ timeout: 30000 }).click()
        cy.contains("HP").click()
        cy.addWait()
     
        // cy.get('.cancel-button').click()// when yu want to create user comment this button and uncommnet the below code
        cy.addWait()
        cy.get('div.save-button > .save-button',{ timeout: 30000 }).click()
        cy.addWait()
        cy.get('.globalmodal-content',{ timeout: 30000 }).contains("Usuario creado correctamente").should('be.visible')
        cy.get('.globalmodal-button',{ timeout: 30000 }).click()
       
        

    }

  




   





       //Demo
       verifyuserbyemail(email){
        cy.addWait()
    cy.get(this.opendropdown).click()
    cy.addWait()
    cy.contains("Correo electrónico").click()
    cy.addWait()
    cy.get(this.giveinput).type(email)
        cy.contains(email).should('be.visible')
        cy.wait(3000)
    }



}
export default operations



