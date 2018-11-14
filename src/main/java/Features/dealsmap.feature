Feature: Deal data creation using Map 

Scenario: Create a New Contact Scenario
	Given user is already on Login page 
	When title of Login page is Free CRM 
	Then user enters username and password 
		| username 	   | password |
		| manuchandran | 1313Man. |
		
	Then user clicks on Login button 
	Then user is on home page 
	Then user moves to new deals page 
	Then user enters the deal details 
		| title      | amount | probability | commission |
		| test deal1 | 1000   |	50          | 10         |
		| test deal2 | 2000   |	40          | 20         |
		| test deal3 | 3000   |	30          | 30         |
		
	Then close the browser