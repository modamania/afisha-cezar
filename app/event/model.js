import DS from 'ember-data';

var attr = DS.attr;
export default DS.Model.extend({
    title: 			attr('string'),
    review: 		attr('string'),
    cover: 			attr('string'),
    date: 			attr('string'),
    age: 			attr('number'), 
    promoter: 		attr('string'),
    created_at: 	attr('string'), 
    visible: 		attr('boolean'),
    special: 		attr('boolean')
}); 