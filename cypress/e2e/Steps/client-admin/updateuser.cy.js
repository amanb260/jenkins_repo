
import { Given,When,Then } from "cypress-cucumber-preprocessor/steps";

import update from "../../pages/updateuser";
const edit = new update();




//DEmo

Given("user search by {string} in the search bar", (email) => {
	edit.verifyuserbyemail(email)
});

//Demo
Then(/^user click on the edit button$/, () => {
	edit.clickedit()
});

//Demo
Then("verify {string} and edit the details", (Email) => {
	edit.verifyemail(Email)
});


//Demo
Then(/^after edit click on the save button$/, () => {
	edit.editdetails()
});



