$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("/Users/shify/Documents/Workspace2/BDDFrameworkFreeCRM/src/main/java/Features/contacts.feature");
formatter.feature({
  "line": 1,
  "name": "Free CRM Create Contacts",
  "description": "",
  "id": "free-crm-create-contacts",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Create a New Contact Scenario",
  "description": "",
  "id": "free-crm-create-contacts;create-a-new-contact-scenario",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "user is already on Login page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "title of Login page is Free CRM",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user enters \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "user clicks on Login button",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user is on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user moves to new contacts page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user enters the \"\u003cfirstname\u003e\", \"\u003clastname\u003e\", \"\u003cposition\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user saves the contact",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 14,
  "name": "",
  "description": "",
  "id": "free-crm-create-contacts;create-a-new-contact-scenario;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "firstname",
        "lastname",
        "position"
      ],
      "line": 15,
      "id": "free-crm-create-contacts;create-a-new-contact-scenario;;1"
    },
    {
      "cells": [
        "manuchandran",
        "1313Man.",
        "Tom",
        "Swayer",
        "QA Engineer"
      ],
      "line": 16,
      "id": "free-crm-create-contacts;create-a-new-contact-scenario;;2"
    },
    {
      "cells": [
        "manuchandran",
        "1313Man.",
        "Hickle",
        "Finn",
        "QA Lead"
      ],
      "line": 17,
      "id": "free-crm-create-contacts;create-a-new-contact-scenario;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 16,
  "name": "Create a New Contact Scenario",
  "description": "",
  "id": "free-crm-create-contacts;create-a-new-contact-scenario;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "user is already on Login page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "title of Login page is Free CRM",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user enters \"manuchandran\" and \"1313Man.\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "user clicks on Login button",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user is on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user moves to new contacts page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user enters the \"Tom\", \"Swayer\", \"QA Engineer\"",
  "matchedColumns": [
    2,
    3,
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user saves the contact",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.user_already_on_login_page()"
});
formatter.result({
  "duration": 6316925786,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.title_of_Login_page_is_Free_CRM()"
});
formatter.result({
  "duration": 15678023,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "manuchandran",
      "offset": 13
    },
    {
      "val": "1313Man.",
      "offset": 32
    }
  ],
  "location": "LoginStepDefinition.user_enters_and(String,String)"
});
formatter.result({
  "duration": 251605055,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_clicks_on_Login_button()"
});
formatter.result({
  "duration": 6087219758,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_is_on_home_page()"
});
formatter.result({
  "duration": 10270690,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_moves_to_new_contacts_page()"
});
formatter.result({
  "duration": 1728564188,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Tom",
      "offset": 17
    },
    {
      "val": "Swayer",
      "offset": 24
    },
    {
      "val": "QA Engineer",
      "offset": 34
    }
  ],
  "location": "LoginStepDefinition.user_enters_contact_details(String,String,String)"
});
formatter.result({
  "duration": 402742589,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_saves_the_contact()"
});
formatter.result({
  "duration": 2301614817,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.close_the_browser()"
});
formatter.result({
  "duration": 319960896,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Create a New Contact Scenario",
  "description": "",
  "id": "free-crm-create-contacts;create-a-new-contact-scenario;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "user is already on Login page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "title of Login page is Free CRM",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user enters \"manuchandran\" and \"1313Man.\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "user clicks on Login button",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user is on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user moves to new contacts page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user enters the \"Hickle\", \"Finn\", \"QA Lead\"",
  "matchedColumns": [
    2,
    3,
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user saves the contact",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.user_already_on_login_page()"
});
formatter.result({
  "duration": 5023359984,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.title_of_Login_page_is_Free_CRM()"
});
formatter.result({
  "duration": 6324623,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "manuchandran",
      "offset": 13
    },
    {
      "val": "1313Man.",
      "offset": 32
    }
  ],
  "location": "LoginStepDefinition.user_enters_and(String,String)"
});
formatter.result({
  "duration": 207222257,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_clicks_on_Login_button()"
});
formatter.result({
  "duration": 5103952263,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_is_on_home_page()"
});
formatter.result({
  "duration": 5948994,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_moves_to_new_contacts_page()"
});
formatter.result({
  "duration": 1986607059,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Hickle",
      "offset": 17
    },
    {
      "val": "Finn",
      "offset": 27
    },
    {
      "val": "QA Lead",
      "offset": 35
    }
  ],
  "location": "LoginStepDefinition.user_enters_contact_details(String,String,String)"
});
formatter.result({
  "duration": 288524870,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_saves_the_contact()"
});
formatter.result({
  "duration": 1892907907,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.close_the_browser()"
});
formatter.result({
  "duration": 260417351,
  "status": "passed"
});
});