import DS from 'ember-data';

const {
  Model,
  attr,
  belongsTo,
  hasMany
} = DS;

export default Model.extend({
  name        :   attr('string'),
  location    :   attr('string'),

  event       :   belongsTo('event'),
  sections    :   hasMany('section')
});
