import Ember from 'ember';

export default Ember.Route.extend({
	deactivate() {
		let model = this.modelFor('events/edit');

		if(model.get('idDirty')) {
			model.rollback();
		}
	},

	actions: {
		save() {
			let model = this.modelFor('events/edit');
			model.save().then(() => {
				this.transitionTo('events');
			});
		},

		cancel() {
			this.transitionTo('events');
		},
		
		removeCover() {
			let model = this.modelFor('events/edit');
			model.set('cover', '');
		}
	}
});
