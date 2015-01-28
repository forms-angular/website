module.exports = function(framework) {

  describe('1024x768', function () {

    var width = 1024;
    var height = 768;
    browser.driver.manage().window().setSize(width, height);

    it('a_unadorned_schema', function () {
      browser.setLocation(framework + '/a_unadorned_schema/666a6075b320153869b17599/edit');
    });

    it('b_enhanced_schema', function () {
      browser.setLocation(framework + '/b_enhanced_schema/519a6075b320153869b155e0/edit');
      expect($('#cke_f_formattedText').getText()).toMatch('Source');  // Wait for ckEditor
    });

  });

};
