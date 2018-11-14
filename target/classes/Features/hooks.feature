Feature: Free CRM App Test 

Scenario: free crm deal test 
	Given user is on a deal page 
	When user fills deals form 
	Then deal is created 
	
Scenario: free crm contact test 
	Given user is on a contacts page 
	When user fills contact form 
	Then contact is created 
	
	
Scenario Outline: free crm create mail test 
	Given user is on a mail page 
	When user fills mail form 
	Then mail is created 
	
	Examples: 
		|mail1|
		|mail2|
		|mail3|