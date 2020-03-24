
class BasePage{

  wait(number){
    cy.wait(number)
  }
   and (){
    return this
   }
}
export default BasePage
