Feature: Homepage

  I want to see if the homepage will open

  Scenario: Open the homepage and check the title
    Given I open the website
    Then I see the word "Plant Images App" in the title

  Scenario: Link goes to next.js
    Given I open the website 
    Then I see "https://nextjs.org/" with a "href"