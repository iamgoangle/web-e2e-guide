Feature: Title check
  As a Software Engineer
  I want create automation script to test on Google chrome browser
  
  Scenario: Get the page title
    Given I have url "google.co.th" to open
    Then  the page title should "Google"