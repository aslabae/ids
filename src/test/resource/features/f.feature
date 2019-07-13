Feature: Balancer

  @balancer
  Scenario Outline: Balancer should detect if string is balanced

    When "<string>" with parenthesis is given
    Then balancer should check if the given string is balanced

    Examples: table of balanced string examples
    | string |
    | (())   |
    | ))((   |
    | (()))) |
    | (())() |
    | ()((()))|