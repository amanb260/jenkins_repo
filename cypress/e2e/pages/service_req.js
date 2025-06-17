class request {

open_dropdown = ".css-hlgwow"
dropdwn_input="input[placeholder='Buscar...']"
select_dsede="body > div:nth-child(8) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > main:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > input:nth-child(1)"
date=':nth-child(1) > .relative > .justify-center > .flatpickr-wrapper > .flatpickr-calendar > .flatpickr-innerContainer > .flatpickr-rContainer > .flatpickr-days > .dayContainer > [aria-label="Marzo 1, 2025"]'
select_hasta =":nth-child(2) > .relative > .justify-center > .flatpickr-wrapper > .w-full"
date2=':nth-child(2) > .relative > .justify-center > .flatpickr-wrapper > .flatpickr-calendar > .flatpickr-innerContainer > .flatpickr-rContainer > .flatpickr-days > .dayContainer > [aria-label="Marzo 20, 2025"]'
newapplication = "button[class='transactionoverviewButton']"
threedot = "//tbody/tr[1]/td[9]/div[1]/div[1]//*[name()='svg']//*[name()='path' and contains(@d,'M96 184c39')]"
see =".tooltip-button"
 gotojan="span[class='flatpickr-prev-month']"
 select_dsede2 = "body > div:nth-child(8) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > main:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > input:nth-child(1)"
 select_hasta2 = "body > div:nth-child(8) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > main:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > input:nth-child(1)"
//demo
visit_service(){
  cy.addWait()
    cy.contains("Solicitud",{ timeout: 30000 }).click()
    cy.addWait()
    cy.contains("Solicitud de servicio").click()
    
}


//demo
verify_modal()
{
  cy.addWait()
  cy.contains('Nueva solicitud',{ timeout: 30000 }).click()
    // cy.get(this.newapplication).click()
    cy.contains('Aceptar').should('be.disabled')
}


//demo
enter_info(service,subservices){
  // cy.addWait()
  cy.addWait()
    cy.get(':nth-child(1) > :nth-child(1) > #merchant > .css-xviunq-control > .css-s17o5a > .css-19bb58m', { timeout: 30000 }).click()
    cy.addWait()
    // cy.contains(service).click()

    cy.get('#react-select-4-listbox').contains(service, { timeout: 30000 }) // Set timeout to 10 seconds
  .should('be.visible')
  .click();
  cy.addWait()
  cy.get(':nth-child(2) > #merchant > .css-xviunq-control > .css-s17o5a',{ timeout: 30000 }).click()
  cy.addWait()
    cy.contains(subservices).click()
   
    cy.get(':nth-child(2) > :nth-child(1) > #merchant > .css-xviunq-control > .css-s17o5a',{ timeout: 30000 }).click()
    cy.addWait()
    cy.get('#react-select-6-listbox').contains("SSSPL").click()
    cy.get(':nth-child(2) > :nth-child(2) > #merchant > .css-xviunq-control',{ timeout: 30000 }).click()
    cy.addWait()
    cy.get('#react-select-7-listbox',{ timeout: 30000 }).children() 
    .then($options => {
      const randomIndex = Math.floor(Math.random() * $options.length); 
      const selectedOption = $options[randomIndex];

    // Scroll the selected option into view
    
    cy.addWait()
    cy.wrap(selectedOption)
      .scrollIntoView({ duration: 1000 }) // Duration can be adjusted as needed
      .should('be.visible') // Ensure it's visible
      .click();

      cy.get('.question-input').type("No additional information")

      cy.get("label[class='flex items-center border border-[#a5adb4] hover:border-[#007953] rounded-md w-full p-1 cursor-pointer hover:shadow-[0_0_5px_#556176]']").selectFile("D:\\BPD Training\\BPD_Training\\banesco automation\\cypress\\fixtures\\RESUMEN.pdf")
      // cy.get(':nth-child(2) > .globalmodal-button').click()
      cy.contains('Aceptar').click()
      cy.get('.globalmodal-content',{timeout:30000}).should('include.text', 'Su solicitud se ha generado con éxito');
   
      cy.addWait()
   
    // cy.get('.globalmodal-description').then(($el) => {
    //     const text = $el.text();
    //     cy.log(text);
    //        const requestNumber = text.match(/(SR|ST|SS)\d+/)[0]; 
    //   cy.log('Request Number: ' + requestNumber);
    //   cy.get('.globalmodal-button').click()
    //   cy.wait(3000)

    cy.get('.globalmodal-description').then(($el) => {
      const text = $el.text();
      cy.log(text);
  
      const requestNumber = text.match(/(SR|ST|SS)\d+/)[0]; 
      cy.log('Request Number: ' + requestNumber);
  
      // Save the requestNumber to a JSON file
      cy.writeFile('cypress/fixtures/requestData.json', { requestNumber });
  
      cy.get('.globalmodal-button').click();
      
  });
  


  cy.fixture('requestData.json').then((data) => {
    cy.get(this.dropdwn_input).type(data.requestNumber);
});
     
      // cy.get(this.dropdwn_input).type(requestNumber)
      

      cy.addWait()
    

      
      
    });
}




//demo
verify_details(service,subservice){
  cy.addWait()
  // cy.xpath(this.threedot).click()
  cy.get(':nth-child(1) > .menubtn > .relative > .menuBtn > .menuBtnIcon > path',{ timeout: 30000 }).click()
  cy.addWait()
  cy.get(this.see).click()
  cy.addWait()
  cy.contains(service,{ timeout: 30000 }).should('be.visible')
  cy.contains(subservice,{ timeout: 30000 }).should('be.visible')
  cy.addWait()
}


//demo
 close_requestdemo(){
  cy.addWait()
  cy.fixture('requestData.json').then((data) => {
    cy.get(this.dropdwn_input).type(data.requestNumber);
});
  cy.addWait()
  cy.get(':nth-child(1) > .menubtn > .relative > .menuBtn > .menuBtnIcon > path').click()
  cy.addWait()
  cy.get("div[class='tooltip !w-[150px] !ml-[-25px]']",{ timeout: 30000 })
  .contains('Cerrar').then($el => {
    $el[0].click(); 
  });
  // cy.wait(6000)
  cy.addWait()
  cy.contains('Cerrar solicitud').click()
  cy.addWait()
  cy.get('.question-input').type('Yes')
  cy.addWait()
  cy.get(':nth-child(1) > .globalmodal-button',{ timeout: 30000 }).click()
  // cy.wait(6000)
  cy.addWait()
  cy.get('.globalmodal-button',{ timeout: 30000 }).click()
  cy.addWait()
  cy.fixture('requestData.json').then((data) => {
    cy.get(this.dropdwn_input).type(data.requestNumber);
});
cy.addWait()
cy.get('.tbodyRow > :nth-child(8)',{ timeout: 30000 }).contains("Cerrada").should('be.visible')
}





//demo
not_applicable_demo(){
  cy.addWait()
  cy.fixture('requestData.json').then((data) => {
    cy.get(this.dropdwn_input).type(data.requestNumber);
});
  cy.addWait()
  cy.get(':nth-child(1) > .menubtn > .relative > .menuBtn > .menuBtnIcon > path',{ timeout: 30000 }).click()
  cy.addWait()
  cy.get("div[class='tooltip !w-[150px] !ml-[-25px]']").contains('No procede').click()
  cy.addWait()
  cy.get("textarea[placeholder='Añadir comentario']",{ timeout: 30000 }).type('yes')
  cy.addWait()
  cy.get(".globalmodal-button.globalmodal-confirm-btn",{ timeout: 30000 }).click()
  // cy.wait(6000)
  cy.addWait()
  cy.get(".globalmodal-button.globalmodal-confirm-btn",{ timeout: 30000 }).click()

cy.addWait()
cy.get('.tbodyRow > :nth-child(8)',{ timeout: 30000 }).contains("No procede").should('be.visible')

}


}

export default request;