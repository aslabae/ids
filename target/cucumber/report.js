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
  "name": "Each department in All Deparments menu",
  "description": "            has to have a correct popup image",
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
  "name": "user hovers over \"\u003cAll Departments item\u003e\" by \u003cDepartment Index\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "each image popup contains \"\u003cAll Departments item\u003e\" in the image link",
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
  "name": "Each department in All Deparments menu",
  "description": "            has to have a correct popup image",
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
  "name": "user hovers over \"Appliances\" by 1",
  "keyword": "And "
});
formatter.match({
  "location": "AllDepartmentsItemAndImage.user_hovers_over_by(String,Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "each image popup contains \"Appliances\" in the image link",
  "keyword": "Then "
});
formatter.match({
  "location": "AllDepartmentsItemAndImage.each_image_popup_contains_in_the_image_link(String)"
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
  "name": "Each department in All Deparments menu",
  "description": "            has to have a correct popup image",
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
  "name": "user hovers over \"Bath \u0026 Faucets\" by 2",
  "keyword": "And "
});
formatter.match({
  "location": "AllDepartmentsItemAndImage.user_hovers_over_by(String,Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "each image popup contains \"Bath \u0026 Faucets\" in the image link",
  "keyword": "Then "
});
formatter.match({
  "location": "AllDepartmentsItemAndImage.each_image_popup_contains_in_the_image_link(String)"
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
  "name": "Each department in All Deparments menu",
  "description": "            has to have a correct popup image",
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
  "name": "user hovers over \"Blinds \u0026 Window Treatment\" by 3",
  "keyword": "And "
});
formatter.match({
  "location": "AllDepartmentsItemAndImage.user_hovers_over_by(String,Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "each image popup contains \"Blinds \u0026 Window Treatment\" in the image link",
  "keyword": "Then "
});
formatter.match({
  "location": "AllDepartmentsItemAndImage.each_image_popup_contains_in_the_image_link(String)"
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
  "name": "Each department in All Deparments menu",
  "description": "            has to have a correct popup image",
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
  "name": "user hovers over \"Building Materials\" by 4",
  "keyword": "And "
});
formatter.match({
  "location": "AllDepartmentsItemAndImage.user_hovers_over_by(String,Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "each image popup contains \"Building Materials\" in the image link",
  "keyword": "Then "
});
formatter.match({
  "location": "AllDepartmentsItemAndImage.each_image_popup_contains_in_the_image_link(String)"
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
  "name": "Each department in All Deparments menu",
  "description": "            has to have a correct popup image",
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
  "name": "user hovers over \"Decor \u0026 Furniture\" by 5",
  "keyword": "And "
});
formatter.match({
  "location": "AllDepartmentsItemAndImage.user_hovers_over_by(String,Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "each image popup contains \"Decor \u0026 Furniture\" in the image link",
  "keyword": "Then "
});
formatter.match({
  "location": "AllDepartmentsItemAndImage.each_image_popup_contains_in_the_image_link(String)"
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
  "name": "Each department in All Deparments menu",
  "description": "            has to have a correct popup image",
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
  "name": "user hovers over \"Doors \u0026 Windows\" by 6",
  "keyword": "And "
});
formatter.match({
  "location": "AllDepartmentsItemAndImage.user_hovers_over_by(String,Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "each image popup contains \"Doors \u0026 Windows\" in the image link",
  "keyword": "Then "
});
formatter.match({
  "location": "AllDepartmentsItemAndImage.each_image_popup_contains_in_the_image_link(String)"
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
  "name": "Each department in All Deparments menu",
  "description": "            has to have a correct popup image",
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
  "name": "user hovers over \"Electrical\" by 7",
  "keyword": "And "
});
formatter.match({
  "location": "AllDepartmentsItemAndImage.user_hovers_over_by(String,Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "each image popup contains \"Electrical\" in the image link",
  "keyword": "Then "
});
formatter.match({
  "location": "AllDepartmentsItemAndImage.each_image_popup_contains_in_the_image_link(String)"
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
  "name": "Each department in All Deparments menu",
  "description": "            has to have a correct popup image",
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
  "name": "user hovers over \"Flooring \u0026 Area Rugs\" by 8",
  "keyword": "And "
});
formatter.match({
  "location": "AllDepartmentsItemAndImage.user_hovers_over_by(String,Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "each image popup contains \"Flooring \u0026 Area Rugs\" in the image link",
  "keyword": "Then "
});
formatter.match({
  "location": "AllDepartmentsItemAndImage.each_image_popup_contains_in_the_image_link(String)"
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
  "name": "Each department in All Deparments menu",
  "description": "            has to have a correct popup image",
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
  "name": "user hovers over \"Hardware\" by 9",
  "keyword": "And "
});
formatter.match({
  "location": "AllDepartmentsItemAndImage.user_hovers_over_by(String,Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "each image popup contains \"Hardware\" in the image link",
  "keyword": "Then "
});
formatter.match({
  "location": "AllDepartmentsItemAndImage.each_image_popup_contains_in_the_image_link(String)"
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
  "name": "Each department in All Deparments menu",
  "description": "            has to have a correct popup image",
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
  "name": "user hovers over \"Heating \u0026 Cooling\" by 10",
  "keyword": "And "
});
formatter.match({
  "location": "AllDepartmentsItemAndImage.user_hovers_over_by(String,Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "each image popup contains \"Heating \u0026 Cooling\" in the image link",
  "keyword": "Then "
});
formatter.match({
  "location": "AllDepartmentsItemAndImage.each_image_popup_contains_in_the_image_link(String)"
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
  "name": "Each department in All Deparments menu",
  "description": "            has to have a correct popup image",
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
  "name": "user hovers over \"Kitchen \u0026 Kitchenware\" by 11",
  "keyword": "And "
});
formatter.match({
  "location": "AllDepartmentsItemAndImage.user_hovers_over_by(String,Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "each image popup contains \"Kitchen \u0026 Kitchenware\" in the image link",
  "keyword": "Then "
});
formatter.match({
  "location": "AllDepartmentsItemAndImage.each_image_popup_contains_in_the_image_link(String)"
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
  "name": "Each department in All Deparments menu",
  "description": "            has to have a correct popup image",
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
  "name": "user hovers over \"Lawn \u0026 Garden\" by 12",
  "keyword": "And "
});
formatter.match({
  "location": "AllDepartmentsItemAndImage.user_hovers_over_by(String,Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "each image popup contains \"Lawn \u0026 Garden\" in the image link",
  "keyword": "Then "
});
formatter.match({
  "location": "AllDepartmentsItemAndImage.each_image_popup_contains_in_the_image_link(String)"
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
  "name": "Each department in All Deparments menu",
  "description": "            has to have a correct popup image",
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
  "name": "user hovers over \"Lighting \u0026 Ceiling Fans\" by 13",
  "keyword": "And "
});
formatter.match({
  "location": "AllDepartmentsItemAndImage.user_hovers_over_by(String,Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "each image popup contains \"Lighting \u0026 Ceiling Fans\" in the image link",
  "keyword": "Then "
});
formatter.match({
  "location": "AllDepartmentsItemAndImage.each_image_popup_contains_in_the_image_link(String)"
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
  "name": "Each department in All Deparments menu",
  "description": "            has to have a correct popup image",
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
  "name": "user hovers over \"Outdoor Living\" by 14",
  "keyword": "And "
});
formatter.match({
  "location": "AllDepartmentsItemAndImage.user_hovers_over_by(String,Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "each image popup contains \"Outdoor Living\" in the image link",
  "keyword": "Then "
});
formatter.match({
  "location": "AllDepartmentsItemAndImage.each_image_popup_contains_in_the_image_link(String)"
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
  "name": "Each department in All Deparments menu",
  "description": "            has to have a correct popup image",
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
  "name": "user hovers over \"Paint\" by 15",
  "keyword": "And "
});
formatter.match({
  "location": "AllDepartmentsItemAndImage.user_hovers_over_by(String,Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "each image popup contains \"Paint\" in the image link",
  "keyword": "Then "
});
formatter.match({
  "location": "AllDepartmentsItemAndImage.each_image_popup_contains_in_the_image_link(String)"
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
  "name": "Each department in All Deparments menu",
  "description": "            has to have a correct popup image",
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
  "name": "user hovers over \"Plumbing\" by 16",
  "keyword": "And "
});
formatter.match({
  "location": "AllDepartmentsItemAndImage.user_hovers_over_by(String,Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "each image popup contains \"Plumbing\" in the image link",
  "keyword": "Then "
});
formatter.match({
  "location": "AllDepartmentsItemAndImage.each_image_popup_contains_in_the_image_link(String)"
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
  "name": "Each department in All Deparments menu",
  "description": "            has to have a correct popup image",
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
  "name": "user hovers over \"Storage \u0026 Organization\" by 17",
  "keyword": "And "
});
formatter.match({
  "location": "AllDepartmentsItemAndImage.user_hovers_over_by(String,Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "each image popup contains \"Storage \u0026 Organization\" in the image link",
  "keyword": "Then "
});
formatter.match({
  "location": "AllDepartmentsItemAndImage.each_image_popup_contains_in_the_image_link(String)"
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
  "name": "Each department in All Deparments menu",
  "description": "            has to have a correct popup image",
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
  "name": "user hovers over \"Tools\" by 18",
  "keyword": "And "
});
formatter.match({
  "location": "AllDepartmentsItemAndImage.user_hovers_over_by(String,Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "each image popup contains \"Tools\" in the image link",
  "keyword": "Then "
});
formatter.match({
  "location": "AllDepartmentsItemAndImage.each_image_popup_contains_in_the_image_link(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});