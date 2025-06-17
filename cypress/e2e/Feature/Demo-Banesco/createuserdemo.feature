Feature:user operations

@demo
Scenario Outline: user operation
Given First user visit login page 
Then user visit login page and enter the "<username>" and "<password>" 
And Click on the login button
# create



Given visit the user page
Given user First click on the create user button
Then user enter "<FirstName>" and "<Lastname>" and "<Email>"
Then user select Role and location and click on the save button
And verify that user is created sucessfully by using "<Email>"



#Edit


Then user cancel search
Given user search by "<Email>" in the search bar
Then user click on the edit button 
Then verify "<Email>" and edit the details
And after edit click on the save button



#Block-unblock
Given user then search by "<Email>" to block
Then user click on the block button
Then user in the block list search by "<Email>"
Then unblock the user 
Then user verify that the user is active by using "<Email>"



#delete
Then user cancel search
Given First search by using "<Email>"
Then user click on the delete button




Examples:
| username               | password           | FirstName        | Lastname       |        Email                       |
| vipuls@siddhatech.com  | banesco@contigo    |   Daniel      |   Clark         |  	     Clark646@yopmail.com     |
