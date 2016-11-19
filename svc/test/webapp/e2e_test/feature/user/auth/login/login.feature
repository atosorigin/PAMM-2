Feature: Login
  As a user
  I want my credentials to be recognised
  So I am authorized to use the application

  Scenario: At start up
    Given The user is registered
    And I am on the login view at the start
    Then There are no error messages on the page

  Scenario:Login With no credentials
    Given I try to login without entering any credentials
    Then I stay at the login view and I see an error for missing credentials

  Scenario:Login With Incorrect Details
    Given I login with invalid credentials
    Then I stay at the login view and I see an error for invalid credentials

  Scenario: Login With Correct Details
    Given I login with valid credentials
    Then I see the home page

