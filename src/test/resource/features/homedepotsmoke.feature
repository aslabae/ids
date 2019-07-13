Feature: homedepot web access

  @homedepotsmoke
  Scenario Outline: Home Depot website is accessible and working
    When "<HomeDepotWebAddress>" is typed on the browser address bar

    Then "<HomeDepotMainPage>" should be there

    Examples:
    | HomeDepotWebAddress    |   HomeDepotMainPage |
    | http://homedepot.com   |   The Home Depot    |