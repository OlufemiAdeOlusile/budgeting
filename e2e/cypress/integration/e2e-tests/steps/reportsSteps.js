import { Then, When } from 'cypress-cucumber-preprocessor/steps';
import ReportsPage from '../pages/reportsPage';

let reportsPage = new ReportsPage();

When(/^navigates to the Reports Page Inflow vs Outflow menu$/, function() {
  reportsPage.landOnPage();
});

Then(/^the Inflow should be "([^"]*)" and the outflow should be "([^"]*)"$/, (inflow, outflow)=> {
  reportsPage.verifyInflowAndOutFlowAmounts(inflow,outflow)
});
