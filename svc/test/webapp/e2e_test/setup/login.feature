Feature: Login
  As a user
  I want my credentials to be recognised
  So I am authorized to use the application

  Scenario: Login With Correct Details
    Given The user is registered
    And I am on the login view at the start
    Given I login with valid credentials
    Then I see the home page

