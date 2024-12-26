Feature: Home Page Validation
    Background:
        # Given user navigates to the geeks for gee home page
    # @Home
    # Scenario: Validate Home Page
    # When user searches for playwright
    # Then validation of text


    @Home
    Scenario Outline: Validate Leads Home Search
        Given user navigates to the geeks for geeks home page
        When user should be able to enter "<Email>", "<Password>", "<insititutes>"
        Then validation of text
        Examples:

            | Email                | Password            | insititutes               |
            | pranav1@gmail.com    | 123456789@Aa        | pranavinternationalschool |
            