import DS from 'ember-data';

const {
  Model,
  attr,
  belongsTo
} = DS;

export default Model.extend({
  locked      :    attr('boolean'),
  reserved    :    attr('boolean'),
  name        :    attr('number'),

  section     :    belongsTo('section')
});
