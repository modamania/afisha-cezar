import DS from 'ember-data';

var attr = DS.attr;
export default DS.Model.extend({
    title: 			attr('string'),
    review: 		attr('string'),
    cover: 			attr('string'),
    date: 			attr('string', 	{ defaultValue: '0001-01-01T00:00:00.000000+10:00' }),
    age: 			attr('number', 	{ defaultValue: '16' }), 
    promoter: 		attr('string'),
    created_at: 	attr('string', 	{ defaultValue: '0001-01-01T00:00:00.000000+10:00' }), 
    visible: 		attr('boolean', { defaultValue: true }),
    special: 		attr('boolean', { defaultValue: false })
}); 