import { Given,When,Then } from "cypress-cucumber-preprocessor/steps";

import operations from "../../pages/userops";

const users = new operations();


//create user

//Demo
Given(/^user First click on the create user button$/, () => {
	users.userclick()
});



//Demo

Then("user enter {string} and {string} and {string}", (Firstname,Lastname,email) => {
	users.createuser(Firstname,Lastname,email)
	
});

//Demo

Then(/^user select Role and location and click on the save button$/, () => {
	users.selectrole()
});






//Demo
Then("verify that user is created sucessfully by using {string}", (email) => {
	users.verifyuserbyemail(email)
});




