// spec.js
describe('Testing Headers CRUD Module', function() {

var Header = function() {
        
        var headers = element(by.id('headers'));
        this.setHeaders = function(headersText) { headers.clear(); headers.sendKeys(headersText); };
        
         
        this.get = function() {
                                   browser.get('http://localhost:5000/');
                                       };    
        
        this.toast = function(message){
                                        $('.form-button .button-primary').click()  // css selectors http://angular.github.io/protractor/#/api?view=build$  
                                            .then(function() {     
                                                  var EC = protractor.ExpectedConditions;
                                                  var toastMessage = $('.toast-message');                                      
                                                  browser.wait(EC.visibilityOf(toastMessage), 6000) //wait until toast is displayed
                                                             .then(function(){
                                                                    expect(toastMessage.getText()).toBe(message);

                                                                        });
                                                                  });                                                    
                                    }                    
                    };
    
it('Should add a new Header', function() {
    
    var header = new Header();
    
    // Get headers URL
    header.get();
    
    // Goto the new menu    
    element(by.id('headers_menu')).click();
    element(by.id('headers_new')).click();
    
    // Fill in the Fields
    
        header.setHeaders("Your Body text here 77569yuii3wui&%$$^"); 

    //Expectations
    header.toast("Header saved successfully");
                 
  });
      
it('Should  edit a Header', function() {

    var header = new Header();
    
    header.get();
    
    //Goto the edit menu
    element(by.id('headers_menu')).click();
    element(by.id('headers_list')).click(); 
    element(by.css('.ag-row-level-0')).click();
    element(by.id('editButton')).click();
     
    // Fill in the fields
    
        header.setHeaders("Your Updated Body text here 77569yuii3wui&%$$^"); 
    
    //Expectations
    header.toast("Update was a success");
      
 

});
    
it('Should  delete a Header', function() {
    browser.get('http://localhost:5000/');
    element(by.id('headers_menu')).click();
    element(by.id('headers_list')).click();
    element(by.css('.ag-row-level-0')).click();
    element(by.id('deleteButton')).click()
            
    .then(function(){

        var EC = protractor.ExpectedConditions;
        var toastMessage = $('.toast-message');

         browser.wait(EC.visibilityOf(toastMessage), 60) //wait until toast is displayed
            .then(function(){

                expect(toastMessage.getText()).toBe("Header deleted successfully")

      });
  
  });
});
      
  });
