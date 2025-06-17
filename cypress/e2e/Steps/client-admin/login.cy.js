import { Given,When,Then } from "cypress-cucumber-preprocessor/steps";

import login from "../../pages/Login";

const Loginuser = new login();


//Demo
Given(/^First user visit login page$/, () => {
	Loginuser.enterurl()
});
  

//Demo
Then("user visit login page and enter the {string} and {string}", (username,password) => {
	
   Loginuser.entercredential(username,password)
   
});






//Demo
Then(/^Click on the login button$/, () => {
	Loginuser.submitcredential()
});


//Demo
Given(/^visit the user page$/, () => {
	cy.contains("Usuarios",{ timeout: 30000 }).click()

});




///////////////////////////////////////////////////////////////////////////////////////////////////////////////


Then(/^verify the user is on the Transaction summary screen$/, () => {
	Loginuser.verify()
	
});


Then(/^then user verify the error message invalid password$/, () => {
	Loginuser.verify_invalidpass()
	
});


Then(/^then user verify the error message$/, () => {
	Loginuser.verify_errormessage()
	
});

