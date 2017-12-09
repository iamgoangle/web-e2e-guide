Feature: Chrome
  As a Software Engineer
  I want create automation script to test on Google chrome browser
  
  Scenario: open chrome web browser
    Given   I have url "google.co.th" to open
    And     I have keyword "teerapong singthong" to "q" for element
    When    open the browser
    And     click "btnG" button
    Then    the page title should "teerapong singthong - Google Search"