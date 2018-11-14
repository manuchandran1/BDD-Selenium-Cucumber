$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("/Users/shify/Documents/Workspace2/BDDFrameworkFreeCRM/src/main/java/Features/deal.feature");
formatter.feature({
  "line": 1,
  "name": "Deal data creation",
  "description": "",
  "id": "deal-data-creation",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Create a New Contact Scenario",
  "description": "",
  "id": "deal-data-creation;create-a-new-contact-scenario",
  "type": "scenario",
  "keyword": "Scenario"
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
  "name": "user enters username and password",
  "rows": [
    {
      "cells": [
        "manuchandran",
        "1313Man."
      ],
      "line": 7
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user clicks on Login button",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user is on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user moves to new deals page",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "user enters the deal details",
  "rows": [
    {
      "cells": [
        "test deal",
        "1000",
        "50",
        "10"
      ],
      "line": 14
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "DealStepDefinition.user_is_already_on_Login_page()"
});
formatter.result({
  "duration": 7322486144,
  "status": "passed"
});
formatter.match({
  "location": "DealStepDefinition.title_of_Login_page_is_Free_CRM()"
});
formatter.result({
  "duration": 10514450,
  "status": "passed"
});
formatter.match({
  "location": "DealStepDefinition.user_enters_username_and_password(DataTable)"
});
formatter.result({
  "duration": 268213477,
  "status": "passed"
});
formatter.match({
  "location": "DealStepDefinition.user_clicks_on_Login_button()"
});
formatter.result({
  "duration": 5967050599,
  "status": "passed"
});
formatter.match({
  "location": "DealStepDefinition.user_is_on_home_page()"
});
formatter.result({
  "duration": 8627598,
  "status": "passed"
});
formatter.match({
  "location": "DealStepDefinition.user_moves_to_new_deals_page()"
});
formatter.result({
  "duration": 1964265217,
  "status": "passed"
});
formatter.match({
  "location": "DealStepDefinition.user_enters_the_deal_details(DataTable)"
});
formatter.result({
  "duration": 321010282,
  "status": "passed"
});
formatter.match({
  "location": "DealStepDefinition.close_the_browser()"
});
formatter.result({
  "duration": 252042347,
  "status": "passed"
});
});