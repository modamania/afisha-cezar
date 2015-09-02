import DS from 'ember-data';

export default DS.RESTSerializer.extend(DS.EmbeddedRecordsMixin, {
	isNewSerializerAPI: true,

	attrs: {
		place: {embedded: 'always'},
		seats: {embedded: 'always'}
	}
});