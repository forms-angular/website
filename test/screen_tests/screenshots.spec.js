module.exports = function(framework) {

  function waitForPromiseTest(promiseFn, testFn) {
    browser.wait(function () {
      var deferred = protractor.promise.defer();
      promiseFn().then(function (data) {
        deferred.fulfill(testFn(data));
      });
      return deferred.promise;
    });
  }

  describe('1024x768', function () {

    var width = 1024;
    var height = 768;
    browser.driver.manage().window().setSize(width, height);

    it('a_unadorned_schema', function () {
      browser.setLocation(framework + '/a_unadorned_schema/666a6075b320153869b17599/edit');
      expect($('.header-lhs h4').getText()).toMatch('A Unadorned Schema');
    });

    it('b_enhanced_schema', function () {
      browser.setLocation(framework + '/b_enhanced_schema/519a6075b320153869b155e0/edit');
      expect($('#cke_f_formattedText').getText()).toMatch('Source');  // Wait for ckEditor
      expect($('.header-lhs h4').getText()).toMatch('B Enhanced Schema');
    });

    it('c_subdoc_example', function () {
      browser.setLocation(framework + '/c_subdoc_example/519aaaaab3201fff69b175e0/edit');
      expect($('.header-lhs h4').getText()).toMatch('C Subdoc Example');
    });

    it('d_array_example', function () {
      browser.setLocation(framework + '/d_array_example/51a6182aea4ea77715000005/edit');
      expect($('.header-lhs h4').getText()).toMatch('D Array Example');
    });

    it('e_referencing_another_collection', function () {
      browser.setLocation(framework + '/e_referencing_another_collection/51d1b2ca8c8683571c000005/edit');
      expect($('.header-lhs h4').getText()).toMatch('E Referencing Another Collection');
    });

    it('f_nested_schema', function () {
      browser.setLocation(framework + '/f_nested_schema/51c583d5b5c51226db418f16/edit');
      expect(element.all(by.css('span.select2-chosen')).first().getText()).toMatch('IsAccepted John');
      expect($('.header-lhs h4').getText()).toMatch('F Nested Schema');
    });

    it('g_conditional_field', function () {
      browser.setLocation(framework + '/g_conditional_field/51c583d5b9991226db418f01/edit');
      expect(element.all(by.css('span.select2-chosen')).first().getText()).toMatch('Jones Alan');
      expect($('.header-lhs h4').getText()).toMatch('G Conditional Field');
    });

    it('h_deep_nesting', function () {
      browser.setLocation(framework + '/h_deep_nesting/54c98b797c627d258d04d55d/edit');
      expect(element(by.css('select[name="studies-exams-grader"]')).$('option:checked').getText()).toMatch('IsAccepted John');
      if (framework === 'bs3') {
        // Need to force a resize for some reason
        browser.driver.manage().window().setSize(width - 10, height);
        browser.driver.manage().window().setSize(width, height);
      }
      expect($('.header-lhs h4').getText()).toMatch('Smith Alan');
    });

    it('report and params', function() {
      browser.setLocation('/analyse/g_conditional_field/totalforonesex');
      expect(element(by.css('.header-lhs h1')).getText()).toMatch('Numbers of Applicants By Sex');
    });

  });

  describe('pause', function() {

    it('sometimes needs a second at the end', function () {
      browser.setLocation('/');
      expect($('h3').getText()).toMatch('Probably the most opinionated framework in the world');
    });

  });

};
