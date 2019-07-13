$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resource/features/hdAllDepartmentsPopupImages.feature");
formatter.feature({
  "name": "All Departments pop-up image",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@regression"
    },
    {
      "name": "@smoke"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Each department\u0027s name in All Deparments menu",
  "description": "                    has to correspond the below table",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@allDepartments"
    }
  ]
});
formatter.step({
  "name": "user hovers over \"All Departments\" menu",
  "keyword": "When "
});
formatter.step({
  "name": "user sees \"\u003cAll Departments item\u003e\" \u003cDepartment Index\u003e in the dropdown list",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "All Departments item",
        "Department Index"
      ]
    },
    {
      "cells": [
        "Appliances",
        "1"
      ]
    },
    {
      "cells": [
        "Bath \u0026 Faucets",
        "2"
      ]
    },
    {
      "cells": [
        "Blinds \u0026 Window Treatment",
        "3"
      ]
    },
    {
      "cells": [
        "Building Materials",
        "4"
      ]
    },
    {
      "cells": [
        "Decor \u0026 Furniture",
        "5"
      ]
    },
    {
      "cells": [
        "Doors \u0026 Windows",
        "6"
      ]
    },
    {
      "cells": [
        "Electrical",
        "7"
      ]
    },
    {
      "cells": [
        "Flooring \u0026 Area Rugs",
        "8"
      ]
    },
    {
      "cells": [
        "Hardware",
        "9"
      ]
    },
    {
      "cells": [
        "Heating \u0026 Cooling",
        "10"
      ]
    },
    {
      "cells": [
        "Kitchen \u0026 Kitchenware",
        "11"
      ]
    },
    {
      "cells": [
        "Lawn \u0026 Garden",
        "12"
      ]
    },
    {
      "cells": [
        "Lighting \u0026 Ceiling Fans",
        "13"
      ]
    },
    {
      "cells": [
        "Outdoor Living",
        "14"
      ]
    },
    {
      "cells": [
        "Paint",
        "15"
      ]
    },
    {
      "cells": [
        "Plumbing",
        "16"
      ]
    },
    {
      "cells": [
        "Storage \u0026 Organization",
        "17"
      ]
    },
    {
      "cells": [
        "Tools",
        "18"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "Home Depot web app is up",
  "keyword": "Given "
});
formatter.match({
  "location": "AllDepartmentsItemAndImage.home_Depot_web_app_is_up()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Each department\u0027s name in All Deparments menu",
  "description": "                    has to correspond the below table",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@regression"
    },
    {
      "name": "@smoke"
    },
    {
      "name": "@allDepartments"
    }
  ]
});
formatter.step({
  "name": "user hovers over \"All Departments\" menu",
  "keyword": "When "
});
formatter.match({
  "location": "AllDepartmentsItemAndImage.user_hovers_over_menu(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user sees \"Appliances\" 1 in the dropdown list",
  "keyword": "Then "
});
formatter.match({
  "location": "AllDepartmentsItemAndImage.user_sees_in_the_dropdown_list(String,Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "Home Depot web app is up",
  "keyword": "Given "
});
formatter.match({
  "location": "AllDepartmentsItemAndImage.home_Depot_web_app_is_up()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Each department\u0027s name in All Deparments menu",
  "description": "                    has to correspond the below table",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@regression"
    },
    {
      "name": "@smoke"
    },
    {
      "name": "@allDepartments"
    }
  ]
});
formatter.step({
  "name": "user hovers over \"All Departments\" menu",
  "keyword": "When "
});
formatter.match({
  "location": "AllDepartmentsItemAndImage.user_hovers_over_menu(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user sees \"Bath \u0026 Faucets\" 2 in the dropdown list",
  "keyword": "Then "
});
formatter.match({
  "location": "AllDepartmentsItemAndImage.user_sees_in_the_dropdown_list(String,Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "Home Depot web app is up",
  "keyword": "Given "
});
formatter.match({
  "location": "AllDepartmentsItemAndImage.home_Depot_web_app_is_up()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Each department\u0027s name in All Deparments menu",
  "description": "                    has to correspond the below table",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@regression"
    },
    {
      "name": "@smoke"
    },
    {
      "name": "@allDepartments"
    }
  ]
});
formatter.step({
  "name": "user hovers over \"All Departments\" menu",
  "keyword": "When "
});
formatter.match({
  "location": "AllDepartmentsItemAndImage.user_hovers_over_menu(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user sees \"Blinds \u0026 Window Treatment\" 3 in the dropdown list",
  "keyword": "Then "
});
formatter.match({
  "location": "AllDepartmentsItemAndImage.user_sees_in_the_dropdown_list(String,Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "Home Depot web app is up",
  "keyword": "Given "
});
formatter.match({
  "location": "AllDepartmentsItemAndImage.home_Depot_web_app_is_up()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Each department\u0027s name in All Deparments menu",
  "description": "                    has to correspond the below table",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@regression"
    },
    {
      "name": "@smoke"
    },
    {
      "name": "@allDepartments"
    }
  ]
});
formatter.step({
  "name": "user hovers over \"All Departments\" menu",
  "keyword": "When "
});
formatter.match({
  "location": "AllDepartmentsItemAndImage.user_hovers_over_menu(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user sees \"Building Materials\" 4 in the dropdown list",
  "keyword": "Then "
});
formatter.match({
  "location": "AllDepartmentsItemAndImage.user_sees_in_the_dropdown_list(String,Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "Home Depot web app is up",
  "keyword": "Given "
});
formatter.match({
  "location": "AllDepartmentsItemAndImage.home_Depot_web_app_is_up()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Each department\u0027s name in All Deparments menu",
  "description": "                    has to correspond the below table",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@regression"
    },
    {
      "name": "@smoke"
    },
    {
      "name": "@allDepartments"
    }
  ]
});
formatter.step({
  "name": "user hovers over \"All Departments\" menu",
  "keyword": "When "
});
formatter.match({
  "location": "AllDepartmentsItemAndImage.user_hovers_over_menu(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user sees \"Decor \u0026 Furniture\" 5 in the dropdown list",
  "keyword": "Then "
});
formatter.match({
  "location": "AllDepartmentsItemAndImage.user_sees_in_the_dropdown_list(String,Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "Home Depot web app is up",
  "keyword": "Given "
});
formatter.match({
  "location": "AllDepartmentsItemAndImage.home_Depot_web_app_is_up()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Each department\u0027s name in All Deparments menu",
  "description": "                    has to correspond the below table",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@regression"
    },
    {
      "name": "@smoke"
    },
    {
      "name": "@allDepartments"
    }
  ]
});
formatter.step({
  "name": "user hovers over \"All Departments\" menu",
  "keyword": "When "
});
formatter.match({
  "location": "AllDepartmentsItemAndImage.user_hovers_over_menu(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user sees \"Doors \u0026 Windows\" 6 in the dropdown list",
  "keyword": "Then "
});
formatter.match({
  "location": "AllDepartmentsItemAndImage.user_sees_in_the_dropdown_list(String,Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "Home Depot web app is up",
  "keyword": "Given "
});
formatter.match({
  "location": "AllDepartmentsItemAndImage.home_Depot_web_app_is_up()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Each department\u0027s name in All Deparments menu",
  "description": "                    has to correspond the below table",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@regression"
    },
    {
      "name": "@smoke"
    },
    {
      "name": "@allDepartments"
    }
  ]
});
formatter.step({
  "name": "user hovers over \"All Departments\" menu",
  "keyword": "When "
});
formatter.match({
  "location": "AllDepartmentsItemAndImage.user_hovers_over_menu(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user sees \"Electrical\" 7 in the dropdown list",
  "keyword": "Then "
});
formatter.match({
  "location": "AllDepartmentsItemAndImage.user_sees_in_the_dropdown_list(String,Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "Home Depot web app is up",
  "keyword": "Given "
});
formatter.match({
  "location": "AllDepartmentsItemAndImage.home_Depot_web_app_is_up()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Each department\u0027s name in All Deparments menu",
  "description": "                    has to correspond the below table",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@regression"
    },
    {
      "name": "@smoke"
    },
    {
      "name": "@allDepartments"
    }
  ]
});
formatter.step({
  "name": "user hovers over \"All Departments\" menu",
  "keyword": "When "
});
formatter.match({
  "location": "AllDepartmentsItemAndImage.user_hovers_over_menu(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user sees \"Flooring \u0026 Area Rugs\" 8 in the dropdown list",
  "keyword": "Then "
});
formatter.match({
  "location": "AllDepartmentsItemAndImage.user_sees_in_the_dropdown_list(String,Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "Home Depot web app is up",
  "keyword": "Given "
});
formatter.match({
  "location": "AllDepartmentsItemAndImage.home_Depot_web_app_is_up()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Each department\u0027s name in All Deparments menu",
  "description": "                    has to correspond the below table",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@regression"
    },
    {
      "name": "@smoke"
    },
    {
      "name": "@allDepartments"
    }
  ]
});
formatter.step({
  "name": "user hovers over \"All Departments\" menu",
  "keyword": "When "
});
formatter.match({
  "location": "AllDepartmentsItemAndImage.user_hovers_over_menu(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user sees \"Hardware\" 9 in the dropdown list",
  "keyword": "Then "
});
formatter.match({
  "location": "AllDepartmentsItemAndImage.user_sees_in_the_dropdown_list(String,Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "Home Depot web app is up",
  "keyword": "Given "
});
formatter.match({
  "location": "AllDepartmentsItemAndImage.home_Depot_web_app_is_up()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Each department\u0027s name in All Deparments menu",
  "description": "                    has to correspond the below table",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@regression"
    },
    {
      "name": "@smoke"
    },
    {
      "name": "@allDepartments"
    }
  ]
});
formatter.step({
  "name": "user hovers over \"All Departments\" menu",
  "keyword": "When "
});
formatter.match({
  "location": "AllDepartmentsItemAndImage.user_hovers_over_menu(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user sees \"Heating \u0026 Cooling\" 10 in the dropdown list",
  "keyword": "Then "
});
formatter.match({
  "location": "AllDepartmentsItemAndImage.user_sees_in_the_dropdown_list(String,Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "Home Depot web app is up",
  "keyword": "Given "
});
formatter.match({
  "location": "AllDepartmentsItemAndImage.home_Depot_web_app_is_up()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Each department\u0027s name in All Deparments menu",
  "description": "                    has to correspond the below table",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@regression"
    },
    {
      "name": "@smoke"
    },
    {
      "name": "@allDepartments"
    }
  ]
});
formatter.step({
  "name": "user hovers over \"All Departments\" menu",
  "keyword": "When "
});
formatter.match({
  "location": "AllDepartmentsItemAndImage.user_hovers_over_menu(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user sees \"Kitchen \u0026 Kitchenware\" 11 in the dropdown list",
  "keyword": "Then "
});
formatter.match({
  "location": "AllDepartmentsItemAndImage.user_sees_in_the_dropdown_list(String,Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "Home Depot web app is up",
  "keyword": "Given "
});
formatter.match({
  "location": "AllDepartmentsItemAndImage.home_Depot_web_app_is_up()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Each department\u0027s name in All Deparments menu",
  "description": "                    has to correspond the below table",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@regression"
    },
    {
      "name": "@smoke"
    },
    {
      "name": "@allDepartments"
    }
  ]
});
formatter.step({
  "name": "user hovers over \"All Departments\" menu",
  "keyword": "When "
});
formatter.match({
  "location": "AllDepartmentsItemAndImage.user_hovers_over_menu(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user sees \"Lawn \u0026 Garden\" 12 in the dropdown list",
  "keyword": "Then "
});
formatter.match({
  "location": "AllDepartmentsItemAndImage.user_sees_in_the_dropdown_list(String,Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "Home Depot web app is up",
  "keyword": "Given "
});
formatter.match({
  "location": "AllDepartmentsItemAndImage.home_Depot_web_app_is_up()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Each department\u0027s name in All Deparments menu",
  "description": "                    has to correspond the below table",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@regression"
    },
    {
      "name": "@smoke"
    },
    {
      "name": "@allDepartments"
    }
  ]
});
formatter.step({
  "name": "user hovers over \"All Departments\" menu",
  "keyword": "When "
});
formatter.match({
  "location": "AllDepartmentsItemAndImage.user_hovers_over_menu(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user sees \"Lighting \u0026 Ceiling Fans\" 13 in the dropdown list",
  "keyword": "Then "
});
formatter.match({
  "location": "AllDepartmentsItemAndImage.user_sees_in_the_dropdown_list(String,Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "Home Depot web app is up",
  "keyword": "Given "
});
formatter.match({
  "location": "AllDepartmentsItemAndImage.home_Depot_web_app_is_up()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Each department\u0027s name in All Deparments menu",
  "description": "                    has to correspond the below table",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@regression"
    },
    {
      "name": "@smoke"
    },
    {
      "name": "@allDepartments"
    }
  ]
});
formatter.step({
  "name": "user hovers over \"All Departments\" menu",
  "keyword": "When "
});
formatter.match({
  "location": "AllDepartmentsItemAndImage.user_hovers_over_menu(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user sees \"Outdoor Living\" 14 in the dropdown list",
  "keyword": "Then "
});
formatter.match({
  "location": "AllDepartmentsItemAndImage.user_sees_in_the_dropdown_list(String,Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "Home Depot web app is up",
  "keyword": "Given "
});
formatter.match({
  "location": "AllDepartmentsItemAndImage.home_Depot_web_app_is_up()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Each department\u0027s name in All Deparments menu",
  "description": "                    has to correspond the below table",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@regression"
    },
    {
      "name": "@smoke"
    },
    {
      "name": "@allDepartments"
    }
  ]
});
formatter.step({
  "name": "user hovers over \"All Departments\" menu",
  "keyword": "When "
});
formatter.match({
  "location": "AllDepartmentsItemAndImage.user_hovers_over_menu(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user sees \"Paint\" 15 in the dropdown list",
  "keyword": "Then "
});
formatter.match({
  "location": "AllDepartmentsItemAndImage.user_sees_in_the_dropdown_list(String,Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "Home Depot web app is up",
  "keyword": "Given "
});
formatter.match({
  "location": "AllDepartmentsItemAndImage.home_Depot_web_app_is_up()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Each department\u0027s name in All Deparments menu",
  "description": "                    has to correspond the below table",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@regression"
    },
    {
      "name": "@smoke"
    },
    {
      "name": "@allDepartments"
    }
  ]
});
formatter.step({
  "name": "user hovers over \"All Departments\" menu",
  "keyword": "When "
});
formatter.match({
  "location": "AllDepartmentsItemAndImage.user_hovers_over_menu(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user sees \"Plumbing\" 16 in the dropdown list",
  "keyword": "Then "
});
formatter.match({
  "location": "AllDepartmentsItemAndImage.user_sees_in_the_dropdown_list(String,Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "Home Depot web app is up",
  "keyword": "Given "
});
formatter.match({
  "location": "AllDepartmentsItemAndImage.home_Depot_web_app_is_up()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Each department\u0027s name in All Deparments menu",
  "description": "                    has to correspond the below table",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@regression"
    },
    {
      "name": "@smoke"
    },
    {
      "name": "@allDepartments"
    }
  ]
});
formatter.step({
  "name": "user hovers over \"All Departments\" menu",
  "keyword": "When "
});
formatter.match({
  "location": "AllDepartmentsItemAndImage.user_hovers_over_menu(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user sees \"Storage \u0026 Organization\" 17 in the dropdown list",
  "keyword": "Then "
});
formatter.match({
  "location": "AllDepartmentsItemAndImage.user_sees_in_the_dropdown_list(String,Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "Home Depot web app is up",
  "keyword": "Given "
});
formatter.match({
  "location": "AllDepartmentsItemAndImage.home_Depot_web_app_is_up()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Each department\u0027s name in All Deparments menu",
  "description": "                    has to correspond the below table",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@regression"
    },
    {
      "name": "@smoke"
    },
    {
      "name": "@allDepartments"
    }
  ]
});
formatter.step({
  "name": "user hovers over \"All Departments\" menu",
  "keyword": "When "
});
formatter.match({
  "location": "AllDepartmentsItemAndImage.user_hovers_over_menu(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user sees \"Tools\" 18 in the dropdown list",
  "keyword": "Then "
});
formatter.match({
  "location": "AllDepartmentsItemAndImage.user_sees_in_the_dropdown_list(String,Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});