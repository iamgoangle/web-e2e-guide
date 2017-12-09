Feature: Test the page title
    As a developer
    I want to be able to test if a page has a certain title

    Scenario: Test "Google"
        Given I open the url "https://google.co.th/"
        And   the page url is "https://www.google.co.th/"
        Then  I expect that the title is "Google"
