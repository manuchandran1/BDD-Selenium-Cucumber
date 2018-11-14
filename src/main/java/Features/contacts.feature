Feature: Free CRM Create Contacts

Scenario Outline: Create a New Contact Scenario
Given user is already on Login page
When title of Login page is Free CRM
Then user enters "<username>" and "<password>" 
Then user clicks on Login button
Then user is on home page
Then user moves to new contacts page
Then user enters the "<firstname>", "<lastname>", "<position>"
Then user saves the contact
Then close the browser

Examples:
	| username     | password | firstname | lastname | position    |
	| manuchandran | 1313Man. | Tom		  | Swayer   | QA Engineer |
	| manuchandran | 1313Man. | Hickle	  | Finn  	 | QA Lead 	   |