
import { Given,When,Then } from "cypress-cucumber-preprocessor/steps";
import request from "../../pages/service_req";

const verify_servicereq = new request();


//Full DEmo

Given(/^user visit service request page$/, () => {
	verify_servicereq.visit_service()
});



Then(/^user click on the new application button and verify that yes button should be disable$/, () => {
	verify_servicereq.verify_modal()
});



Then("fill the information in the modal and enter {string} and {string}", (service,subservice) => {
	verify_servicereq.enter_info(service,subservice)
});


Then("user see the details and verify that the service name is {string} and the subservice name is {string}", (service,subservice) => {
	verify_servicereq.verify_details(service,subservice)
});





Then(/^user close the request using Application_Number$/, () => {
	verify_servicereq.close_requestdemo()
});

Then(/^user mark the request as non applicable using not applicable$/, () => {
	verify_servicereq.not_applicable_demo()
});














