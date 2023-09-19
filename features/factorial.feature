 Feature: technical test leboncoin
 

  Scenario: Calculate a factorial of 4

    Given I am on the The greatest factorial calculator landing page
    And I enter the number "4" on the input
    When I click on the button calculate
    Then I see the result display on page
    And I see the following text "The factorial of 4 is: 24"

    
  Scenario: Calculate a factorial of -3

    Given I am on the The greatest factorial calculator landing page
    And I enter the number "-3" on the input
    When I click on the button calculate
    Then I see the result display on page
    And I see the following text "The factorial of 4 is: 24"