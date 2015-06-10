import Ember from 'ember';

export default Ember.Route.extend({
	model: function() {
		return this.store.createRecord('event');
	},

	deactivate() {
		let model = this.modelFor('events/new');

		if(model.get('isDirty')) {
			model.deleteRecord();
		}
	},

	actions: {
		save() {
			let model = this.modelFor('events/new');
			model.save().then(() => {
				this.transitionTo('events');
			});
		},
		cancel() {
			this.transitionTo('events');
		},

		removeCover() {
			let model = this.modelFor('events/new');
			model.set('cover', '');
		}
	}
});
