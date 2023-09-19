 Feature: technical test leboncoin
 

  Scenario: Calculate a factorial of 4

    Given I am on the The greatest factorial calculator landing page
    And I enter the number "4" on the input
    When I click on the button calculate
    Then I see the result display on page
    And I see the following text "The factorial of 4 is: 24"

    
  Scenario: Calculate a factorial of 0

    Given I am on the The greatest factorial calculator landing page
    And I enter the number "0" on the input
    When I click on the button calculate
    Then I see the result display on page
    And I see the following text relate to factorial of 0 "The factorial of 0 is: 0"

    
  #Scenario: Calculate a factorial of negative number

   # Given I am on the The greatest factorial calculator landing page
    #And I enter the number "-6" on the input
    #When I click on the button calculate
    #Then I see the result display on page
    #And I see the following text relate to factorial of -6 "Error. Please enter an integer"