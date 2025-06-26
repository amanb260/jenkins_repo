///<reference types="cypress"/>

import "cypress-xpath"


class loginuser{
    url ="https://li1761-109.members.linode.com:8094/auth/signin"
    username =":nth-child(1) > .form-input"
    password =".relative > .form-input"
    submit=".submit-btn"


   enterurl(){
    cy.visit(this.url)
   }


    entercredential(email,passwords){

      cy.addWait()
        cy.get(this.username,{ timeout: 30000 }).type(email)
        cy.addWait()
        cy.get(this.password,{ timeout: 30000 }).type(passwords)
        cy.addWait()
        
         
       
   
     }


   //   entercredentials(){
   //    cy.fixture("login").then((data) => {
        
     
       
   //      cy.get(this.username).type(data.email)
   //      cy.get(this.password).type(data.password)
        
         
   //    })
   
   //   }

   entercredentials(clientType) {
      cy.fixture("login").then((data) => {
       
        const clientData = data[clientType];
    
        
        cy.get(this.username).type(clientData.email);
        cy.get(this.password).type(clientData.password);
      });
    }

     submitcredential(){
        cy.get(this.submit).click()
      //   cy.viewport(1680, 880);
      cy.window().then((win) => {
         const screenWidth = win.screen.width;
         const screenHeight = win.screen.height;
        
         cy.log(`Setting viewport to: ${screenWidth}x${screenHeight}`);
         // Apply the viewport dimensions dynamically
         cy.viewport(screenWidth, screenHeight);
       });
     }

     verify(){
      cy.get('.text-title-md2').contains('Resumen de transacción',{ timeout: 30000 }).should('be.visible')

      cy.wait(4000)
     }

     verify_invalidpass(){

      cy.get('.failed-attempts-error').then(($el) => {
         const text = $el.text();
         cy.log(text);

      cy.contains(text).should('be.visible')
    
   });
   cy.wait(4000)
     }

     verify_errormessage(){
      cy.get('.text-sm').then(($el) => {
         const text = $el.text();
         cy.log(text);

      cy.contains(text).should('be.visible')
    
   });

   cy.wait(4000)
      
     }


  

  // hhkjhkhkjhkhkjhkjhhkjhkjhkjhkjhkjhkjjkkkjhkjkjkh

    

  


     

}




export default loginuser;