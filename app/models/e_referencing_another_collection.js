'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ESchema = new Schema({
  surname: {type: String, list: {}},
  forename: {type: String, list: true},
  weight: {type: Number, form: {label: 'Weight (lbs)'}},
  mentor: { type: Schema.Types.ObjectId, ref: 'c_subdoc_example'},
  teacher: { type: Schema.Types.ObjectId, ref: 'b_enhanced_schema', form: {select2: {fngAjax: true}}},
  dateOfBirth: Date,
  assistants : [{ type: Schema.Types.ObjectId , ref: 'a_unadorned_schema'}],
  assistants2:  { type:[Schema.Types.ObjectId], ref: 'a_unadorned_schema'} ,
  team : [ { type: Schema.Types.ObjectId , ref: 'f_nested_schema', form: {select2: {fngAjax: true}}} ],
  team2:   { type:[Schema.Types.ObjectId], ref: 'f_nested_schema', form: {select2: {fngAjax: true}}},
  accepted: Boolean
});

var E;
try {
  E = mongoose.model('e_referencing_another_collection');
} catch (e) {
  E = mongoose.model('e_referencing_another_collection', ESchema);
}

ESchema.statics.report = function (report) {
  var reportSchema = '';
  switch (report) {
    case 'class-sizes' :
      reportSchema = {
        pipeline: [
          {$group: {_id: '$teacher', count: {'$sum': 1}}}
        ],
        title: 'Class Sizes',
        columnDefs: [
          {field: '_id', displayName: 'Teacher'},
          {field: 'count', displayName: 'Number in Class'}
        ],
        columnTranslations: [
          {field: '_id', ref: 'b_enhanced_schema'}
        ]
      };
      break;
  }
  return reportSchema;
};

module.exports = {
  model: E
};


