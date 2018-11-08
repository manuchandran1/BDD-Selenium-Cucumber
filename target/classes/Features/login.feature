Feature: Free CRM Login Fearure

#------With Examples Keyword----------
Scenario Outline: Free CRM Login Test Scenario

Given user is already on Login page
When title of Login page is Free CRM
Then user enters "<username>" and "<password>" 
Then user clicks on Login button
Then user is on home page
Then close the browser


Examples:
	| username     | password |
	| manuchandran | 1313Man. |
	| naveenk      | test@123 |


# ----- Without Examples Keyword-------
#Scenario: Free CRM Login Test Scenario
#
#Given user is already on Login page
#When title of Login page is Free CRM
#Then user enters "manuchandran" and "1313Man." 
#Then user clicks on Login button
#Then user is on home page
#Then close the browser



#--------For Practice---------------
#Scenario: user is able to to create a new contact
#
#Given user is already on home page
#When user mouse hover on contacts link
#Then user clicks on new contact link
#Then user enters firstname and lastname
#Then user clicks on save button
#Then verify new contact is created