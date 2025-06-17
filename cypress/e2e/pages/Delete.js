class remove{
    threedot="tbody tr:nth-child(1) td:nth-child(7) div:nth-child(1) div:nth-child(1) svg"




    //DEmo
    Deleteuser(){
        cy.addWait()
        cy.get(this.threedot).click()
        cy.addWait()
        cy.contains("Borrar").click()
        cy.addWait()
        // cy.get(':nth-child(2) > .globalmodal-button').click()//TO delete user comment this line and uncomment the below code
        cy.get(':nth-child(1) > .globalmodal-button').click()
       cy.get(".globalmodal-button.globalmodal-confirm-btn").click()
        
    }

    


       //DEmo
       cancel_search(){
        cy.xpath("//button[contains(@class,'p-2 mr-4')]//*[name()='svg']//*[name()='path' and contains(@fill-rule,'evenodd')]").click()
       }


       


}
export default remove