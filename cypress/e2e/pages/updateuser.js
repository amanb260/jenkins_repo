class update{

 giveinput=".custom-input1"

 threedot="tbody tr:nth-child(1) td:nth-child(7) div:nth-child(1) div:nth-child(1) svg"
    Edituser="tbody button:nth-child(1) span:nth-child(1)"

    cancelrole="div[class='form-item css-b62m3t-container'] div[class='css-1wy0on6'] div:nth-child(1) svg path"
    location =".css-hlgwow > .css-323b6g"
    cancelloaction ="div[class='w-full css-b62m3t-container'] div[class='css-1wy0on6'] div:nth-child(1) svg"
    locationoption="#react-select-7-option-0"

   




    //Demo
    clickedit(){
        cy.get(this.threedot,{ timeout: 30000 }).click()
        cy.get(this.Edituser,{ timeout: 30000 }).contains('Editar').then($el => {
            $el[0].click(); 
          });
    }



    //Demo
    verifyemail(email){
        cy.contains(email).should('be.visible')
    }
    

    //DEmo
    editdetails(){
        cy.addWait()
        cy.get(this.cancelrole).click()
        cy.get('.css-hlgwow > .css-323b6g').click()
        cy.contains('Administrador',{ timeout: 30000 }).click()
        cy.contains("Consultor y Descargador").click()
        cy.addWait()
        cy.get(this.cancelloaction).click()
        cy.get(this.location).click()
        cy.contains('SSSPL',{ timeout: 30000 }).click()
        // cy.get('.cancel-button').click()// when yu want to create user comment this button and uncommnet the below code
        cy.addWait()
        cy.get('div.save-button > .save-button').click()
        cy.addWait()
        cy.get('.globalmodal-content').contains("Usuario actualizado con éxito").should('be.visible')
        cy.get('.globalmodal-button').click()

    }





       //Demo
       verifyuserbyemail(email){
        cy.addWait()
        cy.get(this.giveinput).type(email)
        cy.addWait()
    
    }


}


export default update