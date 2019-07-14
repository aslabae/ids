Feature: search

  @search
  Scenario: search bar displays message
    Given Home Depot web app is up
    Then "What can we help you find today?" should be diplayed in the search bar