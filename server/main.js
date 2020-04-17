import { Meteor } from 'meteor/meteor';
import { Documents } from '../imports/collections/documents';


Meteor.startup(() => {
  // code to run on server at startup
  Meteor.publish('documents', function () {
    return Documents.find({ ownerId: this.userId });
  });
});
