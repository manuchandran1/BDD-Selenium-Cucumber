Feature: Free CRM Test Case

@SmokeTest @RegressionTest
Scenario: Login with valid username and password
Given This is a valid login test

@RegressionTest
Scenario: Login with invalid username and password
Given This is an invalid login test

@SmokeTest
Scenario: Create a contact
Given This is an create contact test

@SmokeTest @RegressionTest
Scenario: Create a deal
Given This is an create deal test

@SmokeTest
Scenario: Create a task
Given This is an create task test

@SmokeTest
Scenario: Create a case
Given This is an create case test

@SmokeTest
Scenario: Verify Left Panel links
Given Clicking on left panel links

@RegressionTest
Scenario: Search a deal
Given Search a deal test

@RegressionTest
Scenario: Search a contact
Given Search a contact test

@SmokeTest @End2End
Scenario: Search a task
Given Search a task test

@SmokeTest @End2End
Scenario: Search a case
Given Search a case test

@SmokeTest @End2End
Scenario: Search a call
Given Search a call test

@SmokeTest @End2End
Scenario: Search an email
Given Search an email test

@SmokeTest @End2End
Scenario: Search docs
Given Search doc test

@SmokeTest @End2End
Scenario: Search forms
Given Search form test

@End2End
Scenario: validate a report
Given validate report test

@End2End
Scenario: application logout
Given logout test

Scenario: browser closed
Given close browser test


