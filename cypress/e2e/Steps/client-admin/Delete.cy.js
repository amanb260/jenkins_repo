import { Given,When,Then } from "cypress-cucumber-preprocessor/steps";
import remove from "../../pages/Delete";
import changestatus from "../../pages/block_unblock";
const status = new changestatus();
const deleteuser = new remove();


//Demo
Then(/^user cancel search$/, () => {
	deleteuser.cancel_search()
});

//Demo
Given("First search by using {string}", (Email) => {
	status.Verifyuseractive(Email)
});

//Demo
Then(/^user click on the delete button$/, () => {
	deleteuser.Deleteuser()
});







