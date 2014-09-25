'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var DSchema = new Schema({
  surname: {type: String, list: {}},
  forename: {type: String, list: true},
  weight: {type: Number, form: {label: 'Weight (lbs)'}},
  dateOfBirth: Date,
  accepted: Boolean,
  specialSubjects: [String],
  hobbies: [{type: String}],
  sports: {type: [String]},
  someOptions: {type: [String], enum:['First','Second','Third']},
  moreOptions: {type: [String], enum:['First','Second','Third'], form:{select2: true}}
});

var D;
try {
  D = mongoose.model('D');
} catch (e) {
  D = mongoose.model('D', DSchema);
}

module.exports = D;

