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
    And I should see the following text relate to factorial of 0 "The factorial of 0 is: 1"

    
  Scenario: Calculate a factorial of negative number

    Given I am on the The greatest factorial calculator landing page
    And I enter the number "-6" on the input
    When I click on the button calculate
    Then I should see on the screen an error "Please enter an integer" 
    #Il semblerait qu'il est un bug ici. Je ne connais pas le message qui est censé être affiché dans ce cas de figure. J'ai mis un msg générique

  Scenario: Requesting the Privacy Statement Page
    Given I have the API endpoint "https://pandaqaetest.pythonanywhere.com/privacy"
    When I make a GET request to the endpoint
    Then the response should have a status code of 200 OK
    And the response should contain the text "This is the privacy document. We are not yet ready with it. Stay tuned!"


  Scenario: Requesting the Privacy Statement Page
    Given I have the API endpoint "https://pandaqaetest.pythonanywhere.com/terms"
    When I make a GET request to the endpoint
    Then the response should have a status code of 200 OK
    And the response should contain the text "This is the terms and conditions document. We are not yet ready with it. Stay tuned!"

  Scenario: Calculate a factorial of 4 using GET
    Given I have the API endpoint "https://pandaqaetest.pythonanywhere.com/"
    When I make a GET request to the endpoint with the query parameter "number" set to "4"
    Then the response should have a status code of 200 OK
    And the response should contain the text "answer:24"

  Scenario:  Calculate a factorial of 4 using POST
    Given I have the API endpoint "https://pandaqaetest.pythonanywhere.com/"
    When I make a POST request to the endpoint with the request body:
      """
      {
        "number": 4
      }
      """
    Then the response should have a status code of 200 OK
    And the response should contain the text "answer:24"
    