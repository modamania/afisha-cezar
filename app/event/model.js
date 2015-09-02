import DS from 'ember-data';

const {
  Model,
  attr,
  belongsTo
} = DS;

export default Model.extend({
    title: 			attr('string'),
    review: 		attr('string'),
    cover: 			attr('string'),
    date: 			attr('string'),
    time:       attr('string'),
    age: 	  		attr('number', { defaultValue: '16' }),
    created_at: attr('number'),
    visible: 		attr('boolean', { defaultValue: false }),
    special: 		attr('boolean', { defaultValue: false }),

    place:     belongsTo('place')
});
