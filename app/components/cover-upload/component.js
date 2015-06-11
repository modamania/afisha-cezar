import Ember from 'ember';
import EmberUploader from 'ember-uploader';

export default EmberUploader.FileField.extend({
  url: '',
  cover: null,

  filesDidChange: (function() {
    let uploadUrl = this.get('url');
    let files = this.get('files');

    let uploader = EmberUploader.Uploader.create({
      url: uploadUrl
    });

    if (!Ember.isEmpty(files)) {
      let promise = uploader.upload(files[0]);
      
      promise.then((data) => {
        this.set('cover', data.filename);
      }, function(error) {
        console.log('Ошбика згрузки файла');
      })
    }  
  }).observes('files')
}); 