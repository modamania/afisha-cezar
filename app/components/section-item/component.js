import Ember from 'ember';

export default Ember.Component.extend({
	section: '',

	didInsertElement() {
		let currentPrice = this.get('section.price');

		if (currentPrice === 0) {
			this.set('section.price', '');
		}
	}
});
