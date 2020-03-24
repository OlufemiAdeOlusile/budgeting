import BasePage from './basePage';

const URL = '/budget'
const BUDGET_TABLE = '.containers-BudgetGrid-style__budgetGrid'
const DELETE_ROW = '.containers-EntryFormRow-style__btnRed'
const CATEGORY = '[name=categoryId]'
const DESCRIPTION = '[name=description]'
const VALUE = '[name=value]'
const ADD_BUTTON = '.containers-EntryFormRow-style__btnGreen'
const POS_FLOW = '.components-Balance-style__pos'
const NEG_FLOW = '.components-Balance-style__neg'
const TIMEOUT = 100000;
const WAIT_TIMEOUT = 100;

class BudgetPage extends BasePage {

  visitBudgetPage() {
    cy.visit(URL);
    cy.get(BUDGET_TABLE).should('be.visible');
    cy.log('Verified User is on the Budget Page');
    return this;
  }

  clearExistingBudgetTable() {
    this.wait(WAIT_TIMEOUT);
    cy.get(BUDGET_TABLE).find('tbody>tr').each((row) => {
      cy.get(row.first().find('td').first(), { timeout: TIMEOUT }).should('not.have.class', 'disabled').click();
      cy.get(DELETE_ROW).click();
    });
    cy.log('Emptied the Budget Table');
  }


  addItem(category, description, value) {
    cy.get(CATEGORY).select(category);
    cy.log('Filled the Category with ' + category);

    cy.get(DESCRIPTION).clear().type(description);
    cy.log('Filled the Description with ' + description);

    cy.get(VALUE).clear().type(value);
    cy.log('Filled the Value with ' + value);

    cy.get(ADD_BUTTON, { timeout: 100000 }).should('not.have.class', 'disabled').click();
    this.wait(1000);
    cy.log('Item has been added');
  }

  verifyBalances(inflow, outflow, balance) {
    cy.get(POS_FLOW).should('contain', inflow);
    cy.log('Verified total inflow: ' + inflow);

    cy.get(NEG_FLOW).should('contain', outflow);
    cy.log('Verified total outflow: ' + outflow);

    cy.get(POS_FLOW).should('contain', balance);
    cy.log('Verified total balance: ' + balance);

  }

  updateAddedItemAmount(amount){
    this.wait(WAIT_TIMEOUT);
    cy.get(BUDGET_TABLE).find('tbody>tr').each((row) => {
      cy.get(row.first().find('td').first(), { timeout: 100000 }).should('not.have.class', 'disabled').click();
    });
    cy.get(VALUE).eq(0).clear().type(amount)
    cy.contains('UPDATE').click()
    cy.log('Amount has been updated' + amount);
  }


}

export default BudgetPage;
