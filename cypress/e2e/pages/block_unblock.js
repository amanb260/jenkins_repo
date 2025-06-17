class changestatus{
    threedot="tbody tr:nth-child(1) td:nth-child(7) div:nth-child(1) div:nth-child(1) svg"
    Blockuser="body > div:nth-child(8) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > main:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > table:nth-child(1) > tbody:nth-child(2) > tr:nth-child(1) > td:nth-child(7) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > button:nth-child(3) > span:nth-child(1)"
    selectdate="input[placeholder='Seleccionar']"
    acuredo=".globalmodal-button.globalmodal-confirm-btn"
    giveinput=".custom-input1"
    Bloqueo=".tab > :nth-child(3)"
    Edituser="tbody button:nth-child(1) span:nth-child(1)"

opendropdown=".css-hlgwow"
 giveinput=".custom-input1"

    
        
   

    
//DEmo
    Block(){
        cy.addWait()
        cy.get(this.threedot,{ timeout: 30000 }).click()
        // cy.get(this.Blockuser).click()
        cy.contains("Bloquear").then($el => {
            $el[0].click(); 
          });
        // cy.get("input[placeholder='Seleccionar']").click()

        cy.addWait()
        cy.get('.flatpickr-wrapper > .w-full',{ timeout: 30000 }).click()
        
        cy.get(this.selectdate,{ timeout: 30000 }).click()
        const currentDate = new Date();
        currentDate.setDate(currentDate.getDate() + 1)
        const months = [
            "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
          ];
          
         
          const month = months[currentDate.getMonth()]; 
          const day = currentDate.getDate(); 
          const year = currentDate.getFullYear();  
          const formattedDate = `${month} ${day}, ${year}`;
          cy.get(`[aria-label="${formattedDate}"]`).click(); 
          cy.get('.form-input',{ timeout: 30000 }).type("Not active")
          cy.get(':nth-child(1) > .globalmodal-button').click()
          cy.addWait()
          cy.get(this.acuredo,{ timeout: 30000 }).click()
    
    }

 


    //DEmo
    unblock(){
        cy.addWait()
        cy.get(this.threedot,{ timeout: 30000 }).click()
        cy.addWait()
        cy.get(this.Edituser).contains('Activar').then($el => {
            $el[0].click(); 
          });
          cy.addWait()
        cy.get(':nth-child(1) > .globalmodal-button').click()
        cy.addWait()
        cy.get(this.acuredo).click()
        cy.addWait()
        cy.get('.tablinks1').click()
        
    }


    //DEmo

    verifyunblock(){
        cy.addWait()
        cy.get('.tbodyRow > :nth-child(6)',{ timeout: 30000 }).contains("Activo").should('be.visible')
    }
    

   




       //DEmo
    verifyuserbyemail(email){
        cy.addWait()
        cy.get(this.opendropdown).click()
        cy.addWait()
        cy.contains("Correo electrónico",{ timeout: 30000 }).click()
        cy.addWait()
        cy.get(this.giveinput).type(email)
            cy.contains(email,{ timeout: 30000 }).should('be.visible')
            cy.addWait()
        }




        //DEmo
        verifyuserblock(email){

            cy.addWait()
            cy.get(this.Bloqueo,{ timeout: 30000 }).click()
            cy.get('.custom-input1').type(email)

        }

        //DEmo

        Verifyuseractive(email){
            cy.addWait()
            cy.get('.custom-input1').type(email)
        }


}
export default changestatus


