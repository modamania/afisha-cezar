import DS from 'ember-data';

const {
  Model,
  attr,
  belongsTo,
  hasMany
} = DS;

export default Model.extend({
  available   :   attr('boolean'),
  name        :   attr('number'),
  price       :   attr('number'),

  palace      :   belongsTo('place'),
  seats       :   hasMany('seat')
 });
