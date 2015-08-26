import DS from 'ember-data';

var attr = DS.attr;
export default DS.Model.extend({
    title: 			attr('string'),
    review: 		attr('string'),
    cover: 			attr('string'),
    date: 			attr('string'),
    time:       attr('string'),
    age: 	  		attr('number', { defaultValue: '16' }),
    created_at: attr('number'),
    visible: 		attr('boolean', { defaultValue: true }),
    special: 		attr('boolean', { defaultValue: false })
});
