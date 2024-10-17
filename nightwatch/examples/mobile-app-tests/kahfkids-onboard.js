describe('Kahf Kids App testing', function(){
    before(function(app){
        app.click('xpath', '//android.widget.Button[@content-desc="NEXT"]')
    })
    it('Kahf Kids Parents Onboard', async function (app) {
        app
        .click('xpath', '//android.widget.Button[@content-desc="0"]')
        .click('xpath', '//android.widget.Button[@content-desc="0"]')
        .click('xpath', '//android.widget.Button[@content-desc="0"]')
        .click('xpath', '//android.widget.Button[@content-desc="0"]')
        .click('xpath', '//android.widget.Button[@content-desc="NEXT"]')
        .pause()
    })
});