import BasePage from './basePage';

const REPORTS_LINK = 'a[href*="/reports"]'
const INFLOW_OUTFLOW_LINK = 'a[href*="/reports/inflow-outflow"]'
const X_AXIS_AMOUNTS = '.components-StackedChart-styles__value'

class ReportsPage extends BasePage{

  landOnPage(){
    cy.get(REPORTS_LINK).click()
    cy.get(INFLOW_OUTFLOW_LINK).should('be.visible')
    cy.log('Verified User is on the Reports Page')
  }


  verifyInflowAndOutFlowAmounts(inflow, outflow){
    cy.get(INFLOW_OUTFLOW_LINK).click()

    cy.get(X_AXIS_AMOUNTS).should('contain', inflow)
    cy.log('Verified total inflow: ' +  inflow)

    cy.get(X_AXIS_AMOUNTS).should('contain', outflow)
    cy.log('Verified total outflow: ' +  outflow)
  }

}
export default ReportsPage
