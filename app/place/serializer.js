import DS from 'ember-data';

export default DS.RESTSerializer.extend(DS.EmbeddedRecordsMixin, {
	isNewSerializerAPI: true,
	attrs: {
		event: {embedded: 'always'},
		sections: {embedded: 'always'}
	}
});
