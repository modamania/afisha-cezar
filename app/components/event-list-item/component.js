import Ember from 'ember';

export default Ember.Component.extend({
	actions: {
		delete(event) {
			event.destroyRecord();
		},
		isVisible(event)	{
			event.toggleProperty('visible');
			event.save();
		}
	}
});
