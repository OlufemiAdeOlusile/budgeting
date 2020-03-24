Feature: Validate budget functionality

  As a user
  I want to validate my budget

  Scenario: Verify that the total Inflow subtracted from the Total Outflow gives you the correct Working Balance
    Given a user is on the budget page with an empty budget
    When the user adds an outflow category "Car" description "new car" value "500"
    And the user adds an inflow category "Income" description "Paycheck" value "1000"
    Then the total inflow should be "1,000.00" and total Outflow "500.00" and working Balance "500.00"


  Scenario: Verify that a user can update a category amount when only one row exists on the table

    Given a user is on the budget page with an empty budget
    When the user adds an inflow category "Income" description "Paycheck" value "1000"
    Then the user should be able to update the amount "500"



