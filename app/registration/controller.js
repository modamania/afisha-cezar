import Ember from 'ember';
import ENV from '../config/environment';

export default Ember.Controller.extend({
	actions: {
		createUser() {
			$.post(ENV.apiHost + '/registration', {
				email: this.get('userEmail'),
				password: this.get('userPassword'),
				name: this.get('userName')
			});
		}
	}
});
