Feature: Login


@internal @demo
Scenario Outline: User login with valid username and password

Given First user visit login page 
Then user visit login page and enter the "<username>" and "<password>" 
And Click on the login button
And verify the user is on the Transaction summary screen 

Examples:
| username                 | password           |
|  ovsingh@banesco.com     | banesco@contigo    |


@internal @demo
Scenario Outline: User login with invalid username and password
Given First user visit login page 
Then user visit login page and enter the "<username>" and "<password>" 
And Click on the login button
And  then user verify the error message invalid password
Examples:
| username               | password         |
|  ovsingh@banesco.com   | Aman@1234567890  |



@internal @demo
Scenario Outline: User logged in with credentials that do not follow the correct format.
Given First user visit login page 
Then user visit login page and enter the "<username>" and "<password>" 
And then user verify the error message


Examples:
| username                | password        |
| ovsingh@banesco.com     | Aman            |




