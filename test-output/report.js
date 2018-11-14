$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("/Users/shify/Documents/Workspace2/BDDFrameworkFreeCRM/src/main/java/Features/dealsmap.feature");
formatter.feature({
  "line": 1,
  "name": "Deal data creation using Map",
  "description": "",
  "id": "deal-data-creation-using-map",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Create a New Contact Scenario",
  "description": "",
  "id": "deal-data-creation-using-map;create-a-new-contact-scenario",
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
        "username",
        "password"
      ],
      "line": 7
    },
    {
      "cells": [
        "manuchandran",
        "1313Man."
      ],
      "line": 8
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user clicks on Login button",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user is on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "user moves to new deals page",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "user enters the deal details",
  "rows": [
    {
      "cells": [
        "title",
        "amount",
        "probability",
        "commission"
      ],
      "line": 14
    },
    {
      "cells": [
        "test deal1",
        "1000",
        "50",
        "10"
      ],
      "line": 15
    },
    {
      "cells": [
        "test deal2",
        "2000",
        "40",
        "20"
      ],
      "line": 16
    },
    {
      "cells": [
        "test deal3",
        "3000",
        "30",
        "30"
      ],
      "line": 17
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "DealWithMapStepDefinition.user_is_already_on_Login_page()"
});
formatter.result({
  "duration": 6725916639,
  "status": "passed"
});
formatter.match({
  "location": "DealWithMapStepDefinition.title_of_Login_page_is_Free_CRM()"
});
formatter.result({
  "duration": 14078043,
  "status": "passed"
});
formatter.match({
  "location": "DealWithMapStepDefinition.user_enters_username_and_password(DataTable)"
});
formatter.result({
  "duration": 234598703,
  "status": "passed"
});
formatter.match({
  "location": "DealWithMapStepDefinition.user_clicks_on_Login_button()"
});
formatter.result({
  "duration": 6384980575,
  "status": "passed"
});
formatter.match({
  "location": "DealWithMapStepDefinition.user_is_on_home_page()"
});
formatter.result({
  "duration": 9255526,
  "status": "passed"
});
formatter.match({
  "location": "DealWithMapStepDefinition.user_moves_to_new_deals_page()"
});
formatter.result({
  "duration": 1828859684,
  "status": "passed"
});
formatter.match({
  "location": "DealWithMapStepDefinition.user_enters_the_deal_details(DataTable)"
});
formatter.result({
  "duration": 10952311205,
  "status": "passed"
});
formatter.match({
  "location": "DealWithMapStepDefinition.close_the_browser()"
});
formatter.result({
  "duration": 3266594886,
  "status": "passed"
});
});