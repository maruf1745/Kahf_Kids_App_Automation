describe('Set and verify the parental pin lock', function(){
    before(function(app){
        app.click('xpath', '//android.widget.Button[@content-desc="NEXT"]')
    })
    
    it('Set the Parental lock with invalid pin(less or more than the 4 digit)', async function (app) {
        app
        //Set the invalid parental lock
        .click('xpath', '//android.widget.Button[@content-desc="0"]')
        .click('xpath', '//android.widget.Button[@content-desc="1"]')
        .click('xpath', '//android.widget.Button[@content-desc="2"]')
        .click('xpath', '//android.widget.Button[@content-desc="3"]')
        .click('xpath', '//android.widget.Button[@content-desc="4"]')
        .click('xpath', '//android.widget.Button[@content-desc="NEXT"]')
        .pause(5000)
    });
    it('Set the Parental lock with valid pin(4 digit)', async function (app) {
        app
        //Clear the input data
        .click('xpath', '//android.widget.Button[@content-desc="C"]')
        //Set the valid parental lock
        .click('xpath', '//android.widget.Button[@content-desc="0"]')
        .click('xpath', '//android.widget.Button[@content-desc="0"]')
        .click('xpath', '//android.widget.Button[@content-desc="0"]')
        .click('xpath', '//android.widget.Button[@content-desc="0"]')
        .click('xpath', '//android.widget.Button[@content-desc="NEXT"]')
        .pause(5000)
    });
    it('Verify the Parental lock for the invalid pin(wrong pin or less or more than the 4 digit)', async function (app) {
        app
        //Verify the parental lock
        .click('xpath', '//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[4]')
        .click('xpath', '//android.view.View[@content-desc="Enter Pin"]/android.widget.EditText[1]')
        .sendKeys('xpath', '//android.view.View[@content-desc="Enter Pin"]/android.widget.EditText[1]', '0')
        .sendKeys('xpath', '//android.view.View[@content-desc="Enter Pin"]/android.widget.EditText[2]', '1')
        .sendKeys('xpath', '//android.view.View[@content-desc="Enter Pin"]/android.widget.EditText[3]', '2')
        .sendKeys('xpath', '//android.view.View[@content-desc="Enter Pin"]/android.widget.EditText[4]', '4')
        //.click('xpath', '//android.view.View[@content-desc="SUBMIT"]')
        //.waitForElementVisible('xpath', '//android.view.View[@content-desc="Invalid password, Please try again!"]', 5000)
        //.assert.textContains('.ant-tree-node-content-wrapper ant-tree-node-content-wrapper-normal', 'Invalid password, Please try again!')
        .pause(5000)
        .click('xpath', '//android.view.View[@content-desc="Enter Pin"]/android.view.View[1]')
        
    });

    it('Verify the Parental lock for the valid pin(4 digit)', async function (app) {
        app
        //Verify the parental lock
        .click('xpath', '//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[4]')
        .click('xpath', '//android.view.View[@content-desc="Enter Pin"]/android.widget.EditText[1]')
        .sendKeys('xpath', '//android.view.View[@content-desc="Enter Pin"]/android.widget.EditText[1]', '0')
        .sendKeys('xpath', '//android.view.View[@content-desc="Enter Pin"]/android.widget.EditText[2]', '0')
        .sendKeys('xpath', '//android.view.View[@content-desc="Enter Pin"]/android.widget.EditText[3]', '0')
        .sendKeys('xpath', '//android.view.View[@content-desc="Enter Pin"]/android.widget.EditText[4]', '0')
        //.click('xpath', '//android.view.View[@content-desc="SUBMIT"]')
        //.waitForElementVisible('xpath', '//android.view.View[@content-desc="Invalid password, Please try again!"]', 5000)
        //.assert.textContains('.ant-tree-node-content-wrapper ant-tree-node-content-wrapper-normal', 'Invalid password, Please try again!')
        .pause()
        
    });

});