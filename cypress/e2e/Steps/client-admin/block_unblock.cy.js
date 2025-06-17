import { Given,When,Then } from "cypress-cucumber-preprocessor/steps";

import changestatus from "../../pages/block_unblock";
const status = new changestatus();



///new implementation


//Demo
Given("user then search by {string} to block", (email) => {
	status.verifyuserbyemail(email)
});

//DEmo
Then(/^user click on the block button$/, () => {
	status.Block()
});


//Demo
Then("user in the block list search by {string}", (email) => {
	status.verifyuserblock(email)
	
});


//DEmo
Then(/^unblock the user$/, () => {
	status.unblock()
});



//Demo
Then("user verify that the user is active by using {string}", (Email) => {
	status.Verifyuseractive(Email)
	status.verifyunblock()
});












