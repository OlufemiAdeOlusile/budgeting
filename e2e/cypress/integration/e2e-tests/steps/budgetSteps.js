import { Given, Then, When } from 'cypress-cucumber-preprocessor/steps';
import BudgetPage from '../pages/budgetPage';

let budgetPage = new BudgetPage();

Given(/^a user is on the budget page with an empty budget$/, function() {
  budgetPage.visitBudgetPage().and().clearExistingBudgetTable();
});

When(/^the user adds an outflow category "([^"]*)" description "([^"]*)" value "([^"]*)"$/, (category, description, value) => {
  budgetPage.addItem(category, description, value);
});

When(/^the user adds an inflow category "([^"]*)" description "([^"]*)" value "([^"]*)"$/, (category, description, value) => {
  budgetPage.addItem(category, description, value);
});

Then(/^the total inflow should be "([^"]*)" and total Outflow "([^"]*)" and working Balance "([^"]*)"$/, (inflow, outflow, balance) => {
  budgetPage.verifyBalances(inflow, outflow, balance);
});

Then(/^the user should be able to update the amount "([^"]*)"$/, (amount)=> {
  budgetPage.updateAddedItemAmount(amount)
});
