Feature: Validate reports functionality

  As a user
  I want to validate my reports

  Scenario: Verify the amounts in the 'Inflow vs Outflow' and 'Spending by Category' submenu on the Reports page are the same on the budget table

    Given a user is on the budget page with an empty budget
    When the user adds an outflow category "Car" description "new car" value "500"
    And the user adds an inflow category "Income" description "Paycheck" value "1000"
    And navigates to the Reports Page Inflow vs Outflow menu
    Then the Inflow should be "1,000.00" and the outflow should be "500.00"
