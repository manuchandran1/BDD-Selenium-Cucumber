Feature: Deal data creation

Scenario: Create a New Contact Scenario
Given user is already on Login page
When title of Login page is Free CRM
Then user enters username and password
| manuchandran | 1313Man. |

Then user clicks on Login button
Then user is on home page
Then user moves to new deals page
Then user enters the deal details

|test deal|1000|50|10|
Then close the browser