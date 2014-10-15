'use strict';

describe('Select and select2', function () {

  var width = 1024;
  var height = 768;
  var browser = protractor.getInstance();
  browser.driver.manage().window().setSize(width, height);

  it('should handle enums', function () {
    browser.get('/#/b_enhanced_schema/519a6075b320153869b155e0/edit');
    expect($('#s2id_f_eyeColour').getText()).toMatch(/Brown/);
  });

  it('should handle lookups using Ajax', function () {
    browser.get('/#/f_nested_schema/51c583d5b5c51226db418f16/edit');
    expect($('#s2id_autogen1 > a > span.select2-chosen').getText()).toMatch(/IsAccepted/);
  });

  it('should do all the arrays in d as expected', function(){

    function addToArray(field, number) {
      var input;
      var addButton = element(by.id('add_f_' + field));
      if (!number) { number = 2; }
      for (var i = 0; i < number; i++)
        {
        addButton.click();
        input = element(by.id('f_' + field + '_' + i));
        input.clear();
        input.sendKeys(field + ' ' + i);
        }
    }

    function checkArray(field, number) {
      var input;
      if (!number) { number = 2; }
      for (var i = 0; i < number; i++)
        {
        expect(element(by.id('f_' + field + '_' + i)).getAttribute('value')).toBe(field + ' ' + i);
        }
    }

    function checkValues() {
      checkArray('specialSubjects');
      checkArray('hobbies');
      checkArray('sports');
      expect(element(by.id('f_someOptions_0')).getAttribute('value')).toBe('Second');
      expect(element(by.id('f_someOptions_1')).getAttribute('value')).toBe('Third');
      expect(element(by.id('f_moreOptions_0')).getAttribute('value')).toBe('1');
      expect(element(by.css('#s2id_f_moreOptions_0 span.select2-chosen')).getText()).toBe('Second');
      expect(element(by.id('f_moreOptions_1')).getAttribute('value')).toBe('2');
      expect(element(by.css('#s2id_f_moreOptions_1 span.select2-chosen')).getText()).toBe('Third');
    }

    browser.get('/#/d_array_example/new');
    addToArray('specialSubjects');
    addToArray('hobbies');
    addToArray('sports');

    var addSelect = element(by.id('add_f_someOptions'));
    addSelect.click();
    expect(element(by.id('f_someOptions_0')).getAttribute('class')).toMatch('ng-pristine');
    element(by.cssContainingText('#f_someOptions_0 option', 'Second')).click();
    addSelect.click();
    expect(element(by.id('f_someOptions_1')).getAttribute('class')).toMatch('ng-pristine');
    element(by.cssContainingText('#f_someOptions_1 option', 'Third')).click();

    addSelect = element(by.id('add_f_moreOptions'));
    addSelect.click();
    expect(element(by.id('f_moreOptions_0')).getAttribute('class')).toMatch('ng-pristine');
    element(by.css('#s2id_f_moreOptions_0 .select2-arrow')).click();
    var input = element.all(by.css('.select2-input')).first();
    input.sendKeys('Sec');
    input.sendKeys(protractor.Key.ENTER);
    addSelect.click();
    expect(element(by.id('f_moreOptions_1')).getAttribute('class')).toMatch('ng-pristine');
    element(by.css('#s2id_f_moreOptions_1 .select2-arrow')).click();
    input = element.all(by.css('.select2-input')).last();
    input.sendKeys('Th');
    input.sendKeys(protractor.Key.ENTER);
    checkValues();

    // Save the record and check they all refresh OK
    element(by.css('#saveButton')).click();
    browser.switchTo().alert().then(function (alert) {alert.accept() });    // THis model has an onSave event
    expect(browser.getCurrentUrl()).toMatch(/d_array_example\/[0-9a-f]{24}\/edit/);
    checkValues();

  });

  it('should do all the arrays in e as expected', function(){

    function checkValues() {
      expect(element(by.id('f_mentor')).getAttribute('value')).toBe('Anderson John');
      expect(element(by.id('f_teacher')).getAttribute('value')).toBe('519a6075b320153869b155e0');
      expect(element(by.css('#s2id_f_teacher')).getAttribute('class')).toMatch('select2-allowclear');
      expect(element(by.id('f_assistants_0')).getAttribute('value')).toBe('TestPerson1');
      expect(element(by.id('f_assistants_1')).getAttribute('value')).toBe('TestPerson2');
      expect(element(by.id('f_assistants2_0')).getAttribute('value')).toBe('TestPerson1');
      expect(element(by.id('f_assistants2_1')).getAttribute('value')).toBe('TestPerson2');
      expect(element(by.id('f_team_0')).getAttribute('value')).toBe('51c583d5b5c51226db418f15');
      expect(element(by.css('#s2id_f_team_0 span.select2-chosen')).getText()).toBe('Brown John');
      expect(element(by.id('f_team_1')).getAttribute('value')).toBe('51c583d5b5c51226db418f17');
      expect(element(by.css('#s2id_f_team_1 span.select2-chosen')).getText()).toBe('Brown Jenny');
      expect(element(by.id('f_team2_0')).getAttribute('value')).toBe('51c583d5b5c51226db418f15');
      expect(element(by.css('#s2id_f_team2_0 span.select2-chosen')).getText()).toBe('Brown John');
      expect(element(by.id('f_team2_1')).getAttribute('value')).toBe('51c583d5b5c51226db418f17');
      expect(element(by.css('#s2id_f_team2_1 span.select2-chosen')).getText()).toBe('Brown Jenny');
    }

    browser.get('/#/e_referencing_another_collection/new');
    expect(element(by.css('#s2id_f_teacher')).getAttribute('class')).not.toMatch('select2-allowclear');
    element(by.cssContainingText('#f_mentor option', 'Anderson John')).click();
    element(by.css('#s2id_f_teacher .select2-arrow')).click();
    var input = element.all(by.css('.select2-input')).first();
    input.sendKeys('Is');
    input.sendKeys(protractor.Key.ENTER);

    var addSelect = element(by.id('add_f_assistants'));
    addSelect.click();
    expect(element(by.id('f_assistants_0')).getAttribute('class')).toMatch('ng-pristine');
    element(by.cssContainingText('#f_assistants_0 option', 'TestPerson1')).click();
    addSelect.click();
    expect(element(by.id('f_assistants_1')).getAttribute('class')).toMatch('ng-pristine');
    element(by.cssContainingText('#f_assistants_1 option', 'TestPerson2')).click();

    addSelect = element(by.id('add_f_assistants2'));
    addSelect.click();
    expect(element(by.id('f_assistants2_0')).getAttribute('class')).toMatch('ng-pristine');
    element(by.cssContainingText('#f_assistants2_0 option', 'TestPerson1')).click();
    addSelect.click();
    expect(element(by.id('f_assistants2_1')).getAttribute('class')).toMatch('ng-pristine');
    element(by.cssContainingText('#f_assistants2_1 option', 'TestPerson2')).click();

    addSelect = element(by.id('add_f_team'));
    addSelect.click();
    expect(element(by.id('f_team_0')).getAttribute('class')).toMatch('ng-pristine');
    element(by.css('#s2id_f_team_0 .select2-arrow')).click();
    input = element.all(by.css('.select2-input')).get(1);
    input.sendKeys('Jo');
    input.sendKeys(protractor.Key.ENTER);
    addSelect.click();
    expect(element(by.id('f_team_1')).getAttribute('class')).toMatch('ng-pristine');
    element(by.css('#s2id_f_team_1 .select2-arrow')).click();
    input = element.all(by.css('.select2-input')).get(2);
    input.sendKeys('Je');
    input.sendKeys(protractor.Key.ENTER);

    addSelect = element(by.id('add_f_team2'));
    addSelect.click();
    expect(element(by.id('f_team2_0')).getAttribute('class')).toMatch('ng-pristine');
    element(by.css('#s2id_f_team2_0 .select2-arrow')).click();
    input = element.all(by.css('.select2-input')).get(3);
    input.sendKeys('Jo');
    input.sendKeys(protractor.Key.ENTER);
    addSelect.click();
    expect(element(by.id('f_team2_1')).getAttribute('class')).toMatch('ng-pristine');
    element(by.css('#s2id_f_team2_1 .select2-arrow')).click();
    input = element.all(by.css('.select2-input')).get(4);
    input.sendKeys('Je');
    input.sendKeys(protractor.Key.ENTER);

    checkValues();

    // Save the record and check they all refresh OK
    element(by.css('#saveButton')).click();
    expect(browser.getCurrentUrl()).toMatch(/e_referencing_another_collection\/[0-9a-f]{24}\/edit/);
    checkValues();

  });

});

