@regression @smoke
Feature: All Departments pop-up image

  Background:
    Given Home Depot web app is up

  @allDepartments
  Scenario Outline: Each department's name in All Deparments menu
                    has to correspond the below table

    When user hovers over "All Departments" menu
    Then user sees "<All Departments item>" <Department Index> in the dropdown list

    Examples:
    | All Departments item      | Department Index |
    | Appliances                |         1        |
    | Bath & Faucets            |         2        |
    | Blinds & Window Treatment |         3        |
    | Building Materials        |         4        |
    | Decor & Furniture         |         5        |
    | Doors & Windows           |         6        |
    | Electrical                |         7        |
    | Flooring & Area Rugs      |         8        |
    | Hardware                  |         9        |
    | Heating & Cooling         |         10       |
    | Kitchen & Kitchenware     |         11       |
    | Lawn & Garden             |         12       |
    | Lighting & Ceiling Fans   |         13       |
    | Outdoor Living            |         14       |
    | Paint                     |         15       |
    | Plumbing                  |         16       |
    | Storage & Organization    |         17       |
    | Tools                     |         18       |


#
#  Scenario: Each department in All Deparments menu
#            has to have a correct popup image
#
#    When user hovers over "All Departments" menu
#    And user hovers over "<All Departments item>"
#    Then each image popup contains "<All Departments item>" in the image link