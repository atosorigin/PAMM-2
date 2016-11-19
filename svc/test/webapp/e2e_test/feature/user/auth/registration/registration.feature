Feature: Registration
	As a serviceman
	I want to register on the service history portal
	In order to request service record information
	
	Scenario: Register for an account
		Given i am on the registration page
		Given i have entered valid registration information
		Given i have accepted the terms and conditions
		When i request account registration
		Then i should receive a confirmation email
	
	Scenario: Cannot register if user already exists
		Given i have previously registered on the service history portal
		Given i have entered valid registration information
		Given i have accepted the terms and conditions
		When i request account registration
		Then a registration rejection message is displayed
		
	Scenario: Cannot register if user omits mandatory data
		Given i have entered registration information
		Given i have omitted mandatory information
		When i request account registration
		Then a mandatory fields required message is displayed
		