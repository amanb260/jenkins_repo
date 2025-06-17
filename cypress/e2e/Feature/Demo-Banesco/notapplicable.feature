Feature:Not applicable service request flow



Scenario Outline: User login with external admin
Given First user visit login page 
Then user visit login page and enter the "<username>" and "<password>" 
And Click on the login button
Given user visit service request page
Then user click on the new application button and verify that yes button should be disable
Then fill the information in the modal and enter "<service>" and "<subservice>"
Then user see the details and verify that the service name is "<service>" and the subservice name is "<subservice>"

Examples:
| username               | password         |service                  |subservice                                |
| vipuls@siddhatech.com  | banesco@contigo    |Solicitud de Reclamación | Reverso o Devolución no reconocida       |



Scenario Outline: User login with Banesco-admin
Given First user visit login page 
Then user visit login page and enter the "<username>" and "<password>" 
And Click on the login button
Given user visit service request page
Then user mark the request as non applicable using not applicable

Examples:
| username               | password         |
|  ovsingh@banesco.com   | banesco@contigo    |